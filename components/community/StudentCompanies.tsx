"use client";

import { Icon } from "@iconify/react";

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
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    profileImage:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    companyLogo: "logos:linkedin-icon",
    name: "Quin Wills",
    company: "Founder of Ochre Bio",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    profileImage:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300",
    companyLogo: "logos:linkedin-icon",
    name: "Ron Davis",
    company: "Founder of Joust",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    profileImage:
      "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=300",
    companyLogo: "logos:linkedin-icon",
    name: "Jon-David Hague",
    company: "Founder of Bountisphere",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    profileImage:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300",
    companyLogo: "logos:linkedin-icon",
    name: "Kate Cotterill",
    company: "Founder of SheGrows Veg",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1200",
    profileImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    companyLogo: "logos:linkedin-icon",
    name: "Max Lewandowski",
    company: "Founder of Uhub",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1200",
    profileImage:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    companyLogo: "logos:linkedin-icon",
    name: "Mohit Patel",
    company: "Founder of TruText",
  },
];

export default function StudentsCompaniesBuilt() {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-[600] uppercase tracking-[0.16em] text-white/90 sm:text-[12px]">
          BUILDING WITH AUGMENT
        </p>

        <h2 className="mx-auto mt-4 max-w-[900px] text-center text-[30px] font-[400] leading-[1.02] tracking-[-0.04em] text-white sm:text-[42px] md:text-[56px] lg:text-[64px]">
          Companies Built by Our Students
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:gap-8">
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
    <div className="overflow-hidden rounded-[18px] bg-[#dedede] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1">
      {/* Main preview image */}
      <div className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div className="overflow-hidden rounded-[10px] border border-black/10 bg-white">
          <img
            src={item.image}
            alt={item.name}
            className="h-[180px] w-full object-cover sm:h-[220px] lg:h-[310px]"
          />
        </div>
      </div>

      {/* Bottom info area */}
      <div className="flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5">
        <img
          src={item.profileImage}
          alt={item.name}
          className="h-[42px] w-[42px] rounded-full object-cover sm:h-[48px] sm:w-[48px]"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-[18px] font-[400] leading-none tracking-[-0.03em] text-[#222] sm:text-[20px] lg:text-[22px]">
              {item.name}
            </h3>

            <Icon
              icon={item.companyLogo}
              className="shrink-0 text-[18px] text-[#6b6b6b] sm:text-[19px]"
            />
          </div>

          <p className="mt-1 text-[12px] font-[400] leading-[1.2] text-[#666] sm:text-[14px]">
            {item.company}
          </p>
        </div>
      </div>
    </div>
  );
}