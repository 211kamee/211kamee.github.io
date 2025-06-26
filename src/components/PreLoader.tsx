"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function PreLoader() {
	const [counter, setCounter] = useState(0);

	function incremental() {
		setCounter((prev) => {
			const x = prev + Math.floor(Math.random() * 10);

			if (x >= 100) return 100;

			setTimeout(() => incremental(), 300);
			return x;
		});
	}

	function afterLoad() {
		window.removeEventListener("load", afterLoad);
		const tl = gsap.timeline();
		tl.to("#counter", {
			delay: 2,
			y: "200%",
		});
		tl.to("#row", {
			x: "-100%",
			delay: 0.5,
			duration: 0.2,
			stagger: 0.1,
		});
	}

	useGSAP(() => {
		incremental();
		if (document.readyState === "complete") {
			afterLoad(); // load already happened
		} else {
			window.addEventListener("load", afterLoad);
		}
	});

	return (
		<div className="fixed inset-0">
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<div className="w-full h-[10svh] bg-foreground" id="row"></div>
			<span
				className="absolute text-background bottom-0 right-0 m-4 leading-8 font-ruslanDisplay text-7xl md:text-9xl animate-pulse"
				id="counter"
			>
				{counter}%
			</span>
		</div>
	);
}
