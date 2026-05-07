"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";

type HighlightItem = {
  id: number;
  category: string;
  title: string;
  image: string;
};

const highlightItems: HighlightItem[] = [
  {
    id: 1,
    category: "Scenes",
    title: "Augment: An MBA for entrepreneurs",
    image:
      "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    category: "Filming",
    title: "New course with Adam Cheyer, founder of Siri",
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    category: "Filming",
    title: "Recording the Prompt Engineering Module",
    image:
      "https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    category: "Press",
    title: "Ariel and Roy made it to Forbes 30 Under 30",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    category: "In-Person Event",
    title: "Gathering Augment Students In San Francisco",
    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    category: "Workshop",
    title: "Building practical business skills with founders",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 7,
    category: "Community",
    title: "Students collaborating on real startup challenges",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 8,
    category: "Mentorship",
    title: "Learning directly from experienced operators",
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 9,
    category: "Online Session",
    title: "Live founder sessions with students worldwide",
    image:
      "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 10,
    category: "Event",
    title: "Bringing entrepreneurs together for practical learning",
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 11,
    category: "Networking",
    title: "Connecting ambitious founders and business builders",
    image:
      "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 12,
    category: "Business Class",
    title: "A modern business school built for entrepreneurs",
    image:
      "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 13,
    category: "Founder Talk",
    title: "Conversations with leaders building real companies",
    image:
      "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 14,
    category: "Behind The Scenes",
    title: "Inside the making of practical MBA lessons",
    image:
      "https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function AboutHeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: false,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="overflow-hidden bg-white pb-14 pt-16 sm:pb-20 sm:pt-24 lg:pt-28 lg:pb-20">
      <div className="section-container">
        {/* Heading */}
        <div className="max-w-[980px]">
          <h1 className="section-title hero-title mx-auto max-w-[11ch] sm:max-w-[13ch] md:max-w-[15ch] tracking-[2px] leading-[1.3] lg:mx-0 lg:max-w-195 ">
            Augment Is the Business School <span className="bg-linear-to-r from-primary-500 to-primary-300"> We Dreamed Of &nbsp;</span>
          </h1>
        </div>

        {/* Label */}
        <div className="mt-10">
          <h3 className="text-[20px] font-[600] tracking-[-0.03em] text-[#1f1f1f] sm:text-[22px]">
            Augment Highlights
          </h3>
          <div className="mt-1 h-0.5 w-full bg-black/12" />
        </div>
      </div>

      {/* Slider */}
      <div className="mt-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 pl-4 sm:pl-6 lg:pl-8">
            {highlightItems.map((item) => (
              <div
                key={item.id}
                className="min-w-0 flex-[0_0_84%] sm:flex-[0_0_48%] lg:flex-[0_0_24%]"
              >
                <article className="group relative h-[430px] overflow-hidden rounded-[24px] border border-black/12 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 84vw, (max-width: 1024px) 48vw, 24vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                    <p className="text-[15px] font-[400] text-white/80">
                      {item.category}
                    </p>

                    <h4 className="mt-2 max-w-[90%] text-[22px] font-[600] leading-[1.18] tracking-[-0.04em] text-white sm:text-[24px]">
                      {item.title}
                    </h4>

                    <div className="mt-5 flex justify-end">
                      <button
                        type="button"
                        aria-label={`Open ${item.title}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
                      >
                        <Icon
                          icon="lucide:arrow-right"
                          className="h-4.5 w-4.5"
                        />
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/12 bg-[#ededea] text-[#222] transition duration-300 hover:bg-black hover:text-white"
          >
            <Icon icon="lucide:chevron-left" className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black/12 bg-[#ededea] text-[#222] transition duration-300 hover:bg-black hover:text-white"
          >
            <Icon icon="lucide:chevron-right" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}