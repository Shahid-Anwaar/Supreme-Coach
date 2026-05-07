"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomEmblaCarousel from "../home/CustomCarosal";

type PressItem = {
  id: number;
  source: string;
  title: string;
  image: string;
};

const pressItems: PressItem[] = [
  {
    id: 1,
    source: "Forbes 30U30",
    title: "Ariel and Roy made it to Forbes 30 Under 30",
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    source: "Maddyness",
    title: "Augment is providing the missing pieces of the puzzle",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    source: "GulfTimes",
    title: "Alternative MBA program to enhance skills of entrepreneurs",
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    source: "Poets & Quants",
    title: "Augment Business School Provides A MasterClass-Like MBA",
    image:
      "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    source: "Tech Review",
    title: "How modern business learning is becoming more practical",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function PressMediaSection() {
  return (
    <section className="bg-white">
      <div className="  section-container">
        <div className="mb-7">
          <h3 className="text-[20px] font-[600] tracking-[-0.03em] text-[#1f1f1f] sm:text-[22px]">
            Press & Media
          </h3>
          <div className="mt-1 h-0.5 w-full bg-black/12" />
        </div>

        

        <div className="overflow-x-auto pb-2">
          <div className="flex min-w-max gap-4">
            {pressItems.map((item) => (
              <article
                key={item.id}
                className="group flex w-[380px] shrink-0 flex-col overflow-hidden rounded-[22px] border border-black/12 bg-[#f5f5f2] shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[182px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="380px"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <p className="text-[15px] font-[400] text-[#757575]">
                      {item.source}
                    </p>

                    <h3 className="mt-3 max-w-[290px] text-[24px] font-[500] leading-[1.18] tracking-[-0.04em] text-[#202020]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      aria-label={`Open article: ${item.title}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/25 bg-transparent text-[#222] transition duration-300 hover:bg-black hover:text-white"
                    >
                      <Icon icon="lucide:arrow-right" className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-0">
          <div className="relative text-center">

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
                    {/* <div className='border-2 border-[#474747] rounded-[18px]'>
                                                {FlipStudentCard(item)}
                                            </div> */}
                  </div>
                );
              }}
              isAutoplay={false}
              items={pressItems}
              options={{ loop: true, align: "center", skipSnaps: false }}
              wrapperClassName="mt-5 min-h-0 bg-transparent sm:mt-8 lg:mt-10"
              CustomButtonWrapper={(onPrevClick, onNextClick) => {
                return (
                  <></>
                  // <div className="absolute -bottom-14 flex w-full items-center justify-center gap-3 sm:-bottom-16 sm:gap-4 lg:-bottom-18">
                  //   <button
                  //     type="button"
                  //     onClick={onPrevClick}
                  //     aria-label="Previous testimonial"
                  //     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-[#181818] text-white backdrop-blur-sm transition duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                  //   >
                  //     <Icon
                  //       icon="lucide:chevron-left"
                  //       className="h-5 w-5"
                  //     />
                  //   </button>

                  //   <button
                  //     type="button"
                  //     onClick={onNextClick}
                  //     aria-label="Next testimonial"
                  //     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-[#181818] text-white backdrop-blur-sm transition duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                  //   >
                  //     <Icon
                  //       icon="lucide:chevron-right"
                  //       className="h-5 w-5"
                  //     />
                  //   </button>
                  // </div>
                );
              }}
            />
          </div>
        </div>
    </section>
  );
}