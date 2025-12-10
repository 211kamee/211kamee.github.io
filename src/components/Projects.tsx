import { projects } from "@/data/content";
import TiltCard from "@/components/ui/TiltCard";

export default function Projects() {
	return (
		<section className="w-full min-h-lvh flex flex-col items-center gap-4 lg:gap-6 p-4 sm:p-6 bg-accent" id="projects">
			<h2 className="font-focus text-2xl sm:text-3xl lg:text-4xl xl:text-6xl text-theme font-outline text-center">Projects</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 w-full max-w-6xl">
				{projects.map((p) => (
					<TiltCard key={p.id} className="reveal-card">
						<article className="rounded-xl p-4 sm:p-5">
							<h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
							<p className="text-sm opacity-80 mt-1">{p.description}</p>
							<div className="flex flex-wrap gap-1 sm:gap-2 mt-3">
								{p.tech.map((t) => (
									<span key={t} className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground">
										{t}
									</span>
								))}
							</div>
							{p.link ? (
								<a href={p.link} className="text-primary underline underline-offset-4 mt-3 inline-block text-sm">
									View
								</a>
							) : null}
						</article>
					</TiltCard>
				))}
			</div>
		</section>
	);
}


