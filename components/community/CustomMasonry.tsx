"use client";

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type CustomMasonryProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columnsCountBreakPoints?: Record<number, number>;
  gutterBreakPoints?: Record<number, number>;
  className?: string;
};

export default function CustomMasonry<T>({
  items,
  renderItem,
  columnsCountBreakPoints = {
    350: 1,
    640: 2,
    900: 3,
    1200: 4,
  },
  gutterBreakPoints = {
    350: 12,
    640: 16,
    900: 20,
    1200: 24,
  },
  className = "",
}: CustomMasonryProps<T>) {
  return (
    <div className={className}>
      <ResponsiveMasonry
        columnsCountBreakPoints={columnsCountBreakPoints}
        gutterBreakPoints={gutterBreakPoints}
      >
        <Masonry>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {renderItem(item, index)}
            </React.Fragment>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}