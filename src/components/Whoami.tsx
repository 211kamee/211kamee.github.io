"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Whoami({ className }: { className: string }) {
	useGSAP(() => {
		gsap.to("#drawSVG", {
			strokeDashoffset: 0,
			scrollTrigger: {
				trigger: "#drawSVG",
				start: "bottom 80%",
				end: "bottom 60%",
				scrub: 3,
			},
		});
	});

	return (
		<svg viewBox="0 0 1250 410" className={className}>
			<path
				id="drawSVG"
				d="M65.7,212.4c0,0-31.4,169.6,20.9,163.3s51.3-141.3,59.7-141.3c8.3,0-18.3,163.6,25.4,141.5c43.8-22.1,77.2-200.1,41.5-183.4s-19.4,135,26.9,96.9c46.4-38.2,143.1-218.6,92.9-264.7c-71.1-60.8-51.9,366.7-51.9,366.7s45.5-217,79.2-178.3S328.1,385.7,395.1,371c67-14.7,121.2-55.5,108.3-104.6c-13-39.8-63.6-57-89.8-11.1s0.7,139.6,33.3,121.2c48.1-27.2,191.4-182.4,241.6-144.7c50.2,37.7-39.8,169.6-64.9,129.8c-25.1-39.8,29.3-146.6,75.3-121.4c46.1,25.2-9.6,128,35.6,136.1c26,6.8,41.3-161.2,41.3-161.2s2.1,146.6,8.4,146.6s31.4-209.4,54.4-154.9c23,54.4,14.6,142.4,23,144.4c8.4,2,27.2-159.2,77.4-146.6c39.8,10.5-7.5,187.9,57.5,171.1c65-16.8,116.5-177.5,116.5-177.5s-48.4,197,41.6,178.2c30.5-8.3,38.9-39.8,38.9-39.8"
				fill="none"
				stroke="var(--foreground)"
				strokeWidth={20}
				strokeDasharray={4700}
				strokeDashoffset={4700}
			></path>
		</svg>
	);
}
