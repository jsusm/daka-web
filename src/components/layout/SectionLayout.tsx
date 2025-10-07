import { cn } from "@/lib/cn";
import { PropsWithChildren } from "react";

export default function SectionLayout(props: PropsWithChildren & { className?: string }) {
	return (
		<section className={cn("py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto px-4 space-y-8", props.className)}>
			{props.children}
		</section >
	)
}
