import { LucideArrowRight } from "lucide-react";
import { PropsWithChildren } from "react";

export function SectionTitle(props: PropsWithChildren) {
	return (
		<div className="flex justify-between sm:items-center items-start flex-wrap gap-x-8 flex-col sm:flex-row">
			{props.children}
		</div>
	)
}

export function SectionTitleLabel(props: PropsWithChildren) {
	return (
		<p className="text-xl sm:text-2xl text-stone-900 font-medium">{props.children}</p>
	)

}
export function SectionTitleLink(props: PropsWithChildren) {
	return (
		<p className="sm:text-lg font-medium text-blue-800 flex items-center gap-2">{props.children} <LucideArrowRight size={18} /></p>
	)
}
