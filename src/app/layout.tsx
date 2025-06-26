import type { Metadata } from "next";
import { Ruslan_Display, Nova_Round } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const ruslanDisplay = Ruslan_Display({
	weight: "400",
	variable: "--font-ruslanDisplay",
});

const novaRound = Nova_Round({
	weight: "400",
	variable: "--font-novaRound",
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
				className={`flex flex-col w-full h-svh justify-center items-center cursor-none antialiased ${ruslanDisplay.variable} ${novaRound.variable}`}
			>
				<Cursor />
				{children}
			</body>
		</html>
	);
}
