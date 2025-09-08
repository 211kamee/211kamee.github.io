"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [active, setActive] = useState<string>("#hero");

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const ids = ["#hero", "#about", "#projects", "#experience", "#skills", "#education", "#contact"];
		const elements = ids
			.map((id) => document.querySelector(id) as HTMLElement | null)
			.filter(Boolean) as HTMLElement[];

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(`#${entry.target.id}`);
					}
				});
			},
			{ rootMargin: "-20% 0px -50% 0px", threshold: [0, 0.3, 0.7, 1] }
		);

		elements.forEach((el) => observer.observe(el));
		return () => observer.disconnect();
	}, []);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setOpen(false);
			setIsClosing(false);
		}, 300);
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-5 flex justify-center p-1 sm:p-2 md:p-3">
			<nav
				className={
					"w-full max-w-5xl rounded-lg sm:rounded-xl md:rounded-2xl border bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30 transition-all " +
					(isScrolled ? "shadow-md border-foreground/10" : "shadow-sm border-foreground/5")
				}
			>
				<div className="flex items-center justify-between px-2 sm:px-3 py-1.5 sm:py-2 md:px-4">
					<Link 
						href="#hero" 
						className={`font-ruslanDisplay text-theme font-outline transition-all duration-300 ${
							active === "#hero" ? "text-sm sm:text-base md:text-xl" : "text-base sm:text-lg md:text-4xl"
						}`}
					>
						KaMee
					</Link>
					<button onClick={() => setOpen(true)} className="md:hidden p-1.5 sm:p-2 rounded-lg border border-foreground/20 bg-background/60 hover:bg-background/80 transition-colors" aria-label="Open menu">
						<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
					<div className="hidden md:block">
						<Tabs value={active} onValueChange={setActive}>
							<TabsList className="bg-transparent border-0 p-0 h-auto">
								{[
									{ href: "#about", label: "About" },
									{ href: "#projects", label: "Projects" },
									{ href: "#experience", label: "Experience" },
									{ href: "#skills", label: "Skills" },
									{ href: "#education", label: "Education" },
									{ href: "#contact", label: "Contact" },
								].map((item) => (
									<TabsTrigger
										key={item.href}
										value={item.href}
										asChild
										className="data-[state=active]:bg-background/50 data-[state=active]:text-theme data-[state=active]:font-outline hover:bg-background/30 transition-all text-xs lg:text-sm"
									>
										<Link href={item.href}>{item.label}</Link>
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>
				</div>
			</nav>

			{open ? (
				<>
					<button
						aria-label="Close menu overlay"
						onClick={handleClose}
						className="fixed inset-0 z-8 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
					/>
				<div className={`fixed top-0 right-0 z-9 h-full w-72 sm:w-80 max-w-[85%] border-l border-foreground/10 bg-background/80 backdrop-blur-md shadow-2xl ${
					isClosing ? 'animate-slide-out-to-right' : 'animate-slide-in-from-right'
				}`}>
					<div className="flex items-center justify-between p-3 sm:p-4 border-b border-foreground/10">
						<span className="font-ruslanDisplay text-base sm:text-lg text-theme font-outline">Menu</span>
						<button 
							onClick={handleClose} 
							className="p-1.5 sm:p-2 rounded-lg border border-foreground/20 bg-background/60 hover:bg-background/80 transition-colors" 
							aria-label="Close menu"
						>
							<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<ul className="p-3 sm:p-4 space-y-1 sm:space-y-2">
						{[
							{ href: "#about", label: "About" },
							{ href: "#projects", label: "Projects" },
							{ href: "#experience", label: "Experience" },
							{ href: "#skills", label: "Skills" },
							{ href: "#education", label: "Education" },
							{ href: "#contact", label: "Contact" },
						].map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
										active === item.href 
											? "bg-theme/20 text-theme font-outline" 
											: "hover:bg-accent/50 hover:text-foreground"
									}`}
									onClick={handleClose}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
				</>
			) : null}
		</header>
	);
}


