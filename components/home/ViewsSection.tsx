"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type View = { title: string; description: string; image: string };

const views: View[] = [
    {
        title: "Coach view",
        description:
            "Easily create programs, manage sessions, run communities, track progress, manage your business, and personalize client experiences all in one place.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47a1edeb440ab80fdf439_0eb0b462897381c9122d4546e00aca77_ui-main-hero-tab-2.webp",
    },
    {
        title: "Your client's view",
        description:
            "Your client’s view is intuitive, mobile-friendly, and designed for seamless access to their programs, content, progress and experience.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47a1d7727e0f7bd1ac19e_8b04a4deab039f00b369cedcd9295a73_ui-main-hero-tab-1.webp",
    },
];

function ProgressBar({
    active,
    version,
}: {
    active: boolean;
    version: number;
}) {
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!active) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStarted(false);
            return;
        }

        setStarted(false);

        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(() => {
                setStarted(true);
            });

            return () => cancelAnimationFrame(raf2);
        });

        return () => cancelAnimationFrame(raf1);
    }, [active, version]);

    return (
        <div className="mb-3 mt-auto h-1 w-full rounded-3xl bg-gray-300/40">
            <div
                className={`h-full rounded-3xl bg-black transition-[width] ease-linear ${active ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    width: active && started ? "100%" : "0%",
                    transitionDuration: "5000ms",
                }}
            />
        </div>
    );
}

export default function ViewsSection(
    {
        items,
        title = "The future of your coaching business happens here",
        subtitle = "Whatever your coaching niche, expertise, or language, Supreme Coach helps you deliver impactful coaching, strengthen client relationships, run a smarter business, and scale globally."
    }
        : { items?: View[], title?: string; subtitle?: string }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressVersion, setProgressVersion] = useState(0);

    const usedItems = items && items.length > 0 ? items : views;

    useEffect(() => {
        const interval = window.setInterval(() => {

            setActiveIndex((prev) => {
                console.log("used: ", usedItems.length, " activeIndex: ", prev);
                return (prev + 1) % usedItems.length
            })
            setProgressVersion((prev) => prev + 1);
        }, 5000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        setProgressVersion((prev) => prev + 1);
    };

    return (
        <section className="overflow-hidden bg-white px-4 pb-16 pt-8 sm:pb-18 sm:pt-10 md:px-6 md:pb-24 md:pt-12">
            <div className="mx-auto max-w-8xl text-center">
                <div className="text-center">
                    <h2 className="section-title mx-auto mb-5 max-w-88 text-black sm:mb-6 sm:max-w-xl">
                        {title}
                    </h2>
                    <p className="section-description mx-auto max-w-152 text-black">
                        {subtitle}
                    </p>
                </div>

                {/* <div className="mt-12 flex justify-center">
            <Link
                href="https://s13rwwhxhl9.typeform.com/to/d2IccJb1"
                target="_blank"
                className="px-7 py-4 contained-btn capitalize!"
            >
                Start For Free
            </Link>
            <Link
                href="https://s13rwwhxhl9.typeform.com/to/lmPnaKUF?utm_source=website&"
                className="ml-4 px-7 py-4 text-sm outlined-btn capitalize!"
            >
                Explore Our Plans
            </Link>
        </div> */}

                <div className="mx-auto mt-10 max-w-330 overflow-hidden rounded-[12px] bg-gray-100 sm:mt-12 sm:rounded-[15px]">
                    <div className=" flex flex-col px-2 py-2 lg:px-4 lg:py-4 md:mb-5 md:flex-row md:flex-wrap items-stretch justify-items-stretch">
                        {usedItems.map((view, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className="w-full flex-1 cursor-pointer rounded-[12px] px-3 py-2 text-left transition-colors duration-200 md:min-w-0 md:flex-1 md:basis-0 md:rounded-none"
                            >

                                <div className="flex flex-col flex-1 h-full">
                                    <h3 className={`mb-2 text-[17px] font-bold leading-tight text-black/85 ${usedItems.length > 3 ? "  sm:text-base" : " sm:text-lg"}`}>
                                        {view.title}
                                    </h3>
                                    <p className={`text-[15px] mb-0 md:text-[16px] leading-5.5 text-gray-900 sm:text-[16px] sm:leading-6 ${usedItems.length > 3 ? " lg:text-[16px]" : " lg:text-[18px]"}`}>
                                        {view.description}
                                    </p>
                                </div>
                                <ProgressBar
                                    active={activeIndex === index}
                                    version={progressVersion}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="relative mb-3 aspect-[4/3] overflow-hidden bg-gray-100 sm:mb-4 sm:aspect-[16/10] md:aspect-[1300/700]">
                        {usedItems.map((view, index) => (
                            <Image
                                key={index}
                                src={view.image}
                                alt={view.title}
                                fill
                                className={`object-fill transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1600px"
                                priority={index === 0}
                            />
                        ))}
                    </div>


                </div>

                <Link
                    href="https://s13rwwhxhl9.typeform.com/to/lmPnaKUF?utm_source=website&"
                    className="contained-btn mx-auto mt-6 inline-flex w-full max-w-[220px] items-center justify-center px-7 py-4 text-sm capitalize! sm:mt-7 sm:w-auto sm:max-w-none"
                >
                    Explore Demo
                </Link>
            </div>
        </section>
    );
}