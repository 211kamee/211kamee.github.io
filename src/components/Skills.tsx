import { skills } from "@/data/content";

export default function Skills() {

	return (
		<section className="w-full min-h-lvh flex flex-col items-center gap-4 lg:gap-6 p-4 sm:p-6 bg-accent" id="skills">
			<h2 className="font-ruslanDisplay text-2xl sm:text-3xl lg:text-4xl xl:text-6xl text-theme font-outline text-center">Skills</h2>
			<div className="w-full max-w-5xl">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
					{skills.map((s) => (
						<div key={s.category} className="reveal-card py-3 sm:py-4">
							<h3 className="font-semibold mb-2 text-sm sm:text-base">{s.category}</h3>
							<div className="flex flex-wrap gap-1 sm:gap-2">
								{s.items.map((i) => (
									<span
										key={i}
										className="text-xs px-2 sm:px-3 py-1 rounded-full border border-foreground/10 bg-background/40 backdrop-blur hover:-translate-y-0.5 transition-transform"
									>
										{i}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


