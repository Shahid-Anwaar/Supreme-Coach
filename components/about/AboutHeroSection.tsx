"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";
import CustomEmblaCarousel from "../home/CustomCarosal";

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
  return (
    <section className="overflow-hidden bg-white pb-10 pt-12 sm:pb-16 sm:pt-18 md:pb-18 md:pt-20 lg:pt-28 lg:pb-20">
      <div className="section-container">
        {/* Heading */}
        <div className="mx-auto max-w-[980px] text-center lg:mx-0 lg:text-start">
          <h1 className="section-title hero-title mx-auto max-w-[11ch] sm:max-w-[13ch] md:max-w-[15ch] tracking-[1px] sm:tracking-[1.5px] md:tracking-[2px] leading-[1.15] sm:leading-[1.22] md:leading-[1.3] lg:mx-0 lg:max-w-195">
            Augment Is the Business School{" "}
            <span className="bg-linear-to-r from-primary-500 to-primary-300">
              We Dreamed Of &nbsp;
            </span>
          </h1>
        </div>
      </div>

      <section className="bg-white">
        <div className="section-container py-4 sm:py-5">
          <div className="mb-0">
            <h3 className="text-center text-[18px] font-[600] tracking-[-0.03em] text-[#1f1f1f] sm:text-[20px] md:text-start md:text-[22px]">
              Augment Highlights
            </h3>
            <div className="mt-2 h-0.5 w-full bg-black/12 sm:mt-1" />
          </div>
        </div>

        <div className="mx-auto w-full max-w-400 px-4 sm:px-5 md:px-6 lg:px-0">
          <div className="relative text-center">
            <CustomEmblaCarousel
              CustomCard={(item, index, firstActiveItemIndex) => {
                return (
                  <div
                    key={index}
                    className="box-border min-w-0 shrink-0 grow-0 basis-[86%] px-1 sm:basis-[52%] sm:px-1.5 md:basis-[42%] md:px-2 lg:basis-[22%]"
                  >
                    <article className="group relative h-[360px] w-full overflow-hidden rounded-[22px] border border-black/20 bg-black text-start shadow-[0_2px_10px_rgba(0,0,0,0.12)] sm:h-[420px] sm:rounded-[24px] md:h-[450px] md:rounded-[26px] lg:h-[480px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 86vw, (max-width: 1024px) 52vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Dark overlay like screenshot */}
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 md:p-7">
                        <p className="text-[13px] font-[400] leading-none text-white/70 sm:text-[14px] md:text-[16px]">
                          {item.category}
                        </p>

                        <h4 className="mt-2 max-w-[78%] text-[17px] font-[800] leading-[1.18] tracking-[-0.035em] text-white sm:mt-3 sm:max-w-[80%] sm:text-[19px] md:max-w-[82%] md:text-[21px]">
                          {item.title}
                        </h4>
                      </div>

                      {/* Arrow button */}
                      <button
                        type="button"
                        aria-label={`Open ${item.title}`}
                        className="absolute bottom-5 right-5 z-20 flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/45 bg-black/10 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black sm:bottom-6 sm:right-6 sm:h-[34px] sm:w-[34px] md:bottom-8 md:right-7"
                      >
                        <Icon
                          icon="lucide:chevron-right"
                          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]"
                        />
                      </button>
                    </article>
                  </div>
                );
              }}
              isAutoplay={false}
              items={[...highlightItems, ...highlightItems]}
              options={{ loop: true, align: "center", skipSnaps: false }}
              wrapperClassName="mt-2 min-h-0 bg-transparent mb-20 pt-2 sm:mt-3 sm:mb-24 md:mb-28"
              CustomButtonWrapper={(onPrevClick, onNextClick) => {
                return (
                  <div className="absolute -bottom-12 flex w-full items-center justify-center gap-3 sm:-bottom-14 sm:gap-4 md:-bottom-16 lg:-bottom-18">
                    <button
                      type="button"
                      onClick={onPrevClick}
                      aria-label="Previous slide"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/12 bg-[#ededea] text-[#222] transition duration-300 hover:bg-black hover:text-white"
                    >
                      <Icon icon="lucide:chevron-left" className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={onNextClick}
                      aria-label="Next slide"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/12 bg-[#ededea] text-[#222] transition duration-300 hover:bg-black hover:text-white"
                    >
                      <Icon icon="lucide:chevron-right" className="h-5 w-5" />
                    </button>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </section>
    </section>
  );
}