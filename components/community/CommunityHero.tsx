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
            <div className='section-container max-w-330 flex flex-col min-h-169 justify-end h-full pb-10 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24 pt-32'>
                <div className="flex flex-col relative z-1">
                    <h2 className='section-title max-w-sm text-white '>
                        Explore Our Student and Alumni Network
                    </h2>
                    <div className="flex mt-16 w-full justify-between items-center ">
                        {tempArray.map((src) => {
                            return <Image
                                key={src}
                                height={108}
                                width={108}
                                src={src}
                                alt='anything'
                                className='h-6 w-auto object-contain text-white'
                                quality={100}
                            />
                        })}
                    </div>
                </div>

                <Image
                    height={1300}
                    width={1300}
                    src={"https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F68ad26f38633493d9a12ca2a8a4d94ac"}
                    alt='anything'
                    className='absolute z-0 inset-0 w-full h-auto max-h-185 object-cover'
                    quality={100}
                />
            </div>
        </section>
    )
}
