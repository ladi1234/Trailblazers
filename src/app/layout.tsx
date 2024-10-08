export const runtime = "nodejs";
export const dynamic = "force-static";

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/global/Sidebar";
import Footer from "@/components/global/Footer";
import SidePanel from "@/components/global/SidePanel";

export const metadata: Metadata = {
  title: "Vital Aid",
  description: "AI emergency responder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className={cn(
          "h-screen max-h-screen bg-background font-sans antialiased",
        )}
      >
        <div className="flex h-full flex-col md:flex-row">
          <Header />
          <Sidebar />
          <SidePanel />
          <div className="flex-1 overflow-auto scrollbar-thin md:flex-[0.75] lg:flex-[0.85]">
            {children}
          </div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
