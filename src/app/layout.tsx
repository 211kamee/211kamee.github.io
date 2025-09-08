import type { Metadata } from "next";
import { Ruslan_Display, Nova_Round } from "next/font/google";
import "./globals.css";
import PreLoader from "@/components/PreLoader";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

const ruslanDisplay = Ruslan_Display({
	weight: "400",
	variable: "--font-ruslanDisplay",
	subsets: ["latin"],
});

const novaRound = Nova_Round({
	weight: "400",
	variable: "--font-novaRound",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "KaMee | A Developer",
	description: "Portfolio Webpage of KaMee",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`cursor-crosshair antialiased break-words\t ${ruslanDisplay.variable} ${novaRound.variable}`}
			>
				<PreLoader />
				<Header />
				{children}
				<BackToTop />
			</body>
		</html>
	);
}
