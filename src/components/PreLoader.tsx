"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function PreLoader() {
	const valRef = useRef(0);
	const counterRef = useRef<HTMLDivElement>(null);

	function afterLoad() {
		console.log("loaded");

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

	async function handleIncrement() {
		const newValRef = valRef.current + 10 + Math.floor(Math.random() * 10);

		if (newValRef >= 100) {
			if (counterRef.current && document.readyState === "complete") {
				valRef.current = 100;
				counterRef.current.innerText = `${valRef.current}%`;
				await wait(200);
				return afterLoad();
			}

			await wait(200);
			return handleIncrement();
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
		<div className="fixed inset-0" id="preLoader">
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
