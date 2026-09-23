"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const normalizeOffset = (value, size) => {
  if (!size) return value;
  const wrapped = ((value + size / 2) % size + size) % size;
  return wrapped - size / 2;
};

const TeamGallery = ({ images, fullscreen = false }) => {
  const viewportRef = useRef(null);
  const lastPoint = useRef(null);
  const dragDistance = useRef(0);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);
  const panelSizeRef = useRef({ width: 0, height: 0, gap: 16 });
  const [panelSize, setPanelSize] = useState({ width: 0, height: 0, gap: 16 });
  const [motion, setMotion] = useState({ x: 0, y: 0, wrapX: 0, wrapY: 0 });
  const [activeIndex, setActiveIndex] = useState(null);

  const imageGroups = Array.from({ length: 4 }, (_, groupIndex) =>
    Array.from({ length: 12 }, (_, slot) => images[(groupIndex * 12 + slot) % images.length])
  );
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    const node = viewportRef.current;
    if (!node) return undefined;

    const updatePanelSize = () => {
      const width = node.clientWidth;
      const height = node.clientHeight;
      if (!width || !height) return;

      const gap = Math.min(20, Math.max(12, width * 0.014));
      const cardWidth = Math.max((width - gap * 4) / 4, (height - gap * 3) * 4 / 9);
      const nextSize = {
        width: cardWidth * 4 + gap * 4,
        height: cardWidth * 2.25 + gap * 3,
        gap,
      };

      panelSizeRef.current = nextSize;
      setPanelSize((current) => (
        Math.abs(current.width - nextSize.width) < 0.5 && Math.abs(current.height - nextSize.height) < 0.5
          ? current
          : nextSize
      ));
    };

    updatePanelSize();
    const observer = new ResizeObserver(updatePanelSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => {
    if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + images.length) % images.length);
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  const animateMotion = () => {
    const node = viewportRef.current;
    const width = node?.clientWidth || 0;
    const height = node?.clientHeight || 0;
    const loopWidth = panelSizeRef.current.width || width;
    const loopHeight = panelSizeRef.current.height || height;
    const followsX = target.current.x - position.current.x;
    const followsY = target.current.y - position.current.y;

    position.current.x += followsX * 0.16;
    position.current.y += followsY * 0.16;

    if (!lastPoint.current) {
      target.current.x += velocity.current.x;
      target.current.y += velocity.current.y;
      velocity.current.x *= 0.965;
      velocity.current.y *= 0.965;
    }

    setMotion({
      x: normalizeOffset(position.current.x, loopWidth),
      y: normalizeOffset(position.current.y, loopHeight),
      wrapX: Math.floor((position.current.x + loopWidth / 2) / loopWidth),
      wrapY: Math.floor((position.current.y + loopHeight / 2) / loopHeight),
    });

    const settling = Math.abs(followsX) + Math.abs(followsY) + Math.abs(velocity.current.x) + Math.abs(velocity.current.y);
    if (settling > 0.08 || lastPoint.current) {
      animationFrame.current = requestAnimationFrame(animateMotion);
    } else {
      animationFrame.current = null;
    }
  };

  const startMotion = () => {
    if (!animationFrame.current) animationFrame.current = requestAnimationFrame(animateMotion);
  };

  const onPointerMove = (event) => {
    if (!lastPoint.current) return;
    const dx = event.clientX - lastPoint.current.x;
    const dy = event.clientY - lastPoint.current.y;
    lastPoint.current = { x: event.clientX, y: event.clientY };
    dragDistance.current += Math.abs(dx) + Math.abs(dy);
    target.current.x += dx;
    target.current.y += dy;
    velocity.current.x = velocity.current.x * 0.78 + dx * 0.22;
    velocity.current.y = velocity.current.y * 0.78 + dy * 0.22;
    startMotion();
  };

  const stopPointer = (event) => {
    lastPoint.current = null;
    startMotion();
    event.currentTarget.releasePointerCapture?.(event.pointerId);
  };

  const fallbackPanelWidth = "max(100vw, 177.78dvh)";
  const fallbackPanelHeight = "max(100dvh, 56.25vw)";
  const tileStyle = (x, y) => ({
    left: panelSize.width ? `${x * panelSize.width}px` : x < 0 ? `calc(0px - ${fallbackPanelWidth})` : x > 0 ? fallbackPanelWidth : "0px",
    top: panelSize.height ? `${y * panelSize.height}px` : y < 0 ? `calc(0px - ${fallbackPanelHeight})` : y > 0 ? fallbackPanelHeight : "0px",
    transform: `translate3d(${motion.x}px, ${motion.y}px, 0)`,
    width: panelSize.width ? `${panelSize.width}px` : fallbackPanelWidth,
    height: panelSize.height ? `${panelSize.height}px` : fallbackPanelHeight,
    gap: panelSize.width ? `${panelSize.gap}px` : "clamp(12px, 1.4vw, 20px)",
    padding: panelSize.width ? `${panelSize.gap / 2}px` : "clamp(6px, 0.7vw, 10px)",
  });

  return (
    <>
      <div
        ref={viewportRef}
        className={`relative w-full touch-none select-none overflow-hidden bg-ink ${fullscreen ? "h-[100dvh]" : "h-[30rem] sm:h-[38rem]"}`}
        onPointerDown={(event) => {
          lastPoint.current = { x: event.clientX, y: event.clientY };
          target.current = { ...position.current };
          velocity.current = { x: 0, y: 0 };
          dragDistance.current = 0;
          startMotion();
          event.currentTarget.setPointerCapture?.(event.pointerId);
        }}
        onPointerMove={onPointerMove}
        onPointerUp={stopPointer}
        onPointerCancel={stopPointer}
      >
        {[[-1, -1], [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]].map(([x, y]) => {
          const logicalX = x - motion.wrapX;
          const logicalY = y - motion.wrapY;
          const groupIndex = ((logicalX % 2) + 2) % 2 + (((logicalY % 2) + 2) % 2) * 2;
          const panelImages = imageGroups[groupIndex];

          return (
            <div
              key={`${x}-${y}`}
              className="absolute grid grid-cols-4 grid-rows-3"
              style={tileStyle(x, y)}
              aria-hidden={x !== 0 || y !== 0}
            >
              {panelImages.map((image, slot) => (
                <button
                  key={`${image.src}-${slot}`}
                  type="button"
                  className="group relative aspect-[4/3] h-full w-full min-h-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-[0_14px_36px_rgba(0,0,0,0.22)] transition-[transform,border-color,box-shadow] duration-300 hover:z-10 hover:border-white/30 hover:shadow-[0_20px_48px_rgba(0,0,0,0.38)] focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  onClick={() => {
                    if (dragDistance.current < 6) {
                      setActiveIndex(images.findIndex((item) => item.src === image.src));
                    }
                  }}
                  tabIndex={x === 0 && y === 0 ? 0 : -1}
                  aria-label={`放大查看${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
          );
        })}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
          onClick={() => setActiveIndex(null)}
        >
          <div className="relative h-[min(88vh,52rem)] w-[min(94vw,72rem)]" onClick={(event) => event.stopPropagation()}>
            <Image src={activeImage.src} alt={activeImage.alt} fill sizes="94vw" className="object-contain" priority />
            <div className="absolute right-0 top-0 flex items-center gap-2 rounded-full border border-white/20 bg-ink/80 p-1 text-sm text-white">
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index - 1 + images.length) % images.length)}
                className="px-2 py-1"
                aria-label="查看上一张"
              >
                上一张
              </button>
              <span className="text-neutral-400">{activeIndex + 1}/{images.length}</span>
              <button
                type="button"
                onClick={() => setActiveIndex((index) => (index + 1) % images.length)}
                className="px-2 py-1"
                aria-label="查看下一张"
              >
                下一张
              </button>
              <button type="button" onClick={() => setActiveIndex(null)} className="px-2 py-1" aria-label="关闭图片预览">
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamGallery;
