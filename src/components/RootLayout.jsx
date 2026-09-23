"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const RootLayout = ({ children }) => {
  const pathname = usePathname();
  const photoOnly = pathname === "/team";

  return (
    <div className="relative flex min-h-full flex-col bg-ink text-neutral-100">
      {!photoOnly && <Navbar />}
      <main className="relative z-10 flex-auto">{children}</main>
      {!photoOnly && <Footer />}
    </div>
  );
};

export default RootLayout;
