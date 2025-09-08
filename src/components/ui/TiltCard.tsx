"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type TiltCardProps = {
	className?: string;
	children: React.ReactNode;
	maxTiltDeg?: number;
};

export default function TiltCard({ className = "", children, maxTiltDeg = 10 }: TiltCardProps) {
	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		const wrapper = wrapperRef.current!;
		const card = cardRef.current!;

		function handleMove(e: MouseEvent) {
			const rect = wrapper.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;
			const tiltX = (0.5 - y) * maxTiltDeg;
			const tiltY = (x - 0.5) * maxTiltDeg;
			gsap.to(card, { rotateX: tiltX, rotateY: tiltY, transformPerspective: 800, duration: 0.2 });
		}

		function handleLeave() {
			gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.4, ease: "power2.out" });
		}

		wrapper.addEventListener("mousemove", handleMove);
		wrapper.addEventListener("mouseleave", handleLeave);
		return () => {
			wrapper.removeEventListener("mousemove", handleMove);
			wrapper.removeEventListener("mouseleave", handleLeave);
		};
	});

	return (
		<div ref={wrapperRef} className={`relative [transform-style:preserve-3d] ${className}`}>
			<div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-xl" />
			<div ref={cardRef} className="relative rounded-xl border border-foreground/10 bg-background/50 backdrop-blur shadow-sm">
				{children}
			</div>
		</div>
	);
}


