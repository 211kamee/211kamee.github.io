import React from 'react'
import { Paw } from './SVG'

export default function Hero() {
	return (
		<section
			className="relative w-full h-lvh flex not-md:flex-col justify-center items-center gap-4 p-4 overflow-hidden"
			id="hero"
		>
			<Paw className="opacity-70 h-[12rem] md:h-[24rem]" />
			<span>
				<h2 className="font-bold md:text-4xl">
					I&apos;m Arpit an
				</h2>
				<p className="font-ruslanDisplay text-4xl md:text-8xl text-theme font-outline">
					Aspiring
					<span className="text-foreground block">
						Developer
					</span>
				</p>
			</span>
		</section>
	)
}
