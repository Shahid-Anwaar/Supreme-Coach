import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function ProductsHeroSection() {
    return (
        <section className="bg-white">
            <div className="section-container max-w-390 relative pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24 pt-32">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)] lg:gap-10 xl:gap-14">
                    <div className="max-w-150 mx-auto text-center lg:text-left">
                        <p className="section-label text-black">
                            — Teachable
                        </p>

                        <h1 className="section-title hero-title mt-5 text-black lg:mt-6 lg:max-w-130">
                            Online courses by you. Powered by Teachable.
                        </h1>

                        <p className="section-description mx-auto mt-5 max-w-2xl text-black lg:mx-0 lg:mt-6 lg:max-w-130">
                            Create and sell online courses that captivate students, scale
                            revenue, and move your business forward—without the tech
                            headache.
                        </p>

                        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:mt-8 lg:justify-start">
                            <Link
                                href="/"
                                className="contained-btn max-w-55 px-6 py-3 capitalize!"
                            >
                                <span>Start for free</span>
                                <Icon
                                    icon="mingcute:arrow-right-fill"
                                    width="19"
                                    height="19"
                                    className="shrink-0"
                                />
                            </Link>

                            <Link
                                href="/"
                                className="outlined-btn max-w-55 px-6 py-3 capitalize!"
                            >
                                Explore our plans
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-190 overflow-hidden rounded-[14px] bg-[#f3f3f3] sm:rounded-[18px] lg:rounded-[20px]">
                            <Image
                                src="https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e311765f5241a3d356f305_314b597993ae3f81ca355bfa6eb4b708_courses-hero.webp"
                                alt="Teachable online courses dashboard on laptop"
                                width={1200}
                                height={760}
                                unoptimized
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}