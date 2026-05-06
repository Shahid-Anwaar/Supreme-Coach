"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

type CompanyCardType = {
  id: number;
  image: string;
  profileImage: string;
  companyLogo: string;
  name: string;
  company: string;
};

const companiesData: CompanyCardType[] = [
  {
    id: 1,
    image:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fe01eee5df70b49fc8fbe63a228966543&w=1920&q=75",
    profileImage:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fb826ed6f063e4dec87e2caada88897c3&w=64&q=75",
    companyLogo: "mdi:linkedin",
    name: "Quin Wills",
    company: "Founder of Ochre Bio",
  },
  {
    id: 2,
    image:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F9e7fef320cdb4371861527c95a9dbba9&w=1920&q=75",
    profileImage:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Ffff8db9fcf404a5488e835759afff68a&w=64&q=75",
    companyLogo: "mdi:linkedin",
    name: "Ron Davis",
    company: "Founder of Joust",
  },
  {
    id: 3,
    image:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Ff29e15adf8844048a0398d773afae340&w=1920&q=75",
    profileImage:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F2c4634601d304bbabe8c560a014026ed&w=64&q=75",
    companyLogo: "mdi:linkedin",
    name: "Jon-David Hague",
    company: "Founder of Bountisphere",
  },
  {
    id: 4,
    image:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F18df76ee7f974a829cd2112496332c79&w=1920&q=75",
    profileImage:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Faabac41c308d4d2bafe4bd40e6dba597&w=64&q=75",
    companyLogo: "mdi:linkedin",
    name: "Kate Cotterill",
    company: "Founder of SheGrows Veg",
  },
  {
    id: 5,
    image:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F7d690bc323ad475db6bbc39709c1d204&w=1920&q=75",
    profileImage:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F0696deee491c43f8bb1a74b84dcc21ec&w=64&q=75",
    companyLogo: "mdi:linkedin",
    name: "Max Lewandowski",
    company: "Founder of Uhub",
  },
  {
    id: 6,
    image:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F3903fd7619ad4e60a112ea7d637d11cd&w=1920&q=75",
    profileImage:
      "https://augment.org/_next/image?url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fa90319e3cb084524b7d39f518f5ee777&w=64&q=75",
    companyLogo: "mdi:linkedin",
    name: "Mohit Patel",
    company: "Founder of TruText",
  },
];

export default function StudentsCompaniesBuilt() {
  return (
    <section className="bg-black pt-12 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <p className="section-label text-center">
          BUILDING WITH AUGMENT
        </p>

        <h2 className="section-title mx-auto text-center text-white mt-3">
          Companies Built by Our Students
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:mt-14 lg:gap-14">
          {companiesData.map((item) => (
            <CompanyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyCard({ item }: { item: CompanyCardType }) {
  return (
    <div className="overflow-hidden rounded-[18px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1">
      {/* Main preview image */}
      <div className="pb-0 sm:pb-0">
        <div className="relative h-[180px] w-full overflow-hidden sm:h-[220px] lg:h-[310px]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom info area */}
      <div className="flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <div className="relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full sm:h-[64px] sm:w-[64px]">
          <Image
            src={item.profileImage}
            alt={item.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-[18px] font-[400] leading-none tracking-[-0.03em] text-[#222] sm:text-[20px] lg:text-[22px]">
              {item.name}
            </h3>

            <Icon
              icon={item.companyLogo}
              className="shrink-0 text-[20px] text-[#6b6b6b] sm:text-[26px]"
            />
          </div>

          <p className="mt-1 text-[12px] leading-[1.2] text-[#797878] sm:text-[15px]">
            {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}