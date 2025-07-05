"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
	const router = useRouter();
	useEffect(() => {
		router.replace("/");
	}, []);

	return (
		<div className="w-full h-svh flex items-center justify-center text-xl">
			Request not found<br />Redirecting to &apos;/&apos;
		</div>
	);
}
