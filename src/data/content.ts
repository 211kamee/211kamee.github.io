export type Project = {
	id: string;
	title: string;
	description: string;
	tech: string[];
	link?: string;
};

export type Experience = {
	company: string;
	role: string;
	period: string;
	bullets: string[];
};

export type Skill = {
	category: string;
	items: string[];
};

export type Education = {
	institution: string;
	degree: string;
	period: string;
	location?: string;
	gpa?: string;
	type?: string;
	subjects?: string[];
	achievements?: string[];
};

export const projects: Project[] = [
	{
		id: "p1",
		title: "DevBoard",
		description:
			"A minimal dashboard showcasing charts, auth, and responsive layout using Next.js.",
		tech: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
		link: "#",
	},
	{
		id: "p2",
		title: "API Toolkit",
		description:
			"Mock REST API with caching and rate-limiting for local development.",
		tech: ["Node.js", "Express", "Redis"],
		link: "#",
	},
	{
		id: "p3",
		title: "AnimCraft",
		description:
			"Micro-interactions library with accessible hooks and presets.",
		tech: ["React", "TypeScript", "GSAP"],
		link: "#",
	},
];

export const experience: Experience[] = [
	{
		company: "Open Source",
		role: "Contributor",
		period: "2023 — Present",
		bullets: [
			"Raised PRs for performance and DX improvements.",
			"Reviewed issues, improved docs, and triaged bugs.",
		],
	},
	{
		company: "Freelance",
		role: "Full‑stack Developer",
		period: "2022 — 2023",
		bullets: [
			"Built landing pages with semantic HTML and Tailwind.",
			"Integrated simple forms and serverless email handlers.",
		],
	},
];

export const skills: Skill[] = [
	{ category: "Languages", items: ["TypeScript", "JavaScript", "Python"] },
	{ category: "Frameworks", items: ["Next.js", "React", "Express"] },
	{ category: "Styling", items: ["Tailwind CSS", "CSS Modules"] },
	{ category: "Tools", items: ["Git", "GSAP", "Postman"] },
];

export const contact = {
	email: "hello@example.com",
	location: "Remote / India",
	profiles: [
		{ label: "GitHub", href: "#" },
		{ label: "LinkedIn", href: "#" },
		{ label: "Twitter", href: "#" },
	],
};

export const education: Education[] = [
	{
		institution: "Department of Operational Research, University of Delhi",
		degree: "Master of Operational Research",
		period: "2025 - Present",
		location: "New Delhi, India",
		type: "Masters",
		subjects: ["Operations Research", "Mathematical Modeling", "Data Analysis", "Optimization"],
	},
	{
		institution: "Shivaji College, University of Delhi",
		degree: "BSc. Computer Science",
		period: "2022 - 2025",
		location: "New Delhi, India",
		gpa: "8.2/10",
		type: "Graduation",
		subjects: ["Python", "Database Systems", "Data Analysis", "Computer Networks", "Algorithms", "Software Engineering", "Machine Learning"],
	},
	{
		institution: "Plato Public Sr. Sec. School",
		degree: "Grade: 12th",
		period: "2022",
		location: "New Delhi, India",
		gpa: "90%",
		type: "High School",
		subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
	},
];
