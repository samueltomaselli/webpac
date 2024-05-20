import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {

  GraduationCap,
  Menu,

} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Nav from "@/components/sections/nav";
import SearchInput from "@/components/sections/search-input";
import { getBlogs } from "@/app/aulas/fetchers";
import MobileNav from "@/components/sections/mobile-nav";
import { ThemeProvider } from "@/components/sections/theme-provider";
import { ModeToggle } from "@/components/sections/toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projeto",
  description: "Descrição",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blogs = await getBlogs();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
            <div className="hidden border-r bg-muted/50 md:block">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                  <Link href="/" className="flex items-center gap-2 font-semibold">
                    <GraduationCap className="h-6 w-6" />
                    <span className="">Projeto</span>
                  </Link>

                </div>
                <div className="flex-1">
                  <Nav blogs={blogs} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <header className="flex h-14 items-center gap-4 border-b bg-muted/50 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="flex flex-col">
                    <MobileNav blogs={blogs} />
                  </SheetContent>
                </Sheet>
                <SearchInput />
                <ModeToggle />
              </header>
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
