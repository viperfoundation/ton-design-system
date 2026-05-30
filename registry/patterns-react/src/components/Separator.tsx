export function Separator({ className = "" }: { className?: string }) {
	return <div className={`h-px w-full bg-slate-200/70 dark:bg-white/10 ${className}`} />;
}
