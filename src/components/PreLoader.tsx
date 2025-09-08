"use client";
import { useRef, useEffect } from "react";

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

	// Ensure page starts from top on load/refresh
	useEffect(() => {
		window.scrollTo(0, 0);
		document.body.style.overflow = "hidden";
		
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	// GSAP properties after everything is loaded
	function afterLoad() {
		const tl = gsap.timeline();
		
		// Hide counter and animate rows
		tl.to("#counter", { delay: 0.3, bottom: "-10%" });
		tl.to(".cRow", {
			x: "-100%",
			delay: 0.3,
			duration: 0.2,
			stagger: 0.1,
		});
		
		// Hide preloader and animate SVGs
		tl.to("#preLoader", { 
			display: "none",
			onComplete: () => {
				// Re-enable scrolling after preloader is hidden
				document.body.style.overflow = "auto";
				// Initialize all page animations
				initializePageAnimations();
			}
		});
		
		tl.from("#Owl", { top: "-100%", left: "-100%" }, "<");
		tl.from("#BumbleBee", { top: "-100%", right: "-100%" }, "<");
		tl.from("#Cat", { right: "-100%", bottom: "-100%" }, "<");
		tl.from("#Keyboard", { bottom: "-100%", left: "-100%" }, "<");
	}

	// Initialize all page animations after preloader
	function initializePageAnimations() {
		// Hero fade out on scroll
		gsap.to("#hero", {
			opacity: 0,
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});

		// SVG animations on scroll
		gsap.to("#Owl", {
			top: "-100%",
			left: "-100%",
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});
		gsap.to("#BumbleBee", {
			top: "-100%",
			right: "-100%",
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});
		gsap.to("#Cat", {
			right: "-100%",
			bottom: "-100%",
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});
		gsap.to("#Keyboard", {
			bottom: "-100%",
			left: "-100%",
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});

		// Section reveal animations
		gsap.from("#projects .reveal-card", {
			opacity: 0,
			y: 24,
			duration: 0.6,
			stagger: 0.1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#projects",
				start: "top 80%",
			},
		});

		gsap.from("#experience .reveal-card", {
			opacity: 0,
			y: 24,
			duration: 0.6,
			stagger: 0.1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#experience",
				start: "top 80%",
			},
		});

		gsap.from("#skills .reveal-card", {
			opacity: 0,
			y: 20,
			duration: 0.5,
			stagger: 0.08,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#skills",
				start: "top 80%",
			},
		});

		gsap.from("#education .reveal-card", {
			opacity: 0,
			y: 20,
			duration: 0.5,
			stagger: 0.08,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#education",
				start: "top 80%",
			},
		});

		gsap.from("#contact .reveal-card", {
			opacity: 0,
			y: 16,
			duration: 0.5,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#contact",
				start: "top 85%",
			},
		});


		// Refresh ScrollTrigger after all animations are set
		ScrollTrigger.refresh();
	}

	// Randomly incrementing the counter for progressing effect
	async function handleIncrement() {
		const newValRef = valRef.current + 10 + Math.floor(Math.random() * 10);

		if (newValRef >= 100) {
			if (counterRef.current && document.readyState === "complete") {
				valRef.current = 100;
				counterRef.current.innerText = `${valRef.current}%`;
				await wait(200);
				counterRef.current.innerText = `Hey!`;
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
