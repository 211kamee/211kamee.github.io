import { BumbleBee, Cat, Keyboard, Owl } from "@/components/SVG";

export default function Hero() {
	return (
		<section
			className="relative w-full h-lvh flex flex-col justify-center items-center gap-3 sm:gap-4 p-4 overflow-hidden"
			id="hero"
		>
			<h1 className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">I&apos;m Arpit an</h1>
			<p className="font-ruslanDisplay text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl text-theme font-outline text-center">
				Aspiring
				<span className="block text-foreground ml-2 sm:ml-4 lg:ml-8">Developer</span>
			</p>
			<span
				className="absolute h-1/2 w-3/5 flex justify-center items-center flex-col -z-10"
				id="SVGs"
			>
				<Owl className="opacity-50 absolute h-1/8 sm:h-1/6 lg:h-1/4 top-[0] left-[0] -translate-y-1/2 -translate-x-1/2" />
				<BumbleBee className="opacity-50 absolute h-1/8 sm:h-1/6 lg:h-1/4 top-0 right-0 -translate-y-1/2 translate-x-1/2" />
				<Keyboard className="opacity-50 absolute scale-50 sm:scale-75 border border-foreground p-0.5 h-1/8 sm:h-1/6 lg:h-1/4 bottom-0 lg:left-0 left-1/2 translate-y-1/2 -translate-x-1/2" />
				<Cat className="opacity-50 absolute h-1/8 sm:h-1/6 lg:h-1/4 lg:bottom-0 bottom-4/5 lg:right-0 right-1/2 translate-y-1/2 translate-x-1/2" />
			</span>
		</section>
	);
}
