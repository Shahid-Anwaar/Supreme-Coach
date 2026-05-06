"use client";

import dynamic from "next/dynamic";
import React from "react";

interface CustomMasonryProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columnsCountBreakPoints?: Record<number, number>;
  gutterBreakPoints?: Record<number, number>;
  className?: string;
}

const CustomMasonry = dynamic(() => import("./CustomMasonry"), {
  ssr: false,
  loading: () => <div className="h-96" />,
}) as unknown as React.ComponentType<CustomMasonryProps<EventItem>>;

type EventItem = {
  id: number;
  image: string;
};

const eventImages: EventItem[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  
  
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 10,
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 12,
    image:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function InPersonEventsSection() {
  return (
    <section className="bg-black py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/90 sm:text-[14px]">
            IN-PERSON EVENTS
          </p>

          <h2 className="mt-4 text-[34px] font-normal leading-[1.02] tracking-[-0.05em] text-white sm:text-[48px] lg:text-[60px]">
            Bringing Students Together
          </h2>
        </div>

        <CustomMasonry
          items={eventImages}
          className="mt-10 sm:mt-12 lg:mt-14"
          columnsCountBreakPoints={{
            350: 1,
            640: 2,
            900: 3,
            1200: 4,
            1440: 5,
          }}
          gutterBreakPoints={{
            350: 12,
            640: 14,
            900: 16,
            1200: 18,
            1440: 20,
          }}
          renderItem={(item: EventItem) => (
            <div className="overflow-hidden rounded-md bg-white/5">
              <img
                src={item.image}
                alt="In-person event"
                className="h-auto w-full object-cover grayscale transition duration-500 hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}