import Whoami from "@/components/Whoami";

export default function AboutMe() {
	return (
		<section
			className="relative w-full h-lvh flex flex-col justify-center items-center gap-3 sm:gap-4 p-4 bg-accent"
			id="about"
		>
			<h1 className="font-focus text-2xl sm:text-3xl lg:text-4xl xl:text-6xl 2xl:text-8xl text-theme relative font-outline text-center">
				<Whoami className="w-12 sm:w-16 lg:w-24 xl:w-32 2xl:w-48 absolute rotate-3 right-1/12 -bottom-1 sm:-bottom-2" />
				About me
			</h1>
			<p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-center w-full sm:w-3/4 lg:w-2/3 px-4">
				An Aspiring developer, who&apos;s into clean, efficient solutions, and
				always exploring and learning how backend systems and infrastructure
				works.
			</p>
			<div>[FANCY] I EXPLORE | I LEARN | I CREATE</div>
		</section>
	);
}
