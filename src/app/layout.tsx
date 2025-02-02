"use client"

import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import NextAuthProvider from "@/providers/NextAuth";
import "@/app/globals.css";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // サイドバーを表示しないページのリスト
  const noSidebarPages = ["/introduction"];

  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
            
              {children}
            
        </NextAuthProvider>
      </body>
    </html>
  );
}
