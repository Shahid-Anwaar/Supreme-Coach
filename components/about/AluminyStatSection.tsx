import Image from "next/image";

const alumniImages = [
  "/external-images/img-1281c174.webp",
  "/external-images/img-d87d83ff.webp",
  "/external-images/img-728defcf.webp",
];

export default function AlumniStatsSection() {
  return (
    <section className="bg-black">
      <div className="section-container pt-12 sm:pt-16 md:pt-18 lg:pt-20">
        <div className="mx-auto rounded-[10px] border border-white/20 bg-[#1b1b1b] px-4 py-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.45)] sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16">
          {/* Avatars */}
          <div className="mb-5 flex items-center justify-center sm:mb-6 md:justify-start">
            {alumniImages.map((image, index) => (
              <div
                key={index}
                className="-ml-3 first:ml-0 relative h-[44px] w-[44px] overflow-hidden rounded-full border-2 border-[#1b1b1b] sm:-ml-4 sm:h-[48px] sm:w-[48px] md:h-[52px] md:w-[52px]"
              >
                <Image
                  src={image}
                  alt={`Alumni ${index + 1}`}
                  fill
                  sizes="42px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Heading */}
          <h1 className="section-title hero-title text-white stylish-family mx-auto max-w-[12ch] text-center tracking-[1px] leading-[1.08] sm:max-w-[13ch] sm:tracking-[1.5px] md:max-w-[15ch] md:tracking-[2px] lg:mx-0 lg:max-w-245 lg:text-start">
            Supreme Coach has{" "}
            <span className="bg-linear-to-r from-primary-500 to-primary-300">
              over 10,000 alumni &nbsp;
            </span>{" "}
            from more than 30 countries.
          </h1>

          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-3">
            <div className="rounded-[7px] border border-primary-400/40 bg-white/[0.04] px-4 py-4 sm:px-5">
              <p className="text-center text-[20px] leading-[1.25] text-white sm:text-[22px] md:text-start md:leading-none md:text-[24px]">
                <span className="font-serif font-[700] italic">10,000+</span>{" "}
                <span className="font-sans text-[16px] font-[400] sm:text-[18px] md:text-[22px]">
                  students & alumni
                </span>
              </p>
            </div>

            <div className="rounded-[7px] border border-primary-400/40 bg-white/[0.04] px-4 py-4 sm:px-5">
              <p className="text-center text-[20px] leading-[1.25] text-white sm:text-[22px] md:text-start md:leading-none md:text-[24px]">
                <span className="font-serif font-[700] italic">4.8/5</span>{" "}
                <span className="font-sans text-[16px] font-[400] sm:text-[18px] md:text-[22px]">
                  rated by our students
                </span>
              </p>
            </div>

            <div className="rounded-[7px] border border-primary-400/40 bg-white/[0.04] px-4 py-4 sm:px-5">
              <p className="text-center text-[20px] leading-[1.25] text-white sm:text-[22px] md:text-start md:leading-none md:text-[24px]">
                <span className="font-serif font-[700] italic">36</span>{" "}
                <span className="font-sans text-[16px] font-[400] sm:text-[18px] md:text-[22px]">
                  nationalities
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}