"use client";
import Image from 'next/image';
import CustomEmblaCarousel from '../home/CustomCarosal';
import { Icon } from '@iconify/react';

const testimonials = [
    {
        id: 1,
        quote:
            "I couldn’t have found a better program or faculty to kickstart my entrepreneurial career.",
        name: "Jon-David Hague",
        role: "Founder",
        company: "Bountisphere",
        image: "/student (1).webp",
    },
    {
        id: 2,
        quote:
            "Augment is amazing and easy to digest. The lessons are perfect for progressing every day—even if you're busy.",
        name: "Hester Scotton",
        role: "CFO",
        company: "Potter Clarkson",
        image: "/student (2).webp",
    },
    {
        id: 3,
        quote:
            "I couldn’t have found a better program or faculty to kickstart my entrepreneurial career.",
        name: "Jon-David Hague",
        role: "Founder",
        company: "Bountisphere",
        image: "/student (3).webp",
    },
];

export default function StudentsTestmonials() {
    return (
        <section className='section-container bg-white'>
            <CustomEmblaCarousel
                CustomCard={(item, index, firstActiveItemIndex) => {
                    return (
                        <div
                            key={index}
                            className="box-border min-w-0 shrink-0 grow-0 basis-full px-1 lg:px-24 xl:px-40"
                        >
                            {StudentCard(item)}
                        </div>
                    );
                }}
                isAutoplay={false}
                items={testimonials}
                options={{ loop: true, align: "start", skipSnaps: false }}
                wrapperClassName="mt-20 min-h-0 bg-transparent sm:mt-24 lg:mt-32"
                CustomButtonWrapper={(onPrevClick, onNextClick) => {
                    return (
                        <div className="absolute -top-14 flex w-full items-center justify-center gap-3 sm:-top-16 sm:gap-4 lg:-top-20">
                            <button
                                type="button"
                                onClick={onPrevClick}
                                aria-label="Previous testimonial"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-black hover:text-white sm:h-11 sm:w-11"
                            >
                                <Icon icon="lucide:arrow-left" className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                            </button>

                            <button
                                type="button"
                                onClick={onNextClick}
                                aria-label="Next testimonial"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-black hover:text-white sm:h-11 sm:w-11"
                            >
                                <Icon icon="lucide:arrow-right" className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                            </button>
                        </div>
                    );
                }}
            />
            <div className='flex gap-5'>
                {testimonials.map((t, i) => {
                    return <div key={i} className='w-8 h-8 flex items-center justify-center bg-transparent rounded-full border border-gray-400'>
                        {i}
                    </div>
                })}
            </div>
            {/* {testimonials.map((t) => {
                return StudentCard(t)
            })} */}
        </section>
    )
}
function StudentCard(t: { id: number; quote: string; name: string; role: string; company: string; image: string; }) {
    return <div key={t.id} className='flex gap-5'>
        <div className="flex flex-col justify-center">
            <p className='quote-text text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] stylish-famil'>
                {t.quote}
            </p>
            <p className='custom-para mt-4'>
                — {t.name}, {t.role}, {t.company}
            </p>
        </div>
        <div className="bg-primary min-w-80 min-h-80">
            <Image
                src={t.image}
                width={300}
                height={300}
                alt="anything" />

        </div>
    </div>;
}

