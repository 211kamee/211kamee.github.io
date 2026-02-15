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
	const valRef = useRef(0);
	const counterRef = useRef<HTMLDivElement>(null);

	function afterLoad() {
		gsap.timeline()
			.to("#counter", { delay: 0.3, bottom: "-25%", duration: 2 })
			.to(".cRow", {
				x: "-100%",
				duration: 0.2,
				stagger: 0.1,
			})
			.to("#preLoader", { display: "none" })
	}

	(async function handleIncrement() {
		const newValRef = valRef.current + 10 + Math.floor(Math.random() * 10);

		if (newValRef >= 100) {
			if (counterRef.current && document.readyState === "complete") {
				valRef.current = 100;
				counterRef.current.innerText = `${valRef.current}%`;
				await wait(200);
				counterRef.current.innerText = `Hey!`;
				afterLoad();
				return;
			} else {
				await wait(200);
				handleIncrement();
				return;
			}
		}

		if (counterRef.current) {
			valRef.current = newValRef;
			counterRef.current.innerText = `${valRef.current}%`;
		}
		await wait(100);
		handleIncrement();
	})()

	useGSAP(() => {
		gsap.to("#hero", {
			opacity: 0,
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});
		gsap.to("#Paw", {
			right: "-100%",
			bottom: "-100%",
			scrollTrigger: {
				trigger: "#hero",
				start: "top top",
				scrub: 1,
			},
		});
	});
	// gsap.to("section", {
	// 	scrollTrigger: {
	// 		trigger: "main",
	// 		scrub: true,
	// 		snap: {
	// 			snapTo: 1,
	// 			ease: "power3",
	// 			duration: 3,
	// 		},
	// 	},
	// });

	return (
		<>
			<div className="fixed inset-0 z-50" id="preLoader">
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
		</>
	);
}
