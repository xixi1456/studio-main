"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";
import { navigation, site } from "@/data/site";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 路由变化时收起移动端菜单
  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition duration-300",
          scrolled || expanded
            ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <Container className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex w-full items-center justify-between">
            <Logo href="/" />

            <nav className="hidden items-center gap-1 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive(item.href)
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-accent" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                href="/join"
                size="md"
                className="hidden sm:inline-flex"
              >
                {site.join.cta}
              </Button>
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-label={expanded ? "关闭菜单" : "打开菜单"}
                className="-m-2.5 rounded-full p-2.5 text-white transition hover:bg-white/10 md:hidden"
              >
                {expanded ? (
                  <IoMdClose className="h-6 w-6" />
                ) : (
                  <HiMenuAlt4 className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* 移动端菜单 */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-ink transition duration-300 md:hidden",
          expanded
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16 lg:px-8">
          <nav className="mx-auto flex w-full max-w-2xl flex-col">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "border-b border-white/10 py-5 font-display text-3xl font-medium tracking-tight transition",
                  isActive(item.href) ? "text-accent" : "text-white"
                )}
              >
                <span className="mr-3 font-mono text-xs text-neutral-500">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mx-auto mt-10 w-full max-w-2xl">
            <Button href="/join" size="lg" className="w-full">
              {site.join.cta}
            </Button>
            <p className="mt-6 text-sm text-neutral-500">{site.join.slogan}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
