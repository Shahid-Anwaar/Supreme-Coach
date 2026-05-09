"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
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

// const eventImages: EventItem[] = [
//   {
//     id: 1,
//     image:
//       "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },


//   {
//     id: 3,
//     image:
//       "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 5,
//     image:
//       "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 6,
//     image:
//       "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },

//   {
//     id: 8,
//     image:
//       "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 9,
//     image:
//       "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 10,
//     image:
//       "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 7,
//     image:
//       "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 11,
//     image:
//       "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
//   {
//     id: 12,
//     image:
//       "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200",
//   },
// ];

const eventImages: EventItem[] = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1400",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1300",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    image:
      "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 8,
    image:
      "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
  {
    id: 9,
    image:
      "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=950",
  },
  {
    id: 10,
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1250",
  },
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1100",
  },
  {
    id: 12,
    image:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1350",
  },
  {
    id: 13,
    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 14,
    image:
      "https://images.pexels.com/photos/5685936/pexels-photo-5685936.jpeg",
  },
  {
    id: 15,
    image:
      "https://images.pexels.com/photos/1181435/pexels-photo-1181435.jpeg?auto=compress&cs=tinysrgb&w=1000",
  },
  // {
  //   id: 16,
  //   image:
  //     "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // },
  // {
  //   id: 17,
  //   image:
  //     "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=850",
  // },
  // {
  //   id: 18,
  //   image:
  //     "https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=1300",
  // },
  // {
  //   id: 19,
  //   image:
  //     "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=950",
  // },
  // {
  //   id: 20,
  //   image:
  //     "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1500",
  // },
  // {
  //   id: 21,
  //   image:
  //     "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1050",
  // },
  // {
  //   id: 22,
  //   image:
  //     "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=1250",
  // },
  // {
  //   id: 23,
  //   image:
  //     "https://images.pexels.com/photos/1181415/pexels-photo-1181415.jpeg?auto=compress&cs=tinysrgb&w=900",
  // },
  // {
  //   id: 24,
  //   image:
  //     "https://images.pexels.com/photos/1181529/pexels-photo-1181529.jpeg?auto=compress&cs=tinysrgb&w=1350",
  // },
  // {
  //   id: 25,
  //   image:
  //     "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1000",
  // },
  {
    id: 26,
    image:
      "https://images.pexels.com/photos/1181552/pexels-photo-1181552.jpeg?auto=compress&cs=tinysrgb&w=1450",
  },
  {
    id: 27,
    image:
      "https://images.pexels.com/photos/1181571/pexels-photo-1181571.jpeg?auto=compress&cs=tinysrgb&w=850",
  },
  {
    id: 28,
    image:
      "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1150",
  },
  {
    id: 29,
    image:
      "https://images.pexels.com/photos/5685763/pexels-photo-5685763.jpeg",
  },
  {
    id: 30,
    image:
      "https://images.pexels.com/photos/1181631/pexels-photo-1181631.jpeg?auto=compress&cs=tinysrgb&w=1300",
  },
  // {
  //   id: 31,
  //   image:
  //     "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1100",
  // },
  // {
  //   id: 32,
  //   image:
  //     "https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg?auto=compress&cs=tinysrgb&w=1400",
  // },
];
export default function InPersonEventsSection({
  isShownHeading = true,
}: {
  isShownHeading?: boolean;
}) {
  return (
    <section className="bg-black pt-0">
      <div className="relative top-16 z-1 mx-auto max-w-400 px-4 sm:top-24 sm:px-5 md:top-32 md:px-6 lg:top-44 lg:px-8">
        {isShownHeading && (
          <div className="text-center">
            <p className="section-label text-white">
              IN-PERSON EVENTS
            </p>

            <h2 className="mt-3 mb-6 section-title text-white sm:mb-7 md:mb-8">
              Bringing Students Together
            </h2>
          </div>
        )}

        <CustomMasonry
          items={eventImages}
          className=""
          columnsCountBreakPoints={{
            350: 1,
            640: 2,
            800: 3,
            1000: 4,
            1300: 5,
          }}
          gutterBreakPoints={{
            350: 10,
            640: 12,
            800: 14,
            1000: 18,
            1300: 20,
          }}
          renderItem={(item: EventItem) => (
            <div className="overflow-hidden rounded-md bg-white/5">
              <Image
                src={item.image}
                alt="In-person event"
                width={600}
                height={800}
                sizes="(max-width: 640px) 92vw, (max-width: 800px) 46vw, (max-width: 1000px) 31vw, 20vw"
                className="h-auto w-full object-cover grayscale transition duration-500 hover:scale-[1.03]"
                unoptimized
              />
            </div>
          )}
        />
      </div>
    </section>
  );
}