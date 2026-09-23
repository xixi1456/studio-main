import Link from "next/link";
import clsx from "clsx";

const variants = {
  primary:
    "bg-accent text-ink hover:bg-accent-soft focus-visible:outline-accent",
  secondary:
    "border border-white/15 text-white hover:border-white/40 hover:bg-white/5 focus-visible:outline-white/40",
  ghost: "text-neutral-300 hover:text-white focus-visible:outline-white/40",
};

const sizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-sm sm:text-base",
};

const Button = ({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const cls = clsx(
    "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
      >
        &rarr;
      </span>
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cls}
          {...props}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {inner}
    </button>
  );
};

export default Button;
