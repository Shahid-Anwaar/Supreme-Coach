import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BookCallSection from "./BookCall";
import Chats from "./Chats";
import CoursesCommunity from "./CoursesCommunity";
import { securityItems } from "@/data/data";

type FooterLink = {
    label: string;
    href: string;
};

type SocialLink = {
    label: string;
    href: string;
    icon: string;
    className?: string;
    size?: number;
};

const leftLinks: FooterLink[] = [
    { label: "Pricing", href: "/pricing" },
    // { label: "Products", href: "/products" },
    // { label: "Solutions", href: "/solutions" },
    { label: "For Coaches", href: "/for-coaches" },
    { label: "For Firms", href: "/for-firms" },
];

const rightLinks: FooterLink[] = [
    { label: "Community", href: "/community" },
    { label: "About Us", href: "/about" },
    // { label: "Blogs", href: "/book-a-call" },
    // { label: "Free Resources", href: "/blog" },
];

const socialLinks: SocialLink[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: "logos:facebook",
        size: 20,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: "skill-icons:instagram",
        size: 20,
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/",
        icon: "simple-icons:tiktok",
        className: "text-white",
        size: 20,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: "logos:linkedin-icon",
        size: 20,
    },
    {
        label: "Twitter",
        href: "https://x.com/",
        icon: "logos:twitter",
        size: 20,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/",
        icon: "logos:youtube-icon",
        size: 20,
    },
];

const legalLinks: FooterLink[] = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    // { label: "Legal Notice", href: "/legal-notice" },
    { label: "Terms and conditions", href: "/terms-of-service" },
];

function FooterColumn({ links, title }: { links: FooterLink[], title: string }) {
    return (
        <>
            <p className="mb-7 text-[16px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[17px] md:text-[18px] lg:text-[22px]">{title}</p>
            <ul className="space-y-2 sm:space-y-3 md:space-y-3">

                {links.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className="inline-block text-[15px] font-medium leading-none tracking-[-0.03em] text-white/80 transition-opacity duration-200 hover:text-primary sm:text-[16px] md:text-[17px] lg:text-[18px]"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default function Footer() {
    return (
        <>
            <CoursesCommunity />
            <BookCallSection
                title="Book A Demo with a Program Advisor"
                icon="solar:phone-linear"
                subTitle="Discuss your business goals and find out if Supreme Coach is a fit for you."
                topClasses="bg-black"
                bottomClasses="bg-black"
            />
            <footer className="bg-black text-white overflow-hidden">
                <div className="section-container pb-8 pt-10 sm:pb-10 sm:pt-12 md:pb-12 md:pt-20 lg:pt-28">
                    <div className="grid grid-cols-2 gap-y-10 sm:gap-y-12 md:grid-cols-[1.08fr_0.7fr_0.7fr_1.3fr] md:gap-x-8 lg:grid-cols-[1fr_0.9fr_0.9fr_1.1fr] xl:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:gap-x-14">
                        <div className="text-center col-span-2 order-1 md:col-span-1 md:text-left">
                            <Link
                                href="/"
                                className="inline-flex"
                                aria-label="Supreme Coach Business School"
                            >
                                <Image
                                    src="/logos/s coach logo full c.svg"
                                    alt="Supreme Coach Business School"
                                    width={240}
                                    height={72}
                                    className="h-auto w-[150px] sm:w-[175px] md:w-[228px]"
                                />
                            </Link>
                            <p className="mt-2 text-[14px] font-medium leading-[1.35] tracking-[-0.025em] text-white/90 sm:text-[15px] md:text-[16px]">
                                Supreme Coach helps coaches and firms launch courses, build communities, and sell from one simple platform.
                            </p>
                        </div>

                        <div className="text-center order-3 md:text-left  md:order-2">
                            <FooterColumn title="Explore" links={leftLinks} />
                        </div>

                        <div className="text-center order-4 md:text-left md:order-3">
                            <FooterColumn title="Company" links={rightLinks} />
                        </div>

                        <div className="mx-auto max-w-[290px] col-span-2 order-2 md:order-4 text-center md:col-span-1 md:mx-0 md:max-w-[360px] md:text-end lg:col-span-1 lg:ml-auto lg:text-end">
                            <h3 className="text-[20px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[21px] md:text-[23px] lg:text-[24px]">
                                Still have questions?
                            </h3>

                            <p className="mt-2 text-[15px] font-medium leading-[1.35] tracking-[-0.025em] text-white sm:text-[16px] md:text-[17px]">
                                Use the contact form below.
                            </p>

                            <Link
                                href="/contact-sales"
                                className="contained-btn mt-6 w-full max-w-[220px] px-4 sm:mt-7 sm:w-auto sm:px-8"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                    {/* <Chats /> */}

                    <div className="mt-7 flex flex-col items-center justify-center gap-7 sm:mt-8 md:mt-10 lg:flex-row lg:items-end lg:justify-between">
                        <div className="flex flex-col items-center gap-3 text-center sm:gap-4 md:flex-row md:gap-6 md:text-left">
                            <span className="text-[15px] font-medium tracking-[-0.03em] text-white sm:text-[17px] md:text-[18px] lg:text-[20px]">
                                Follow us
                            </span>

                            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                                {socialLinks.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        aria-label={item.label}
                                        className="inline-flex items-center justify-center transition-all duration-200 hover:scale-125 hover:opacity-85"
                                    >
                                        <Icon
                                            icon={item.icon}
                                            className={item.className ?? ""}
                                            width={item.size ?? 18}
                                            height={item.size ?? 18}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-x-4 gap-y-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-5">
                            {securityItems.map((item, i) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center justify-center text-center"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        width={item.width}
                                        height={item.height}
                                        className={`h-7 w-7 object-contain sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 ${i !== 4 ? "opacity-[0.6]" : ""
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-7 sm:mt-8 h-px w-full bg-white/40" />

                    <div className="mt-6 flex flex-col items-center gap-4 text-center md:mt-7 md:flex-row md:items-center md:justify-between md:text-left">
                        <p className="text-[11px] font-normal tracking-[-0.015em] text-white/75 sm:text-[12px] md:text-[14px]">
                            Copyright 2026 © Supreme Coach, Inc. All rights reserved.
                        </p>

                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:justify-end md:gap-14">
                            {legalLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="cursor-pointer text-[11px] font-medium tracking-[-0.02em] text-white/75 transition-opacity duration-200 hover:text-primary sm:text-[12px] md:text-[14px]"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}