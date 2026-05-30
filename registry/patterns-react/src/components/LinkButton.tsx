import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/Button";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	className?: string;
	children?: ReactNode;
};

export function LinkButton({ className, children, ...props }: LinkButtonProps) {
	return (
		<a
			className={cn(
				"inline-flex items-center justify-center whitespace-nowrap rounded-md text-title1 font-medium",
				className,
			)}
			{...props}
		>
			{children}
		</a>
	);
}
