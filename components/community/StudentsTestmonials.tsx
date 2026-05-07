"use client";
import Image from 'next/image';
import CustomEmblaCarousel from '../home/CustomCarosal';
import { useState } from 'react';

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
    const [selectedIndex, setSelectedIndex] = useState(1);
    return (
        <section className=' bg-[#F3F4F6]'>
            <div className='section-container py-20!'>
                <CustomEmblaCarousel
                    CustomCard={(item, index) => {
                        return (
                            <div
                                key={index}
                                className="box-border min-w-0 shrink-0 grow-0 basis-full px-3"
                            >
                                {StudentCard(item)}
                            </div>
                        );
                    }}
                    isAutoplay={false}
                    items={testimonials}
                    options={{ loop: false, align: "start", skipSnaps: false }}
                    wrapperClassName="min-h-0 bg-transparent"
                    CustomButtonWrapper={(onPrevClick, onNextClick, onSpecificChoosed) => {
                        return (
                            <div className="absolute top-full flex w-full items-center justify-start gap-3 sm:gap-4 ">
                                <div className='flex gap-3 ms-3 my-3'>
                                    {testimonials.map((t, i) => {
                                        return <div key={i} onClick={() => {
                                            setSelectedIndex(i);
                                            onSpecificChoosed(i);
                                        }}
                                            className={`w-8 h-8 cursor-pointer flex items-center text-[18px] justify-center rounded-full border  
                                ${i === selectedIndex ? "border-gray-300 text-gray-900 bg-primary-500" : "border-gray-300 text-gray-500 bg-transparent"}`}
                                        >
                                            {i + 1}
                                        </div>
                                    })}
                                </div>
                            </div>
                        );
                    }}
                />

                {/* {testimonials.map((t) => {
                return StudentCard(t)
            })} */}
            </div>
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

