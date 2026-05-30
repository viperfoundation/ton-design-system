import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/components/Button";
import "./Typography.css";

type Variant = "eyebrow" | "display" | "heading" | "section" | "subsection" | "lead" | "body" | "caption" | "mono";

type TypographyProps<T extends ElementType = "p"> = {
	as?: T;
	children: ReactNode;
	className?: string;
	variant?: Variant;
	tone?: "default" | "primary" | "accent" | "fg" | "surface" | "fg-muted" | "muted" | "subtle" | "inverse";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClasses: Record<Variant, string> = {
	eyebrow: "typo-eyebrow",
	display: "typo-display",
	heading: "typo-heading",
	section: "typo-section",
	subsection: "typo-subsection",
	lead: "typo-lead",
	body: "typo-body",
	caption: "typo-caption",
	mono: "typo-mono",
};

const toneClasses: Record<NonNullable<TypographyProps["tone"]>, string> = {
	default: "typo-tone-default",
	primary: "typo-tone-primary",
	accent: "typo-tone-accent",
	fg: "typo-tone-fg",
	surface: "typo-tone-surface",
	"fg-muted": "typo-tone-fg-muted",
	muted: "typo-tone-muted",
	subtle: "typo-tone-subtle",
	inverse: "typo-tone-inverse",
};

export function Typography<T extends ElementType = "p">({
	as,
	children,
	className,
	variant = "body",
	tone = "default",
	...rest
}: TypographyProps<T>) {
	const Comp = (as ?? (variant === "display" || variant === "heading" || variant === "section" || variant === "subsection" ? "h2" : "p")) as ElementType;
	const toneColor: Record<NonNullable<TypographyProps["tone"]>, string> = {
		default: "inherit",
		primary: "var(--primary)",
		accent: "var(--ton-blue-700)",
		fg: "var(--fg)",
		surface: "var(--surface)",
		"fg-muted": "var(--text-slate-300)",
		muted: "var(--fg-muted)",
		subtle: "var(--fg-subtle)",
		inverse: "var(--fg-on-primary)",
	};
	const style: CSSProperties = { color: toneColor[tone] };

	return (
		<Comp
			className={cn("typo", variantClasses[variant], toneClasses[tone], className)}
			style={style}
			{...rest}
		>
			{children}
		</Comp>
	);
}
