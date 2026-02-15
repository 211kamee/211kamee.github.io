import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/navigation";

const GLASS_CARD =
	"p-4 flex justify-center w-full rounded-xl h-fit bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] backdrop-blur-md hover:text-foreground/60 transition-colors duration-300";

export default function MobileMenu({
	onNavClick,
	activeSection,
}: {
	onNavClick: () => void;
	activeSection: string;
}) {
	return (
		<div className="grid items-center grid-cols-2 sm:hidden px-6 py-5 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] backdrop-blur-md">
			<ul className="flex flex-col gap-4 text-foreground/25">
				{NAV_ITEMS.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`#${id}`}
							onClick={onNavClick}
							className={`w-fit transition-colors duration-300 ${
								activeSection === id
									? "text-foreground"
									: ""
							}`}
						>
							{label}
						</a>
					</li>
				))}
			</ul>

			<div className="flex flex-col gap-3 items-center justify-center">
				{SOCIAL_LINKS.map(({ href, icon: Icon, label }, i) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						className={`${GLASS_CARD} ${
							i === 0 ? "flex-1" : ""
						}`}
					>
						<Icon size={i === 0 ? 28 : 22} />
					</a>
				))}
			</div>
		</div>
	);
}
