# Supabase Keepalive Implementation

## Background

Supabase Free projects are paused after 1 week of inactivity. The goal is to keep the project active without mutating real todo data or adding noisy records.

The first idea was to periodically call the existing add-todo form and then delete the inserted todo. That would work as activity, but it is not the best fit for this project because it creates avoidable writes, consumes sequence ids, and could trigger future business logic such as audit logs, notifications, or analytics.

## Current Backend Shape

The project uses Next.js App Router and tRPC.

- `src/app/api/trpc/[trpc]/route.ts` exposes the tRPC handler.
- `src/server/routers/todos.ts` is the only router currently making Supabase requests.
- `src/server/routers/form.ts` only logs a simulated write and does not touch Supabase.
- `src/lib/supabase-client.ts` creates the Supabase client using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
- The active Supabase table is `public.todos`, created by the migrations in `supabase/migrations`.

Because `form.formSubmit` does not hit Supabase, calling the form router would not keep the Supabase project active. The keepalive should call Supabase directly.

## Implemented Change

A dedicated cron route has been added:

```txt
src/app/api/cron/supabase-keepalive/route.ts
```

The route performs a lightweight read against Supabase:

```ts
await supabase.from("todos").select("id", { count: "exact", head: true });
```

This creates Supabase activity without returning todo rows and without changing application data.

## Vercel Cron Configuration

`vercel.json` configures the cron schedule:

```json
{
  "crons": [
    {
      "path": "/api/cron/supabase-keepalive",
      "schedule": "0 0 */3 * *"
    }
  ]
}
```

This runs every 3 days at 00:00 UTC, comfortably inside Supabase's 1-week inactivity window.

## Endpoint Security

Add a required secret in the Vercel project environment variables:

```txt
CRON_SECRET=...
```

Vercel automatically sends this value as an authorization header when invoking the cron job. The route rejects requests unless the request includes the expected bearer token:

```ts
const authHeader = request.headers.get("authorization");
const cronSecret = process.env.CRON_SECRET;

if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
  return Response.json({ error: "Unauthorized" }, { status: 401 });
}
```

This keeps the route from becoming a public health-check endpoint anyone can trigger.

## Implementation Notes

- The route is separate from tRPC. Cron endpoints are simpler as App Router route handlers because Vercel Cron calls an HTTP GET path directly.
- The route uses a read-only Supabase operation. It avoids insert/delete because that would pollute database history and create unnecessary side effects.
- The response includes `ok`, `checkedAt`, and `count`.
- The route uses the default Next.js runtime and is marked `force-dynamic` so it is always executed when Vercel calls it.

## Follow-Up Security Work

The current todo tRPC router uses `publicProcedure` for add, update, and delete operations. That means anyone who can call the deployed tRPC endpoint can mutate todos. This is separate from keepalive, but it is worth fixing later with authentication or another authorization guard.
