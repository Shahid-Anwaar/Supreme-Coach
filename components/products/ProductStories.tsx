
"use client";
import { ProductStoriesTestimonials } from '@/data/data';
import CustomEmblaCarousel from '../home/CustomCarosal';
import { CustomTestimonialCard } from '../home/CustomTestimonialCard';
import { Icon } from '@iconify/react';



export default function ProductStories() {
    return (
        <section className="overflow-hidden bg-white pb-20 pt-8 sm:pb-24 md:pb-28 lg:pb-32 xl:pb-40">
    <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-0">
        <div className="relative text-center">
            <h2 className="section-title mx-auto mt-5 max-w-[16ch] text-black sm:max-w-190">
                Augment success stories write themselves
            </h2>

            <CustomEmblaCarousel
                CustomCard={(item, index, firstActiveItemIndex) => {
                    return (
                        <div
                            key={index}
                            className="box-border min-w-0 shrink-0 grow-0 basis-full px-2 sm:basis-1/2 sm:px-3 md:basis-[42%] lg:basis-[22%]"
                        >
                            <CustomTestimonialCard
                                isShowReadLessMoreBtn={false}
                                item={item}
                                setShownFullTextIds={() => {}}
                                shownFullTextIds={[]}
                            />
                        </div>
                    );
                }}
                isAutoplay={false}
                items={ProductStoriesTestimonials}
                options={{ loop: true, align: "center", skipSnaps: false }}
                wrapperClassName="mt-5 min-h-0 bg-transparent sm:mt-8 lg:mt-10"
                CustomButtonWrapper={(onPrevClick, onNextClick) => {
                    return (
                        <div className="absolute -bottom-14 flex w-full items-center justify-center gap-3 sm:-bottom-16 sm:gap-4 lg:-bottom-18">
                            <button
                                type="button"
                                onClick={onPrevClick}
                                aria-label="Previous testimonial"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-black hover:text-white sm:h-11 sm:w-11"
                            >
                                <Icon
                                    icon="lucide:arrow-left"
                                    className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                                />
                            </button>

                            <button
                                type="button"
                                onClick={onNextClick}
                                aria-label="Next testimonial"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-black hover:text-white sm:h-11 sm:w-11"
                            >
                                <Icon
                                    icon="lucide:arrow-right"
                                    className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                                />
                            </button>
                        </div>
                    );
                }}
            />
        </div>
    </div>
</section>
    )
}
