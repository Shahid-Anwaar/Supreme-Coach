
"use client";
import CustomEmblaCarousel from '../home/CustomCarosal';
import { Icon } from '@iconify/react';
import { FlipStudentCard } from '../community/StudentDirectory';
import { students } from '@/data/data';

export default function ProductStories() {
    return (
        <section className=" bg-black py-3 sm:py-4 md:py-6 lg:py-8 xl:py-10">
            <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-0">
                <div className="relative text-center">
                    <div className="mt-10 section-container py-0">
                        <h3 className="text-[16px] text-start tracking-[-0.03em] text-white/70 sm:text-[17px]">
                            Students
                        </h3>
                        <div className="mt-1 h-0.5 w-full bg-white/90" />
                    </div>
                    {/* <h2 className="section-title mx-auto mt-5 max-w-[16ch] text-black sm:max-w-190">
                        Augment success stories write themselves
                    </h2> */}

                    <CustomEmblaCarousel
                        CustomCard={(item, index, firstActiveItemIndex) => {
                            return (
                                <div
                                    key={index}
                                    className="box-border min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 sm:px-0.5 md:basis-[42%] lg:basis-[19%]"
                                >
                                    <div className='border-2 border-[#474747] rounded-[18px]'>
                                        {FlipStudentCard(item)}
                                    </div>
                                </div>
                            );
                        }}
                        isAutoplay={false}
                        items={students}
                        options={{ loop: true, align: "center", skipSnaps: false }}
                        wrapperClassName="mt-5 min-h-0 bg-transparent sm:mt-8 lg:mt-10"
                        CustomButtonWrapper={(onPrevClick, onNextClick) => {
                            return (
                                <div className="absolute -bottom-14 flex w-full items-center justify-center gap-3 sm:-bottom-16 sm:gap-4 lg:-bottom-18">
                                    <button
                                        type="button"
                                        onClick={onPrevClick}
                                        aria-label="Previous testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-[#181818] text-white backdrop-blur-sm transition duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                                    >
                                        <Icon
                                            icon="lucide:chevron-left"
                                            className="h-5 w-5"
                                        />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onNextClick}
                                        aria-label="Next testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-[#181818] text-white backdrop-blur-sm transition duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                                    >
                                        <Icon
                                            icon="lucide:chevron-right"
                                            className="h-5 w-5"
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
