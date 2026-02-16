"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";
import { Paw } from "./SVG";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = () => setMenuOpen(false);
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", closeMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", closeMenu);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { threshold: 0.3 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      ref={headerRef}
      className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none"
    >
      <nav className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] my-4 sm:my-8 backdrop-blur-md border border-x-2 border-muted-foreground">
        <a href="#hero">
          <Paw className="h-10 w-10 -my-2" />
        </a>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="cursor-pointer flex sm:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden sm:flex gap-8 lg:gap-12 text-foreground/25">
          {NAV_ITEMS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors duration-300 hover:text-foreground/60 ${
                  activeSection === id ? "text-foreground" : ""
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="gap-5 text-xl hidden sm:flex">
          {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-foreground/60 transition-colors duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100 my-2" : "max-h-0 opacity-0"
        }`}
      >
        <MobileMenu onNavClick={closeMenu} activeSection={activeSection} />
      </div>
    </header>
  );
}
