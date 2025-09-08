"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Message() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		// Check if we're in dark mode
		setIsDarkMode(document.documentElement.classList.contains('dark'));
	}, []);

	useGSAP(() => {
		// Create text splits for animation
		const firstMsgSplit = gsap.utils.toArray(".first-message");
		const middleMsgSplit = gsap.utils.toArray(".msg-text-scroll");
		const secMsgSplit = gsap.utils.toArray(".second-message");

		// First message animation
		gsap.fromTo(firstMsgSplit, 
			{ 
				color: "transparent",
				y: 50,
				opacity: 0
			},
			{ 
				color: isDarkMode ? '#f1f5f9' : '#1e293b',
				y: 0,
				opacity: 1,
				ease: "power2.out",
				stagger: 0.1,
				duration: 0.8,
				scrollTrigger: {
					trigger: ".message-content",
					start: "top center",
					end: "42% center",
					scrub: true
				}
			}
		);

		// Middle message animation
		gsap.fromTo(middleMsgSplit,
			{ 
				color: "transparent",
				scale: 0.8,
				opacity: 0
			},
			{ 
				color: isDarkMode ? '#f1f5f9' : '#1e293b',
				scale: 1,
				opacity: 1,
				ease: "power2.out",
				stagger: 0.15,
				duration: 1,
				scrollTrigger: {
					trigger: ".msg-text-scroll",
					start: "30% center",
					end: "101% center",
					scrub: true
				}
			}
		);

		// Second message animation
		gsap.fromTo(secMsgSplit,
			{ 
				color: "transparent",
				y: -50,
				opacity: 0
			},
			{ 
				color: isDarkMode ? '#f1f5f9' : '#1e293b',
				y: 0,
				opacity: 1,
				ease: "power2.out",
				stagger: 0.1,
				duration: 0.8,
				scrollTrigger: {
					trigger: ".second-message",
					start: "top center",
					end: "bottom center",
					scrub: true
				}
			}
		);
	}, [isDarkMode]);

	return (
		<section id="message" className="relative w-full h-lvh flex flex-col justify-center items-center p-4 bg-gradient-to-br from-background via-accent to-background overflow-hidden">
			<div className="message-content text-center space-y-8 max-w-6xl">
				<h1 className="first-message font-ruslanDisplay text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-transparent font-outline">
					Turning Data
				</h1>
				
				<div className="msg-text-scroll text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-transparent font-light">
					into
				</div>
				
				<h1 className="second-message font-ruslanDisplay text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-transparent font-outline">
					Actionable Insights
				</h1>
			</div>
			
			{/* Subtle background elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-theme/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-theme/10 rounded-full blur-2xl"></div>
			</div>
		</section>
	);
}
