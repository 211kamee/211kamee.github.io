import type { Metadata } from "next";
import { Ruslan_Display, Nova_Round } from "next/font/google";
import "./globals.css";
import PreLoader from "@/components/PreLoader";

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
				className={`cursor-crosshair antialiased break-words	 ${ruslanDisplay.variable} ${novaRound.variable}`}
			>
				<PreLoader />

				{children}
			</body>
		</html>
	);
}
