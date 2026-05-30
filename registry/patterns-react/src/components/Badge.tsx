import type { ReactNode } from "react";
import { cn } from "@/components/Button";

type BadgeProps = {
	className?: string;
	children: ReactNode;
	dot?: boolean;
};

export function Badge({ className, children, dot }: BadgeProps) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
				className,
			)}
		>
			{dot ? <span aria-hidden="true" className="text-sky-500">•</span> : null}
			{children}
		</span>
	);
}
