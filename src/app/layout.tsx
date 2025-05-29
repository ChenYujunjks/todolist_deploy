import Link from "next/link";
import { Inter } from "next/font/google";
import { Provider } from "@/components/trpc/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "My todo list",
  description: "A Next.js project using tRPC, Supabase and pnpm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-foreground antialiased">
      <body
        className={`${inter.className} bg-[--color-background] flex flex-col min-h-screen`}
      >
        <Provider>
          <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[rgba(255,255,255,0.6)] dark:supports-[backdrop-filter]:bg-[rgba(0,0,0,0.6)] border-b border-[--color-card-border]">
            <div className="container mx-auto p-4 flex items-center">
              <Link
                href="/"
                className="text-lg font-semibold tracking-tight text-[--color-foreground] hover:text-[--color-brand] transition"
              >
                {metadata.title as string}
              </Link>
            </div>
          </header>

          <main className="flex-1 container mx-auto p-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
