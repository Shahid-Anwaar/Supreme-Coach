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
      </div>

      <section className="bg-white">
        <div className="  section-container py-5">
          <div className="mb-0">
            <h3 className="text-[20px] font-[600] tracking-[-0.03em] text-[#1f1f1f] sm:text-[22px]">
              Augment Highlights
            </h3>
            <div className="mt-1 h-0.5 w-full bg-black/12" />
          </div>

        </div>
        <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-0">
          <div className="relative text-center">
            <CustomEmblaCarousel
              CustomCard={(item, index, firstActiveItemIndex) => {
                return (
                  <div
                    key={index}
                    className="box-border min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 sm:px-1 md:basis-[42%] lg:basis-[22%]"
                  >
                    {/* <article
                      key={item.id}
                      className="group flex w-full h-full shrink-0 text-start flex-col overflow-hidden rounded-[22px] border border-black/12 bg-white transition duration-300 hover:-translate-y-1"
                    >
                      <div className="relative h-[202px] w-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="386px"
                          className="object-cover transition duration-500"
                        />
                        <div className="absolute left-6 top-6 z-10 flex items-center gap-2 text-white">
                          <Icon icon={item.logoIcon} className="h-6 w-6 text-white" />

                          <span className="text-[24px] font-[800] leading-none tracking-[-0.04em] text-white">
                            {item.logoText}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-end p-5">
                        <div className="mt-auto">
                          <p className="text-[13px] font-[400] text-[#686868]">
                            {item.source}
                          </p>

                          <div className="flex justify-between items-end">
                            <h3 className="mt-3 flex-1 max-w-[290px] text-[22px] font-[600] leading-[1.18] tracking-[0.5px] text-[#202020]">
                              {item.title}
                            </h3>
                            <button
                              type="button"
                              aria-label={`Open article: ${item.title}`}
                              className="flex h-6 w-6 items-center justify-center rounded-full border border-black/25 bg-transparent text-[#222] transition duration-300 hover:bg-black hover:text-white"
                            >
                              <Icon icon="mingcute:right-line" className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </article> */}

                    <article className="group relative h-[480px] w-full overflow-hidden rounded-[26px] border border-black/20 bg-black text-start shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 50vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />

                      {/* Dark overlay like screenshot */}
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

                      {/* Content */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                        <p className="text-[16px] font-[400] leading-none text-white/70">
                          {item.category}
                        </p>

                        <h4 className="mt-3 max-w-[82%] text-[20px] font-[800] leading-[1.2] tracking-[-0.035em] text-white sm:text-[21px]">
                          {item.title}
                        </h4>
                      </div>

                      {/* Arrow button */}
                      <button
                        type="button"
                        aria-label={`Open ${item.title}`}
                        className="absolute bottom-8 right-7 z-20 flex h-[34px] w-[34px] items-center justify-center rounded-full border border-white/45 bg-black/10 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
                      >
                        <Icon icon="lucide:chevron-right" className="h-[18px] w-[18px]" />
                      </button>
                    </article>
                  </div>
                );
              }}
              isAutoplay={false}
              items={[...highlightItems, ...highlightItems]}
              options={{ loop: true, align: "center", skipSnaps: false }}
              wrapperClassName="mt-3 min-h-0 bg-transparent mb-28 pt-2"
              CustomButtonWrapper={(onPrevClick, onNextClick) => {
                return (
                  <div className="absolute -bottom-14 flex w-full items-center justify-center gap-3 sm:-bottom-16 sm:gap-4 lg:-bottom-18">
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