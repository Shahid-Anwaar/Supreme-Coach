import Image from "next/image";

export default function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-white section-container py-12 sm:py-16 md:py-20 lg:py-0">
      <div className="relative">
        <div className="mx-auto max-w-[880px] text-center lg:mx-0 lg:text-start">
          <h2 className="section-title leading-[1.1]">
            The Supreme Coach Manifesto
          </h2>

          <div className="mx-auto mt-6 max-w-[820px] space-y-6 text-[18px] font-[400] leading-[1.55] tracking-[-0.03em] text-[#1f1f1f] sm:mt-8 sm:space-y-8 sm:text-[21px] sm:leading-[1.6] md:text-[23px] md:leading-[1.65] lg:mt-10 lg:space-y-10 lg:text-[25px] lg:leading-[1.7] lg:mx-0">
            <p>
              People often ask why we’re building Supreme Coach. The truth is,
              Supreme Coach was no spark of genius. We’re building it because we have
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
          <div className="mx-auto mt-10 flex max-w-[520px] flex-col items-center justify-center gap-8 sm:mt-12 sm:flex-row sm:items-start sm:gap-14 md:mt-14 md:gap-20 lg:mx-0 lg:mt-16 lg:justify-start lg:gap-28">
            <div className="flex w-full max-w-[230px] flex-col items-center text-center sm:max-w-none lg:items-start lg:text-start">
              <Image
                src={
                  "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F65c1b01240b7458a871b8e02e16a0f8c"
                }
                width={180}
                height={100}
                alt="anything"
                className="h-24 w-40 object-cover sm:h-26 sm:w-44 md:h-28 md:w-48"
                unoptimized
              />
              <p className="mt-1 text-[14px] font-semibold tracking-[-0.03em] text-[#7b7b7b] sm:text-[16px] md:text-[17px]">
                Co-Founder/CEO, Supreme Coach
              </p>
            </div>

            <div className="flex w-full max-w-[230px] flex-col items-center text-center sm:max-w-none lg:items-start lg:text-start">
              <Image
                src={
                  "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F0b7154d10c66468a82d9f38a67cb086e"
                }
                width={180}
                height={100}
                alt="anything"
                className="h-24 w-40 object-cover sm:h-26 sm:w-44 md:h-28 md:w-48"
                unoptimized
              />
              <p className="mt-1 text-[14px] font-semibold tracking-[-0.03em] text-[#7b7b7b] sm:text-[16px] md:text-[17px]">
                Co-Founder/COO, Supreme Coach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}