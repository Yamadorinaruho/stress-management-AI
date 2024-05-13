import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/providers/NextAuth";
import "@/app/globals.css";
import SideNav from "@/components/sidenav/sidenav";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div className="flex flex-row h-screen">
            <SideNav />
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
