import { Geist, Geist_Mono } from "next/font/google";

import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/trpc/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My todo list",
  description:
    "A Next.js project with using Trpc supabase and pnpm as management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body
        className={`${inter.className} bg-white flex flex-col min-h-screen`}
      >
        <Provider>
          <div className="flex-1">
            <header className="bg-white shadow-md sticky top-0 z-50">
              <div className="container mx-auto p-4">
                <Link href="/" className="text-gray-700 hover:text-indigo-500">
                  <h2 className="text-xl font-semibold">
                    {metadata.title as string}
                  </h2>
                </Link>
              </div>
            </header>
            <main className="container mx-auto p-6">{children}</main>
          </div>
          <footer className="bg-gray-100 text-gray-600 text-center py-4 mt-auto">
            <p>© 2024 My Todo List. All rights reserved.</p>
          </footer>
        </Provider>
      </body>
    </html>
  );
}
