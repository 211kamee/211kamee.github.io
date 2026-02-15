import { Github, Linkedin, Twitter } from "lucide-react";

export const NAV_ITEMS = [
	{ id: "hero", label: "Home" },
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
	{ href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
	{ href: "https://github.com", icon: Github, label: "GitHub" },
	{ href: "https://x.com", icon: Twitter, label: "X" },
] as const;
