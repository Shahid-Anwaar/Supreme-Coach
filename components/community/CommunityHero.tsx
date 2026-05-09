import Image from 'next/image'

const tempArray = [
    "/trust (1).webp",
    "/trust (6).webp",
    "/trust (8).webp",
    "/trust (5).webp",
    "/trust (4).webp",
    "/trust (7).webp",
    "/trust (3).webp",
    "/trust (2).webp",
]


export default function CommunityHero() {
    return (
        <section className="bg-white relative overflow-hidden">
            <div className="section-container max-w-330 flex flex-col min-h-169 justify-end h-full pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24 pt-32 max-lg:min-h-[560px] max-md:min-h-[500px] max-sm:min-h-[460px] max-md:pt-24 max-sm:pt-20 max-md:px-5">
                <div className="flex flex-col relative z-1 max-lg:items-start max-md:items-center max-md:text-center">
                    <h2 className="section-title max-w-sm text-white max-lg:max-w-[420px] max-md:max-w-[340px] max-sm:max-w-[300px] max-md:text-[34px] max-md:leading-[1.1] max-sm:text-[30px] max-sm:leading-[1.12]">
                        Explore Our Student and Alumni Network
                    </h2>

                    <div className="flex mt-16 w-full justify-between items-center max-lg:mt-12 max-md:mt-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-x-8 max-lg:gap-y-6 max-sm:gap-x-6 max-sm:gap-y-5">
                        {tempArray.map((src) => {
                            return (
                                <Image
                                    key={src}
                                    height={108}
                                    width={108}
                                    src={src}
                                    alt="anything"
                                    className="h-6 w-auto object-contain text-white max-md:h-5 max-sm:h-4"
                                    quality={100}
                                />
                            );
                        })}
                    </div>
                </div>

                <Image
                    height={1300}
                    width={1300}
                    src={"/community-hero.png"}
                    alt="anything"
                    className="absolute z-0 inset-0 w-full h-auto max-h-185 object-cover max-lg:h-full max-lg:max-h-none max-md:object-center"
                    quality={100}
                />
            </div>
        </section>
    )
}
