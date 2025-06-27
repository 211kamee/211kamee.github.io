import Whoami from "@/components/Whoami";

export default function Home() {
	return (
		<main className="flex flex-col">
			<section className="w-full h-svh flex flex-col justify-center items-center gap-4">
				{/* <div className="h-svh w-full "></div> */}
				<h1 className="font-bold text-2xl md:text-4xl">KaMee</h1>
				<p className="font-ruslanDisplay text-4xl md:text-8xl text-theme">
					Aspiring
					<span className="block text-foreground ml-8">Developer</span>
				</p>
			</section>
			<section className="w-full h-svh flex flex-col justify-center items-center gap-4">
				<h1 className="font-ruslanDisplay text-4xl md:text-8xl text-theme relative">
					<Whoami className="w-18 md:w-48 absolute rotate-3 right-1/12 -bottom-2" />
					About me
				</h1>
				<span>Hello, I&apos;m Apit</span>
				<p className="">
					An Aspiring developer, who&apos;s into clean, efficient solutions, and
					always exploring and learning how backend systems and infrastructure
					work.
				</p>
			</section>
		</main>
	);
}
