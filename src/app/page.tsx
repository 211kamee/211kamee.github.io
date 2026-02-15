import Whoami from "@/components/Whoami";
import Hero from "@/components/Hero";
import Header from "@/components/Header";

export default function Main() {
	return (
		<main className="flex flex-col">
			<Header />
			<Hero />
			<section className="w-full h-lvh flex flex-col justify-center items-center gap-4 p-4 bg-accent"
				id="about"
			>
				<h1 className="font-ruslanDisplay text-4xl md:text-8xl text-theme relative font-outline">
					About me
					<Whoami className="w-18 md:w-48 absolute rotate-3 right-1/12 -bottom-2" />
				</h1>
				<p className="text-xl md:text-2xl text-center w-3/4 md:w-2/3 ">
					An Aspiring developer, who&apos;s into clean, efficient solutions, and
					always exploring and learning how backend systems and infrastructure
					works.
				</p>
				{/* [FANCY] I EXPLORE | I LEARN | I CREATE */}
				{/* Exp + Education */}
				{/* Tech Skills */}
			</section>
			{/* <section>Projects</section> */}
		</main>
	);
}
