import clsx from "clsx";

export function TagList({ className, children }) {
  return (
    <ul role="list" className={clsx(className, "flex flex-wrap gap-2")}>
      {children}
    </ul>
  );
}

export function TagListItem({ className, children, accent = false }) {
  return (
    <li
      className={clsx(
        "rounded-full border px-3 py-1 text-xs font-medium tracking-tight transition",
        accent
          ? "border-accent/40 bg-accent/10 text-accent-soft"
          : "border-white/10 bg-white/[0.04] text-neutral-300",
        className
      )}
    >
      {children}
    </li>
  );
}
