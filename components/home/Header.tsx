"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const DESKTOP_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  // { label: "Solutions", href: "/solutions" },
  { label: "For Coach", href: "/for-coach" },
  { label: "For Forms", href: "/for-forms" },
  // { label: "Community", href: "/community" },
  // { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  // { label: "Log in", href: "#" },
] as const;

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-black text-white">
        <div className="mx-auto max-w-[1560px] px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 xl:px-12 min-[1280px]:px-6 min-[1280px]:py-6">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              className="hidden min-[1280px]:inline-flex"
              aria-label="Augment Business School"
            >
              <Image
                src="/header-logo.svg"
                alt="Augment Business School"
                width={240}
                height={72}
                className="h-auto w-[105px] sm:w-[120px] md:w-[158px]"
              />
            </Link>

            <Link
              href="/"
              className="inline-flex min-[1280px]:hidden"
              aria-label="Augment Business School"
            >
              <Image
                src="/logo2.webp"
                alt="Augment Business School"
                width={80}
                height={70}
                className="h-auto w-[48px] sm:w-[55px] md:w-[60px]"
              />
            </Link>

            <div className="hidden items-center justify-end gap-x-8 min-[1280px]:flex">
              <nav aria-label="Primary navigation" className="mt-3">
                <ul className="flex items-center gap-6 xl:gap-8">
                  {DESKTOP_NAV_ITEMS.map((item, index) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex flex-col items-start text-[15px] font-medium tracking-[-0.02em] text-white/96 transition-colors duration-200 text-nowrap hover:text-white xl:text-[16px]"
                      >
                        <span className="group-hover:text-primary">{item.label}</span>
                        <span
                          className={`mt-1.5 h-px rounded-full bg-primary transition-all duration-300 ${item.href === pathname ? "w-full opacity-100" : "w-0 opacity-0"
                            }`}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex h-auto items-center flex-wrap gap-2">
                <Link
                  href=""
                  className={`group closed-btn mx-auto px-4 py-2.5 text-[13px] xl:px-6 xl:text-[14px]`}
                >
                  Contact Sales
                </Link>
                <PrimaryCta href="#" />
              </div>


            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center text-white transition-opacity duration-200 hover:opacity-80 sm:h-11 sm:w-11 min-[1280px]:hidden"
            >
              <Icon icon="mdi:menu" className="h-7 w-7 sm:h-[30px] sm:w-[30px]" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white min-[1280px]:hidden">
          <div className="relative mx-auto flex h-screen max-w-[1560px] flex-col px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5 md:px-8 md:pt-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex min-[1280px]:hidden"
                aria-label="Augment Business School"
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/logo2.webp"
                  alt="Augment Business School"
                  width={80}
                  height={70}
                  className="h-auto w-[48px] sm:w-[55px] md:w-[60px]"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-white transition-opacity duration-200 hover:opacity-80 sm:h-11 sm:w-11"
              >
                <Icon icon="ph:asterisk-bold" className="h-7 w-7 sm:h-[30px] sm:w-[30px]" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="mt-8 overflow-y-auto pb-8 sm:mt-10 md:mt-12"
            >
              <ul className="space-y-3">
                {DESKTOP_NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-block text-[17px] font-medium tracking-[-0.03em] text-white transition-opacity duration-200 hover:opacity-80 sm:text-[19px] md:text-[20px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t flex flex-wrap gap-3 justify-center border-white/10 items-center pt-4 sm:pt-5">
              <Link
                href=""
                className={`group closed-btn inline-flex w-auto px-4 py-2 text-[12px] sm:w-auto sm:px-5 sm:text-[13px]`}
              >
                Contact Sales
              </Link>
              <PrimaryCta href="#" mobile />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PrimaryCta({
  href,
  mobile = false,
}: {
  href: string;
  mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group contained-btn  ${mobile
        ? "inline-flex px-4 py-2 text-[12px] sm:w-auto sm:px-5 sm:text-[13px]"
        : "mx-auto px-4 py-3 text-[13px] xl:px-6 xl:text-[14px]"
        }`}
    >
      <span className="text-[0.98em] font-semibold uppercase tracking-[0.12em]">
        Book A Demo
      </span>

      <Icon
        icon={"mingcute:arrow-right-fill"}
        width="19"
        height="19"
        className="shrink-0"
      />
    </Link>
  );
}