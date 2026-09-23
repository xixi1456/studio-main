import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import Link from "next/link";
import { navigation } from "@/data/site";

const NotFound = () => {
  return (
    <Container className="pt-32 sm:pt-40">
      <FadeIn className="flex flex-col items-center text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Error 404
        </p>
        <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          这个页面不存在
        </h1>
        <p className="mt-5 max-w-md text-lg text-neutral-400">
          可能是链接写错了，或者这一页还没做出来。回首页看看我们在做什么。
        </p>
        <div className="mt-9">
          <Button href="/" size="lg">
            回到首页
          </Button>
        </div>
        <nav className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-500 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </FadeIn>
    </Container>
  );
};

export default NotFound;
