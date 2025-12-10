import { experience } from "@/data/content";

export default function Experience() {

	return (
		<section className="w-full min-h-lvh flex flex-col items-center gap-4 lg:gap-6 p-4 sm:p-6 bg-accent" id="experience">
			<h2 className="font-focus text-2xl sm:text-3xl lg:text-4xl xl:text-6xl text-theme font-outline text-center">Experience</h2>
			<div className="w-full max-w-5xl relative">
				<div className="absolute left-4 sm:left-6 lg:left-1/2 top-0 bottom-0 w-px bg-foreground/20" />
				<ul className="space-y-6 lg:space-y-8">
					{experience.map((e, idx) => (
						<li key={e.company + e.role} className="reveal-card relative lg:flex lg:items-start">
							<div className="hidden lg:block lg:w-1/2 pr-6 text-right lg:order-1 lg:[&:nth-child(even)]:order-2">
								<p className="font-semibold text-sm lg:text-base">{e.role}</p>
								<p className="text-xs lg:text-sm opacity-70">{e.company}</p>
							</div>
							<div className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 size-2 sm:size-3 rounded-full bg-primary shadow" />
							<div className="lg:w-1/2 lg:pl-6 lg:order-2 lg:[&:nth-child(even)]:order-1">
								<div className="rounded-xl border border-foreground/10 bg-background/60 backdrop-blur p-3 sm:p-4 shadow-sm">
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
										<p className="font-semibold text-sm lg:text-base lg:hidden">{e.role} @ {e.company}</p>
										<p className="text-xs sm:text-sm opacity-70">{e.period}</p>
									</div>
									<ul className="list-disc ml-4 sm:ml-5 mt-2 space-y-1 text-xs sm:text-sm">
										{e.bullets.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}


