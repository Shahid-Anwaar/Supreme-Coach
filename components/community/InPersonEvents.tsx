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
//       "/external-images/img-0aeb00e7.webp",
//   },
//   {
//     id: 2,
//     image:
//       "/external-images/img-a936d161.webp",
//   },


//   {
//     id: 3,
//     image:
//       "/external-images/img-28b116eb.webp",
//   },
//   {
//     id: 4,
//     image:
//       "/external-images/img-b13eb5e9.webp",
//   },
//   {
//     id: 5,
//     image:
//       "/external-images/img-ccc46701.webp",
//   },
//   {
//     id: 6,
//     image:
//       "/external-images/img-c4952244.webp",
//   },

//   {
//     id: 8,
//     image:
//       "/external-images/img-b1de1c49.webp",
//   },
//   {
//     id: 9,
//     image:
//       "/external-images/img-893d0751.webp",
//   },
//   {
//     id: 10,
//     image:
//       "/external-images/img-d5a1e627.webp",
//   },
//   {
//     id: 7,
//     image:
//       "/external-images/img-02566826.webp",
//   },
//   {
//     id: 11,
//     image:
//       "/external-images/img-56664d31.webp",
//   },
//   {
//     id: 12,
//     image:
//       "/external-images/img-e549bd28.webp",
//   },
// ];

const eventImages: EventItem[] = [
  {
    id: 1,
    image:
      "/external-images/img-0aeb00e7.webp",
  },
  {
    id: 2,
    image:
      "/external-images/img-cc03c5d9.webp",
  },
  {
    id: 3,
    image:
      "/external-images/img-7de23983.webp",
  },
  {
    id: 4,
    image:
      "/external-images/img-3d360ec4.webp",
  },
  {
    id: 5,
    image:
      "/external-images/img-9c6d2fa4.webp",
  },
  {
    id: 6,
    image:
      "/external-images/img-9c9d37fe.webp",
  },
  {
    id: 7,
    image:
      "/external-images/img-02566826.webp",
  },
  {
    id: 8,
    image:
      "/external-images/img-88abb07c.webp",
  },
  {
    id: 9,
    image:
      "/external-images/img-0153b626.webp",
  },
  {
    id: 10,
    image:
      "/external-images/img-1b189b7e.webp",
  },
  {
    id: 11,
    image:
      "/external-images/img-34f82e96.webp",
  },
  {
    id: 12,
    image:
      "/external-images/img-915bdc67.webp",
  },
  {
    id: 13,
    image:
      "/external-images/img-84d8d9dd.webp",
  },
  {
    id: 14,
    image:
      "/external-images/img-45b27ecb.webp",
  },
  {
    id: 15,
    image:
      "/external-images/img-3fd9a0fd.webp",
  },
  // {
  //   id: 16,
  //   image:
  //     "/external-images/img-a94938f7.webp",
  // },
  // {
  //   id: 17,
  //   image:
  //     "/external-images/img-08ffe280.webp",
  // },
  // {
  //   id: 18,
  //   image:
  //     "/external-images/img-2f81cefe.webp",
  // },
  // {
  //   id: 19,
  //   image:
  //     "/external-images/img-b07283be.webp",
  // },
  // {
  //   id: 20,
  //   image:
  //     "/external-images/img-39411294.webp",
  // },
  // {
  //   id: 21,
  //   image:
  //     "/external-images/img-2cce96ce.webp",
  // },
  // {
  //   id: 22,
  //   image:
  //     "/external-images/img-f3b629b2.webp",
  // },
  // {
  //   id: 23,
  //   image:
  //     "/external-images/img-81544235.webp",
  // },
  // {
  //   id: 24,
  //   image:
  //     "/external-images/img-6cc32ed0.webp",
  // },
  // {
  //   id: 25,
  //   image:
  //     "/external-images/img-69bb5c34.webp",
  // },
  {
    id: 26,
    image:
      "/external-images/img-6414f225.webp",
  },
  {
    id: 27,
    image:
      "/external-images/img-dfa08992.webp",
  },
  {
    id: 28,
    image:
      "/external-images/img-48432a02.webp",
  },
  {
    id: 29,
    image:
      "/external-images/img-1716f856.webp",
  },
  {
    id: 30,
    image:
      "/external-images/img-23b8b8de.webp",
  },
  // {
  //   id: 31,
  //   image:
  //     "/external-images/img-db4b81d8.webp",
  // },
  // {
  //   id: 32,
  //   image:
  //     "/external-images/img-b63fc44c.webp",
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