import { contact } from "@/data/content";

export default function Contact() {

	return (
		<section className="w-full min-h-lvh flex flex-col items-center gap-4 lg:gap-6 p-4 sm:p-6 bg-accent" id="contact">
			<h2 className="font-ruslanDisplay text-2xl sm:text-3xl lg:text-4xl xl:text-6xl text-theme font-outline text-center">Contact</h2>
			<div className="reveal-card w-full max-w-3xl rounded-2xl p-4 sm:p-6 border border-foreground/10 bg-background/40 backdrop-blur shadow-md">
				<p className="text-sm sm:text-base opacity-80 text-center">Based in {contact.location}</p>
				<a href={`mailto:${contact.email}`} className="mt-2 inline-block underline underline-offset-4 text-center w-full text-sm sm:text-base">
					{contact.email}
				</a>
				<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
					{contact.profiles.map((p) => (
						<a key={p.label} href={p.href} className="px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-foreground/10 bg-background/40 hover:-translate-y-0.5 transition-transform text-xs sm:text-sm">
							{p.label}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}


