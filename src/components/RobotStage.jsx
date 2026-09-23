import clsx from "clsx";
import Image from "next/image";

/**
 * 机器人展示台。
 * 因为图片是透明底 PNG，这里用「聚光灯 + 同心环 + 地面阴影」给机器人一个舞台，
 * 而不是套一个白色方框（深色背景上更干净）。
 */
const RobotStage = ({
  src,
  alt,
  priority = false,
  className,
  imageClassName,
  sizes = "(min-width: 1024px) 36rem, 88vw",
  rings = true,
  glow = true,
}) => {
  return (
    <div className={clsx("relative isolate", className)}>
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,77,46,0.22),rgba(255,255,255,0.07)_40%,transparent_72%)] blur-2xl"
        />
      )}

      {rings && (
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="absolute inset-0 -z-10 h-full w-full text-white"
        >
          <circle
            cx="200"
            cy="200"
            r="188"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.07"
          />
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.09"
            strokeDasharray="2 8"
          />
          {/* 十字准线 */}
          <path
            d="M200 4v26M200 370v26M4 200h26M370 200h26"
            stroke="currentColor"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
          {/* 强调弧段 */}
          <path
            d="M200 12a188 188 0 0 1 133 61"
            fill="none"
            stroke="#FF4D2E"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
          <path
            d="M67 339a188 188 0 0 1-42-97"
            fill="none"
            stroke="#FF4D2E"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
          {/* 地面阴影 */}
          <ellipse
            cx="200"
            cy="352"
            rx="118"
            ry="16"
            fill="black"
            fillOpacity="0.6"
            className="blur-[6px]"
          />
        </svg>
      )}

      <div className="relative aspect-square w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={clsx(
            "object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.6)]",
            imageClassName
          )}
        />
      </div>
    </div>
  );
};

export default RobotStage;
