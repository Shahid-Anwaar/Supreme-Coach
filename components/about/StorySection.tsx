import Image from "next/image";
import { Icon } from "@iconify/react";

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-white  section-container">
      {/* Soft background shapes */}
      {/* <div className="pointer-events-none absolute left-[-80px] top-[-120px] h-[260px] w-[260px] rounded-full bg-[#eef0d9]/70 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#eef0d9]/70 blur-3xl" /> */}

      <div className="relative mx-auto grid items-center gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-16">
        {/* Left Content */}
        <div>
          <h2 className="section-title tracking-[1.5px]">
            The Augment Business School Story
          </h2>

          <p className="mt-9 max-w-[620px] text-[20px] font-[400] leading-[1.55] tracking-[-0.02em] text-black/90 sm:text-[22px]">
            The traditional MBA system is broken—too expensive, time-consuming,
            and not practical. So, we set out to build the MBA program we
            dreamed of.
          </p>
        </div>

        {/* Video Card */}
        <div className="relative">
          <div className="group relative aspect-[16/9] overflow-hidden rounded-[14px] bg-black shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
            <Image
              src="https://images.pexels.com/photos/8197530/pexels-photo-8197530.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="The Augment Business School Story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-85 transition duration-500 group-hover:scale-[1.03]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20" />

            {/* Video Text */}
            <div className="absolute left-8 top-6 z-10 max-w-[520px]">
              <p className="text-[18px] font-[700] leading-none text-white sm:text-[22px]">
                The Power of a Big Idea with Ariel Renous | StrategiQ
              </p>

              <h3 className="mt-4 text-[64px] font-[800] leading-[0.86] tracking-[-0.08em] text-white sm:text-[82px] lg:text-[96px]">
                Ariel
                <br />
                Renous
              </h3>

              <p className="mt-3 text-[26px] font-[600] leading-none tracking-[-0.04em] text-white sm:text-[34px]">
                The Power of a Big Idea
              </p>
            </div>

            {/* Center Play Button */}
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 z-20 flex h-[58px] w-[82px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[16px] bg-[#ff0000] text-white shadow-[0_10px_35px_rgba(255,0,0,0.35)] transition duration-300 hover:scale-105"
            >
              <Icon icon="mdi:play" className="ml-1 h-9 w-9" />
            </button>

            {/* Bottom Icons */}
            <div className="absolute bottom-6 left-8 z-20 flex items-center gap-5 text-white">
              <Icon icon="lucide:share-2" className="h-6 w-6" />
              <Icon icon="lucide:clock" className="h-6 w-6" />
            </div>

            {/* Watch on YouTube */}
            <div className="absolute bottom-6 right-8 z-20 flex items-center gap-2 text-[16px] font-[700] text-white">
              <span>Watch on</span>
              <Icon icon="logos:youtube-icon" className="h-6 w-6" />
              <span>YouTube</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}