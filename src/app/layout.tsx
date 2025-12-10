import type { Metadata } from "next";
import { Ruslan_Display, Playfair_Display } from "next/font/google";
import "./globals.css";
import PreLoader from "@/components/PreLoader";
import Header from "@/components/Header";
import BackToTop from "@/components/BackToTop";

const focus = Ruslan_Display({
	weight: "400",
	variable: "--font-focus",
	subsets: ["latin"],
});

const main = Playfair_Display({
	weight: "400",
	variable: "--font-main",
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
				className={`cursor-crosshair antialiased break-words\t ${focus.variable} ${main.variable}`}
			>
				<PreLoader />
				<Header />
				{children}
				<BackToTop />
			</body>
		</html>
	);
}
