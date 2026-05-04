import Image from 'next/image';
import React from 'react'

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
            {testimonials.map((t) => {
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
                            alt="anything"
                        />

                    </div>
                </div>
            })}
        </section>
    )
}
