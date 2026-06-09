"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { FEATURES, HERO_SLIDES, HeroSlide, securityItems } from "@/data/data";
import CustomEmblaCarousel from "../home/CustomCarosal";

export default function FirmHeroSection() {
    return (
        <section className="hero-carousel relative z-1 overflow-hidden bg-black">
            <div className="relative mx-auto flex max-w-full flex-col bg-black px-4 pb-10 pt-14 sm:px-6 sm:pt-28 lg:px-8 2xl:max-w-400">

                {/* Top Center Content */}
                <div className="relative z-30 mx-auto flex w-full max-w-5xl flex-col items-center text-center text-white">
                    <h1 className="section-title hero-title mx-auto max-w-[13ch] text-white sm:max-w-[15ch] lg:max-w-[17ch]">
                        The MBA for Entrepreneurs
                    </h1>

                    <p className="section-description mx-auto mt-4 max-w-3xl text-sm leading-6 sm:mt-5 sm:text-base">
                        Join the Business School for Entrepreneurs. Built by the founders
                        of YouTube, Waze, Siri and Wikipedia. For the founders of tomorrow.
                    </p>

                    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 sm:mt-8 sm:gap-y-3 md:gap-x-5">
                        {FEATURES.map((item) => (
                            <li key={item.label} className="flex items-center gap-1.5 sm:gap-2">
                                <Icon
                                    icon={item.icon}
                                    className="h-4 w-4 shrink-0 text-white sm:h-4.5 sm:w-4.5"
                                />
                                <span className="text-center text-[11px] font-normal leading-4 uppercase tracking-[0.02em] text-white sm:whitespace-nowrap sm:text-[14px] md:text-[16px]">
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mx-auto mt-7 flex w-full max-w-88 flex-col items-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center">
                        <Link
                            href="https://augment.school/sHK7SoG?"
                            className="group flex w-full items-center justify-center px-6 contained-btn sm:w-auto sm:min-w-65"
                        >
                            Book A Demo
                            <Icon
                                icon={"solar:phone-linear"}
                                width="19"
                                height="19"
                                className="shrink-0"
                            />
                        </Link>

                        <Link
                            href="/contact-sales"
                            className="flex w-full items-center justify-center px-6 closed-btn sm:w-auto sm:min-w-65"
                        >
                            Contact Sales
                        </Link>
                    </div>

                    <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-5 sm:gap-x-10">
                        {securityItems.slice(0, 4).map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    width={item.width}
                                    height={item.height}
                                    className="h-8 w-8 md:h-12 md:w-12"
                                />
                                <p className="mt-1 text-[14px] font-normal tracking-[-0.03em] text-white sm:text-[16px] md:text-[18px]">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Slider */}
                <div className="relative mt-6 w-full overflow-hidden sm:mt-7 lg:mt-8">
                    {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-black via-black/50 to-transparent sm:w-14" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-black via-black/50 to-transparent sm:w-14" /> */}

                    <CustomEmblaCarousel
                        isContinuousPlay
                        CustomCard={(item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="min-h-90 min-w-0 shrink-0 grow-0 basis-[74%] p-2 sm:min-h-95 sm:basis-1/3 lg:min-h-100 lg:basis-[30%] xl:basis-1/5"
                                >
                                    <HeroCard
                                        key={`${item.id}-${index}`}
                                        slide={item}
                                    />
                                </div>
                            );
                        }}
                        items={HERO_SLIDES}
                        options={{ loop: true, align: "center", skipSnaps: false }}
                        wrapperClassName="min-h-100"
                    />
                </div>
            </div>
        </section>
    );
}

function HeroCard({ slide }: { slide: HeroSlide }) {
    return (
        <article
            className={[
                "group relative h-full min-h-[360px] w-full overflow-hidden rounded-[16px] bg-black text-white sm:min-h-[440px] sm:rounded-[18px]",
                "opacity-[0.94] lg:min-h-100 xl:rounded-[22px]",
            ].join(" ")}
        >
            <div className="absolute inset-0 bg-black">
                <img
                    src={slide.image}
                    alt={slide.name}
                    className={[
                        "h-full w-full object-cover transition-all duration-700 ease-out",
                        "scale-100 group-hover:opacity-0",
                    ].join(" ")}
                />
                <video
                    key={slide.video}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={slide.image}
                >
                    <source src={slide.video} type="video/mp4" />
                </video>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_12%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.92)_100%)]" />
            <div className="absolute inset-y-0 left-0 w-[28%] bg-linear-to-r from-black/50 to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[20%] bg-linear-to-l from-black/32 to-transparent" />

            <div
                className={[
                    "absolute bottom-0 left-0 right-0 z-2",
                    "px-3 pb-3.5 sm:px-3.5 sm:pb-4 lg:px-3.5 lg:pb-5",
                ].join(" ")}
            >
                <div className="mb-2.5">
                    {slide.company ? (
                        <figure
                            className={[
                                "relative overflow-hidden",
                                "h-4.5 w-17 sm:h-5 sm:w-20 lg:h-5 lg:w-21 xl:h-6 xl:w-24",
                            ].join(" ")}
                        >
                            <img
                                src={slide.company}
                                alt={`${slide.name} company logo`}
                                className="h-full w-full object-contain object-left"
                                loading="lazy"
                            />
                        </figure>
                    ) : (
                        <div
                            className={[
                                "font-medium tracking-[-0.05em] text-white/88",
                                "text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px]",
                            ].join(" ")}
                        >
                            {slide.name}
                        </div>
                    )}

                    <div
                        className={[
                            "mt-2.5 h-0.5 bg-white/75",
                            "w-14 xl:w-16",
                        ].join(" ")}
                    />
                </div>

                <>
                    <p className="mb-1 text-[12px] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[15px] lg:text-[14px] xl:text-[16px]">
                        {slide.role}
                    </p>

                    <h3
                        className={[
                            "tracking-[-0.05em] text-white",
                            "text-[20px] font-medium leading-[1.02] sm:text-[24px] lg:text-[30px] xl:text-[34px]",
                        ].join(" ")}
                    >
                        {slide.name}
                    </h3>
                </>
            </div>
        </article>
    );
}