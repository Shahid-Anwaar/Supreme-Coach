"use client";
import type { TestimonialItem } from "@/data/data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { clampText } from "./TestmonialSection";
import Link from "next/link";

export function CustomTestimonialCard({ item, setShownFullTextIds, shownFullTextIds, isShowReadLessMoreBtn = true }: { item: TestimonialItem; shownFullTextIds: number[]; setShownFullTextIds: any; isShowReadLessMoreBtn?: boolean; }) {
  const { shorText, truncated } = clampText(item.text, 240);

  return (
    <article className="break-inside-avoid rounded-[14px] border border-black/8 bg-white hover:bg-gray-50 p-5 text-start shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:p-6">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#d9d9d9] sm:h-[72px] sm:w-[72px]">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="72px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-[18px] font-semibold leading-[1.15] tracking-[-0.03em] text-[#1b1b1b] sm:text-[16px]">
                {item.name}
              </h3>

              <p className="mt-1 truncate text-[16px] font-normal leading-[1.1] tracking-[-0.02em] text-[#292828] sm:text-[15px]">
                {item.role}
              </p>
            </div>

            {item.linkedin ? (
              <Icon
                icon="entypo-social:linkedin-with-circle"
                width="22"
                height="22"
                className="mt-1 shrink-0 text-blue-600"
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-5">
        {item.title && <h4 className="text-[24px] font-medium leading-[1.01] tracking-[-0.04em] text-[#111111] sm:text-[18px]">
          {item.title}
        </h4>}

        <p className="mt-3 text-[16px] font-normal leading-[1.55] tracking-[-0.02em] text-[#5a5a5a] sm:text-[17px]">
          "{shownFullTextIds.includes(item.id) ? item.text : shorText}"
        </p>

        {isShowReadLessMoreBtn && truncated ? (
          <>
            {shownFullTextIds.includes(item.id) ? (
              <button
                type="button"
                onClick={() => {
                  setShownFullTextIds(shownFullTextIds.filter((id: any) => id !== item.id));
                }}
                className="mt-2 block cursor-pointer text-[15px] font-medium leading-[1.3] tracking-[-0.015em] text-[#6b7280] transition-opacity duration-200 hover:opacity-70"
              >
                Read less
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setShownFullTextIds((prev: any) => [...prev, item.id]);
                }}
                className="mt-2 block cursor-pointer text-[15px] font-medium leading-[1.3] tracking-[-0.015em] text-[#6b7280] transition-opacity duration-200 hover:opacity-70"
              >
                Read more
              </button>
            )}
          </>
        ) : null}

        {item.schoolLink ? (
          <Link
            href={item.schoolLink}
            className="mt-3 inline-flex items-center gap-1 text-[14px] font-medium leading-none tracking-[-0.02em] text-[#1b1b1b] hover:underline"
          >
            Explore school
            <Icon icon="mingcute:arrow-right-line" className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
