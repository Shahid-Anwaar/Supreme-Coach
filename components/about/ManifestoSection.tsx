import { Icon } from "@iconify/react";
import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-white section-container">
      {/* soft abstract background blobs */}
      {/* <div className="pointer-events-none absolute left-[-120px] top-[40px] h-[240px] w-[240px] rounded-full bg-[#eef0e8] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[-30px] h-[220px] w-[220px] rounded-full bg-[#eef0e8] opacity-80 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[8%] left-[24%] h-[220px] w-[220px] rounded-full bg-[#f0f1ea] opacity-70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-40px] right-[18%] h-[260px] w-[260px] rounded-full bg-[#eef0e8] opacity-70 blur-3xl" /> */}

      <div className="relative">
        <div className="max-w-[880px]">
          <h2 className="section-title">
            The Augment Manifesto
          </h2>

          <div className="mt-10 space-y-10 text-[22px] max-w-[820px] font-[400] leading-[1.7] tracking-[-0.03em] text-[#1f1f1f] sm:text-[24px] lg:text-[25px]">
            <p>
              People often ask why we’re building Augment. The truth is,
              Augment was no spark of genius. We’re building it because we have
              to.
            </p>

            <p>
              In 2020, we were sitting in the classroom of one of the most
              prestigious business schools in the world. To our surprise, our
              professors were academics who preached textbook theories.
            </p>

            <p>
              The traditional MBA system is broken for entrepreneurs. It’s too
              expensive, time-consuming, and not practical. So, we set out to
              build the MBA program we dreamed of.
            </p>

            <p>
              An MBA for entrepreneurs, by entrepreneurs: entirely practical,
              taught by the world’s greatest entrepreneurs, on your terms, and
              costing less than 1% of a traditional MBA.
            </p>
          </div>

          {/* signatures */}
          <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:gap-20 lg:gap-28">
            <div>
              <Image
                src={"https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F65c1b01240b7458a871b8e02e16a0f8c"}
                width={180}
                height={100}
                alt="anything"
                className="w-48 h-28 object-cover"
                unoptimized
              />
              <p className="mt-1 text-[16px] font-semibold tracking-[-0.03em] text-[#7b7b7b] sm:text-[17px]">
                Co-Founder/CEO, Augment
              </p>
            </div>
            <div>
              <Image
                src={"https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F0b7154d10c66468a82d9f38a67cb086e"}
                width={180}
                height={100}
                alt="anything"
                className="w-48 h-28 object-cover"
                unoptimized
              />
              <p className="mt-1 text-[16px] font-semibold tracking-[-0.03em] text-[#7b7b7b] sm:text-[17px]">
                Co-Founder/COO, Augment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}