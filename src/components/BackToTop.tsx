"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<button
			aria-label="Back to top"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			className={`fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border bg-background/70 backdrop-blur shadow-md transition-all text-sm sm:text-base ${
				visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
			}`}
		>
			↑ Top
		</button>
	);
}


