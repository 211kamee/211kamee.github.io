import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Message from "@/components/Message";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Main() {
	return (
		<main className="flex flex-col">
			<Hero />
			<Message />
			<AboutMe />
			<Projects />
			<Experience />
			<Skills />
			<Education />
			<Contact />
		</main>
	);
}
