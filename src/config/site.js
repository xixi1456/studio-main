/** 站点 SEO / 社交分享配置 */
import { site } from "@/data/site";

export function constructMetadata({
  title = `${site.name} · ${site.nameCn}`,
  description = site.description,
  image = "/images/og.png",
  icons = "/favicon.ico",
  noIndex = false,
} = {}) {
  return {
    title,
    description,
    keywords: site.keywords,
    openGraph: {
      title,
      description,
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons,
    metadataBase: new URL("https://example.com"),
    themeColor: "#0A0A0A",
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
