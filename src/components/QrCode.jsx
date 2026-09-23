"use client";

import { useState } from "react";
import clsx from "clsx";

/**
 * 二维码位。
 * 当前指向真实招新群二维码 public/images/join/qrcode.png（四周已内置白色静默区，保证扫码）。
 * 换码：直接覆盖 qrcode.png，或在 src/data/site.js 里改 join.qrImage。
 * 图片加载失败时自动回退到占位图 qrcode-placeholder.svg（占位图不会被误扫）。
 */
const QrCode = ({ src, alt, size = 180, className }) => {
  const [failed, setFailed] = useState(false);
  const fallback = "/images/join/qrcode-placeholder.svg";

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2",
        className
      )}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={failed ? fallback : src}
        alt={alt}
        width={size}
        height={size}
        onError={() => setFailed(true)}
        className="h-full w-full rounded-xl object-contain"
      />
    </div>
  );
};

export default QrCode;
