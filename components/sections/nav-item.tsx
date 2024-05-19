import React from "react";

export const NavItem = ({
  item,
  onClick,
  children,
}: {
  item: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <div
    onClick={onClick}
    className={`${
      item === "Aulas" ? "bg-muted" : ""
    } flex items-center gap-3 px-3 py-2 hover:text-primary rounded-lg transition-all`}
  >
    {children}
  </div>
);
