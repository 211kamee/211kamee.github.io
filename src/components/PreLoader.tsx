"use client";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function PreLoader() {
	// counter element
	const valRef = useRef(0);
	const counterRef = useRef<HTMLDivElement>(null);

	// GSAP properties after after everything is loaded
	function afterLoad() {
		const tl = gsap.timeline();
		tl.to("#counter", {
			delay: 0.3,
			bottom: "-10%",
		});
		tl.to(".cRow", {
			x: "-100%",
			delay: 0.3,
			duration: 0.2,
			stagger: 0.1,
		});
		tl.to("#preLoader", {
			display: "none",
		});
	}

	// Randomly incrementing the counter for progressing effect
	async function handleIncrement() {
		const newValRef = valRef.current + 10 + Math.floor(Math.random() * 10);

		if (newValRef >= 100) {
			if (counterRef.current && document.readyState === "complete") {
				valRef.current = 100;
				counterRef.current.innerText = `${valRef.current}%`;
				await wait(200);
				return afterLoad();
			} else {
				await wait(200);
				return handleIncrement();
			}
		}

		if (counterRef.current) {
			valRef.current = newValRef;
			counterRef.current.innerText = `${valRef.current}%`;
		}
		await wait(100);
		return handleIncrement();
	}

	useGSAP(() => {
		handleIncrement();

		gsap.to("#hero", {
			opacity: 0,
			scrollTrigger: {
				trigger: "#hero",
				pin: true,
				scrub: 1,
			},
		});
	});

	return (
		<div className="fixed inset-0 z-10" id="preLoader">
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div className="cRow w-full h-[10svh] bg-dark"></div>
			<div
				className="absolute text-light bottom-0 right-0 m-4 leading-8 font-ruslanDisplay text-7xl md:text-9xl animate-pulse"
				id="counter"
				ref={counterRef}
			></div>
		</div>
	);
}
