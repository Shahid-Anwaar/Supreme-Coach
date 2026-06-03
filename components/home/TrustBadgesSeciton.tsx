"use client";

import Image from "next/image";

const topBadges = [
  {
    src: "https://simply.coach/wp-content/uploads/2026/03/Coaching_BestRelationship_Total.svg",
    alt: "Best Relationship",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2026/03/Coaching_BestResults_Total.svg",
    alt: "Best Results",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2026/03/Coaching_HighPerformer_HighPerformer.svg",
    alt: "High Performer",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2026/03/Coaching_MomentumLeader_Leader.svg",
    alt: "Momentum Leader",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2026/03/Mentoring_BestEstimatedROI_Roi.svg",
    alt: "Best Estimated ROI",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2026/03/Coaching_BestUsability_Total.svg",
    alt: "Best Usability",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2025/04/Mentoring_FastestImplementation_GoLiveTime.svg",
    alt: "Fastest Implementation",
  },
];

const securityBadges = [
  {
    src: "https://simply.coach/wp-content/uploads/2022/11/21972-312_SOC_NonCPA.png",
    alt: "AICPA SOC",
    className: "w-[78px] sm:w-[90px] md:w-[98px]",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2022/11/PNG_GDPR-1-e1667800110908-1024x1006.webp",
    alt: "GDPR",
    className: "w-[78px] sm:w-[90px] md:w-[98px]",
  },
  {
    src: "https://simply.coach/wp-content/uploads/2022/11/hipaa-logo.png",
    alt: "HIPAA",
    className: "w-[95px] sm:w-[110px] md:w-[125px]",
  },
];

const reviewBadges = [
  {
    src: "https://badges.softwareadvice.com/reviews/d7ec0222-85d4-41c8-941e-24fa39baa542",
    alt: "Software Advice Reviews",
    className: "w-[150px] sm:w-[165px]",
  },
  {
    src: "https://assets.capterra.com/badge/56a26c6b517de952384d6b060a74ec22.svg?v=2193033&p=232231",
    alt: "Capterra Reviews",
    className: "w-[130px] sm:w-[145px]",
  },
];

export default function TrustBadgesSection() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Side */}
        <div className="flex flex-col items-center gap-7 lg:items-start">
          <div className="flex flex-wrap items-end justify-center gap-x-3 gap-y-4 lg:justify-start">
            {topBadges.map((badge) => (
              <Image
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={80}
                height={100}
                unoptimized
                className="h-auto w-[58px] sm:w-[66px] md:w-[72px] lg:w-[76px]"
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:justify-start lg:pl-[70px]">
            {reviewBadges.map((badge) => (
              <Image
                key={badge.alt}
                src={badge.src}
                alt={badge.alt}
                width={170}
                height={55}
                unoptimized
                className={`h-auto object-contain ${badge.className}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 flex-wrap items-center justify-center gap-6 sm:gap-8 lg:justify-end">
          {securityBadges.map((badge) => (
            <Image
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              width={130}
              height={130}
              unoptimized
              className={`h-auto object-contain ${badge.className}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}