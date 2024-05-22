"use client";

import { Home, Library, Mail, Calendar } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  blogs: any;
};

const Nav = ({ blogs }: Props) => {
  const [collapse, setCollapse] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Dashboard");
  const activeNavItem = pathname.split("/")[2];

  console.log(blogs);

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        onClick={() => setActiveItem("Dashboard")}
        href="/"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${activeItem === "Dashboard" ? "bg-muted" : ""
          } transition-all hover:text-primary`}
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <div className={`flex-col gap-3 rounded-lg cursor-pointer transition-all`}>
        <div
          className={`${activeItem === "Aulas" ? "bg-muted" : ""
            } flex items-center gap-3 px-3 py-2 hover:text-primary rounded-lg transition-all`}
          onClick={() => {
            setActiveItem("Aulas");
            setCollapse(!collapse);
          }}
        >
          <Library className="h-4 w-4" />
          Aulas
        </div>
        <div
          className="flex flex-col gap-1 mt-1 text-muted-foreground"
          style={{
            maxHeight: collapse ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.4s ease-in-out",
          }}
        >
          {blogs.map((item: { frontmatter: { title: string; }; }, i: React.Key | null | undefined) => (
            <Link
              key={i}
              href={`/aulas/${item.frontmatter.title
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`ml-2 py-2 px-2 text-sm hover:text-primary ${activeNavItem === item.frontmatter.title
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/\s+/g, "-")
                ? "bg-muted/80 text-primary rounded-lg"
                : ""
                }`}
            >
              {item.frontmatter.title}
            </Link>
          ))}

        </div>
      </div>
      <Link
        onClick={() => setActiveItem("Calendario")}
        href="/calendario"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${activeItem === "Calendario" ? "bg-muted" : ""
          } transition-all hover:text-primary`}
      >
        <Calendar className="h-4 w-4" />
        Calendário
      </Link>

      <Link
        onClick={() => setActiveItem("Contato")}
        href="/contato"
        className={`flex items-center gap-3 rounded-lg px-3 py-2 ${activeItem === "Contato" ? "bg-muted" : ""
          } transition-all hover:text-primary`}
      >
        <Mail className="h-4 w-4" />
        Contato
      </Link>


    </nav>
  );
};

export default Nav;
