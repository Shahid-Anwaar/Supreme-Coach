"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomEmblaCarousel from "../home/CustomCarosal";

type PressItem = {
  id: number;
  source: string;
  title: string;
  image: string;
  logoText: string;
  logoIcon: string;
};

const pressItems: PressItem[] = [
  {
    id: 1,
    source: "Forbes 30U30",
    logoIcon: "simple-icons:forbes",
    logoText: "Forbes 30",
    title: "Ariel and Roy made it to Forbes 30 Under 30",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    source: "Maddyness",
    logoIcon: "mdi:newspaper-variant-outline",
    logoText: "Maddyness",
    title: "Augment is providing the missing pieces of the puzzle",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    source: "Gulf Times",
    logoIcon: "mdi:newspaper",
    logoText: "GULF TIMES",
    title: "Alternative MBA program to enhance skills of entrepreneurs",
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    source: "Poets & Quants",
    logoIcon: "mdi:school-outline",
    logoText: "Poets & Quants",
    title: "Augment Business School Provides A MasterClass-Like MBA",
    image:
      "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    source: "Euronews",
    logoIcon: "simple-icons:euronews",
    logoText: "euronews.",
    title: "How global media is covering the future of online business education",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    source: "Bloomberg",
    logoIcon: "mdi:chart-line",
    logoText: "Bloomberg",
    title: "Business education is shifting toward flexible digital learning",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 7,
    source: "TechCrunch",
    logoIcon: "simple-icons:techcrunch",
    logoText: "TechCrunch",
    title: "A startup-style approach to business school is gaining momentum",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 8,
    source: "Business Insider",
    logoIcon: "mdi:briefcase-outline",
    logoText: "Business Insider",
    title: "The new wave of online business education is gaining attention",
    image:
      "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 9,
    source: "Fast Company",
    logoIcon: "mdi:flash-outline",
    logoText: "Fast Company",
    title: "A modern approach to business education for ambitious founders",
    image:
      "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 10,
    source: "Yahoo Finance",
    logoIcon: "simple-icons:yahoo",
    logoText: "Yahoo Finance",
    title: "Business learning platforms are reshaping executive education",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function PressMediaSection() {
  return (
    <section className="bg-white">
      <div className="  section-container py-5">
        <div className="mb-0">
          <h3 className="text-[20px] font-[600] tracking-[-0.03em] text-[#1f1f1f] sm:text-[22px]">
            Press & Media
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
                  className="box-border min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 sm:px-1 md:basis-[42%] lg:basis-[24%]"
                >
                  <article
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
                  </article>
                </div>
              );
            }}
            isAutoplay={false}
            items={[...pressItems, ...pressItems]}
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
  );
}