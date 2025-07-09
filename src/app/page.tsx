import Whoami from "@/components/Whoami";
import { BumbleBee, Cat, Keyboard, Owl } from "@/components/SVG";

export default function Main() {
	return (
		<main className="flex flex-col">
			<section
				className="relative w-full h-lvh flex flex-col justify-center items-center gap-4 p-4 overflow-hidden"
				id="hero"
			>
				<h1 className="font-bold text-2xl md:text-4xl">I&apos;m Arpit an</h1>
				<p className="font-ruslanDisplay text-4xl md:text-8xl text-theme font-outline">
					Aspiring
					<span className="block text-foreground ml-8">Developer</span>
				</p>
				<span
					className="absolute h-1/2 w-3/5 flex justify-center items-center flex-col -z-10"
					id="SVGs"
				>
					<Owl className="opacity-50 absolute h-1/8 md:h-1/4 top-[0] left-[0] -translate-y-1/2 -translate-x-1/2" />
					<BumbleBee className="opacity-50 absolute h-1/8 md:h-1/4 top-0 right-0 -translate-y-1/2 translate-x-1/2" />
					<Keyboard className="opacity-50 absolute scale-75 border border-foreground p-0.5 h-1/8 md:h-1/4 bottom-0 md:left-0 left-1/2 translate-y-1/2 -translate-x-1/2" />
					<Cat className="opacity-50 absolute h-1/8 md:h-1/4 md:bottom-0 bottom-4/5 md:right-0 right-1/2 translate-y-1/2 translate-x-1/2" />
				</span>
			</section>
			{/* 
			<section>
				<div>Give & Take</div>
				<div>There should be Gain of both sides in a TRADE</div>
			</section>	
			*/}
			<section className="w-full h-lvh flex flex-col justify-center items-center gap-4 p-4 bg-accent">
				<h1 className="font-ruslanDisplay text-4xl md:text-8xl text-theme relative font-outline">
					<Whoami className="w-18 md:w-48 absolute rotate-3 right-1/12 -bottom-2" />
					About me
				</h1>
				<p className="text-xl md:text-2xl text-center w-3/4 md:w-2/3 ">
					An Aspiring developer, who&apos;s into clean, efficient solutions, and
					always exploring and learning how backend systems and infrastructure
					works.
				</p>
			</section>
			{/* <section>	<div>[FANCY] I EXPLORE | I LEARN | I CREATE</div>	</section> */}
			{/* <section>Projects</section> */}
			{/* <section>Social and Tech Skills</section> */}
			{/* <section>Contact</section> */}
		</main>
	);
}
