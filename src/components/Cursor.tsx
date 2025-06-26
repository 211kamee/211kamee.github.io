"use client";
import { useEffect } from "react";

export default function Cursor() {
	useEffect(() => {
		const cursor = document.querySelector("#cursor") as HTMLElement;
		const handleMouseMove = (e: MouseEvent) => {
			cursor.style.opacity = "100%";
			cursor.style.left = `${e.clientX}px`;
			cursor.style.top = `${e.clientY}px`;
		};

		document.body.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.body.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return (
		<div
			className="w-8 h-8 md:w-16 md:h-16 opacity-0 rounded-full bg-foreground mix-blend-difference fixed -translate-x-1/2 -translate-y-1/2"
			id="cursor"
		></div>
	);
}
