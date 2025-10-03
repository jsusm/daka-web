import { PropsWithChildren } from "react";

export default function SectionLayout(props: PropsWithChildren) {
	return (
		<section className="py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto px-4 space-y-8">
			{props.children}
		</section >
	)
}
