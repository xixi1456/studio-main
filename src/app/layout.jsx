import RootLayout from "@/components/RootLayout";
import { constructMetadata } from "@/config/site";
import "./globals.css";

export const metadata = constructMetadata();

export default function Layout({ children }) {
  return (
    <html lang="zh-CN" className="h-full bg-ink text-base antialiased text-neutral-100">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
