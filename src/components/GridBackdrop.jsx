import clsx from "clsx";

/**
 * 工程蓝图底纹：1px 网格 + 渐隐遮罩。
 * 用来替代原模板的商业插画底纹，给页面一点「图纸感」。
 */
const GridBackdrop = ({ className, size = 64, opacity = 0.55 }) => {
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: `${size}px ${size}px`,
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, white 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, white 20%, transparent 78%)",
        }}
      />
    </div>
  );
};

export default GridBackdrop;
