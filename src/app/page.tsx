import Whoami from "@/components/Whoami";

export default function Home() {
	return (
		<main className="flex flex-col">
			<section
				className="w-full h-svh flex flex-col justify-center items-center gap-4 p-4"
				id="hero"
			>
				{/* <div className="h-svh w-full "></div> */}
				<h1 className="font-bold text-2xl md:text-4xl">KaMee</h1>
				<p className="font-ruslanDisplay text-4xl md:text-8xl text-theme font-outline">
					Aspiring
					<span className="block text-foreground ml-8">Developer</span>
				</p>
				<span className="absolute"></span>
			</section>
			{/* 
			<section>
				<div>Give & Take</div>
				<div>There should be Gain of both sides in a TRADE</div>
			</section>	
			*/}
			<section className="w-full h-lvh flex flex-col justify-center items-center gap-4 p-4 z-10 bg-accent">
				<h1 className="font-ruslanDisplay text-4xl md:text-8xl text-theme relative font-outline">
					<Whoami className="w-18 md:w-48 absolute rotate-3 right-1/12 -bottom-2" />
					About me
				</h1>
				<span>Hello, I&apos;m Arpit</span>
				<p className="">
					An Aspiring developer, who&apos;s into clean, efficient solutions, and
					always exploring and learning how backend systems and infrastructure
					works.
				</p>
			</section>
			{/* 			
			<section>
				<div>[FANCY] I EXPLORE | I LEARN | I CREATE</div>
			</section>
			*/}
			{/* <section>Projects</section> */}
			{/* <section>Social and Tech Skills</section> */}
			{/* <section>Contact</section> */}
		</main>
	);
}
