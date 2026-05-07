"use client";

import Image from "next/image";
import CustomEmblaCarousel from "./CustomCarosal";

type CompanyLogo = {
  title: string;
  image: string;
};

type CompanyLogoCarouselProps = {
  companyLogos: CompanyLogo[];
};

const CompanyLogoCarousel = ({ companyLogos }: CompanyLogoCarouselProps) => {
  return (
    <div className="mx-auto mt-0 max-w-[92%] w-full">
      <CustomEmblaCarousel
        CustomCard={(item: CompanyLogo, index: number) => {
          return (
            <div
              key={index}
              className="box-border flex min-w-0 shrink-0 grow-0 basis-1/3 items-center justify-center px-1 sm:basis-[25%] md:basis-[20%] lg:basis-[16%] xl:basis-[13%]"
            >
              <div className="flex h-8 w-23.75 items-center justify-center sm:h-9 sm:w-[110px] md:w-[120px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="max-h-full w-auto object-contain"
                  width={120}
                  height={40}
                  unoptimized
                />
              </div>
            </div>
          );
        }}
        isContinuousPlay={true}
        continuousPlayConfig={{
          speed: 0.6
        }}
        isAutoplay={true}
        items={companyLogos}
        options={{
          loop: true,
          align: "start",
          skipSnaps: false,
        }}
        wrapperClassName="mt-6 min-h-0 bg-transparent sm:mt-7"
      />
    </div>
  );
};

export default CompanyLogoCarousel;