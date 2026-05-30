import type { ReactNode } from "react";
import { cn } from "@/components/Button";

type CardProps = {
	as?: "div" | "article" | "section";
	children: ReactNode;
	className?: string;
};

export function Card({ as = "div", children, className }: CardProps) {
	const Comp = as;

	return (
		<Comp
			className={cn(
				"rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5",
				className,
			)}
		>
			{children}
		</Comp>
	);
}
