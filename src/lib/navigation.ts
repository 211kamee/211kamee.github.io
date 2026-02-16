import { Github, Linkedin, Instagram } from "lucide-react";

export const NAV_ITEMS = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
	{ href: "https://in.linkedin.com/in/211kamee", icon: Linkedin, label: "LinkedIn" },
	{ href: "https://github.com/211kamee", icon: Github, label: "GitHub" },
	{ href: "https://instagram.com/211kamee", icon: Instagram, label: "Instagram" },
] as const;
