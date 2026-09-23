import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * 战队标识图片。
 * 换 logo 只需要覆盖 public/images/brand/logo.png，不用改代码。
 * 原图 785×786 透明底 PNG，这里按 1:1 声明尺寸，实际显示大小由 class 控制。
 */
const LOGO_SRC = "/images/brand/logo.png";

/** 战队标识：官方 logo 图（透明圆底），替代早期的六边形占位图形 */
const Mark = ({ className }) => (
  <Image
    src={LOGO_SRC}
    alt={`${site.name} 战队标识`}
    width={785}
    height={786}
    priority
    sizes="72px"
    className={clsx("flex-none rounded-full", className)}
  />
);

const Logo = ({ href, className, invert = false, showName = true }) => {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <Mark className="h-8 w-8 sm:h-9 sm:w-9" />
      {showName && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-[0.14em]">
            {site.name}
          </span>
          <span className="mt-0.5 text-[9px] font-medium tracking-[0.22em] text-neutral-500">
            {site.nameCn}
          </span>
        </span>
      )}
    </span>
  );

  const cls = clsx(
    "inline-flex items-center transition",
    invert ? "text-white hover:text-accent" : "text-white hover:text-accent",
    className
  );

  if (href) {
    return (
      <Link href={href} aria-label="回到首页" className={cls}>
        {content}
      </Link>
    );
  }

  return <span className={cls}>{content}</span>;
};

export default Logo;
