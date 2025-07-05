CREATE TABLE IF NOT EXISTS "public"."todos" (
    "id" integer NOT NULL,
    "title" text NOT NULL,
    "description" text,
    "is_completed" boolean DEFAULT false NOT NULL,
    "created_at" timestamp with time zone DEFAULT timezone('utc'::text, now()),
    "due_date" date
);

CREATE SEQUENCE IF NOT EXISTS "public"."todos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER TABLE ONLY "public"."todos" ALTER COLUMN "id" SET DEFAULT nextval('public.todos_id_seq'::regclass);

ALTER TABLE ONLY "public"."todos"
    ADD CONSTRAINT "todos_pkey" PRIMARY KEY ("id");
