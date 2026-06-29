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
      "/external-images/img-f4152475.webp",
    profileImage:
      "/external-images/img-e8cc1063.webp",
    companyLogo: "mdi:linkedin",
    name: "Quin Wills",
    company: "Founder of Ochre Bio",
  },
  {
    id: 2,
    image:
      "/external-images/img-8dcedbeb.webp",
    profileImage:
      "/external-images/img-771d6d47.webp",
    companyLogo: "mdi:linkedin",
    name: "Ron Davis",
    company: "Founder of Joust",
  },
  {
    id: 3,
    image:
      "/external-images/img-3a06b771.webp",
    profileImage:
      "/external-images/img-58eef3ee.webp",
    companyLogo: "mdi:linkedin",
    name: "Jon-David Hague",
    company: "Founder of Bountisphere",
  },
  {
    id: 4,
    image:
      "/external-images/img-a7a19f5a.webp",
    profileImage:
      "/external-images/img-7cf9a655.webp",
    companyLogo: "mdi:linkedin",
    name: "Kate Cotterill",
    company: "Founder of SheGrows Veg",
  },
  {
    id: 5,
    image:
      "/external-images/img-61d33279.webp",
    profileImage:
      "/external-images/img-6c47b844.webp",
    companyLogo: "mdi:linkedin",
    name: "Max Lewandowski",
    company: "Founder of Uhub",
  },
  {
    id: 6,
    image:
      "/external-images/img-9269abc7.webp",
    profileImage:
      "/external-images/img-349a8480.webp",
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
          BUILDING WITH Supreme Coach
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