import Container from "./Container";
import FadeIn from "./FadeIn";
import Logo from "./Logo";
import Link from "next/link";
import { navigation, site } from "@/data/site";

const socialIcon = {
  github: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  ),
  bilibili: (
    <path d="M7.2 2.5 9.9 5h4.2l2.7-2.5 1.4 1.5L16.7 5.5H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2.3L5.8 4 7.2 2.5ZM19 7.5H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-9.5 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z" />
  ),
  wechat: (
    <path d="M9.2 3C5.2 3 2 5.7 2 9c0 1.9 1 3.6 2.7 4.7l-.7 2.1 2.4-1.2c.8.2 1.7.4 2.6.4h.4a5.6 5.6 0 0 1-.2-1.5c0-3.2 3.1-5.8 7-5.8h.5C16.1 4.9 13 3 9.2 3Zm-2.6 4.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.2 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.4 2.1c-3.3 0-6 2.2-6 4.9s2.7 4.9 6 4.9c.7 0 1.4-.1 2-.3l1.9 1-.5-1.7c1.4-.9 2.2-2.2 2.2-3.7 0-2.8-2.6-5.1-6-5.1Zm-2.1 3.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm4.2 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
  ),
};

const SocialIcon = ({ type, className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    {socialIcon[type] ?? socialIcon.github}
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 sm:mt-32">
      <Container className="py-16 sm:py-20">
        <FadeIn>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Logo href="/" />
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-neutral-500">
                {site.description}
              </p>
              <div className="mt-6 flex items-center gap-3">
                {site.social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={item.label}
                    className="rounded-full border border-white/10 p-2 text-neutral-400 transition hover:border-accent/50 hover:text-accent"
                  >
                    <SocialIcon type={item.type} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                导航
              </h2>
              <ul role="list" className="mt-5 space-y-3 text-sm">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-400 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                联系我们
              </h2>
              <ul role="list" className="mt-5 space-y-3 text-sm text-neutral-400">
                <li>
                  <span className="block text-neutral-500">位置</span>
                  {site.contact.location}
                </li>
                <li>
                  <span className="block text-neutral-500">招新</span>
                  <Link href="/join" className="transition hover:text-white">
                    {site.join.cta} · {site.join.qrTitle}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.fullName}
            </p>
            <p className="font-mono uppercase tracking-[0.18em] text-neutral-600">
              {site.tagline}
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
};

export default Footer;
