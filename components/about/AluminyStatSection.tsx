import Image from "next/image";

const alumniImages = [
  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120",
  "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120",
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=120",
];

export default function AlumniStatsSection() {
  return (
    <section className="bg-black">
      <div className="section-container pt-20">
     <div className="mx-auto rounded-[10px] border border-white/20 bg-[#1b1b1b] px-8 py-16 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.45)] sm:px-10 lg:px-12">
         {/* Avatars */}
        <div className="mb-6 flex items-center">
          {alumniImages.map((image, index) => (
            <div
              key={index}
              className="-ml-4 first:ml-0 relative h-[52px] w-[52px] overflow-hidden rounded-full border-2 border-[#1b1b1b]"
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
        <h1 className="section-title hero-title text-white stylish-family mx-auto max-w-[11ch] sm:max-w-[13ch] md:max-w-[15ch] tracking-[2px] leading-[1.1] lg:mx-0 lg:max-w-245 ">
            Augment has <span className="bg-linear-to-r from-primary-500 to-primary-300"> over 10,000 alumni &nbsp;</span> from more than 30 countries.
          </h1>
        {/* <h2 className="max-w-[900px] font-serif text-[42px] font-[400] leading-[1.12] tracking-[-0.04em] text-white sm:text-[56px] lg:text-[64px]">
          Augment has{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-[-6px] bottom-[7px] top-[8px] -z-0 rounded-[4px] bg-[#bedb20]" />
            <span className="relative z-10 text-black">over </span>
          </span>
          <span className="relative inline-block">
            <span className="absolute inset-0 -z-0 bg-[#2c62b8]" />
            <span className="relative z-10 text-white">10,000</span>
          </span>{" "}
          <span className="relative inline-block">
            <span className="absolute inset-x-[-6px] bottom-[7px] top-[8px] -z-0 rounded-[4px] bg-[#bedb20]" />
            <span className="relative z-10 text-black">alumni</span>
          </span>
          <br />
          from more than 30 countries.
        </h2> */}

        {/* Stats */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-[7px] border border-primary-400/40 bg-white/[0.04] px-5 py-4">
            <p className="text-[22px] leading-none text-white sm:text-[24px]">
              <span className="font-serif font-[700] italic">10,000+</span>{" "}
              <span className="font-sans text-[18px] font-[400] sm:text-[22px]">
                students & alumni
              </span>
            </p>
          </div>

          <div className="rounded-[7px] border border-primary-400/40 bg-white/[0.04] px-5 py-4">
            <p className="text-[22px] leading-none text-white sm:text-[24px]">
              <span className="font-serif font-[700] italic">4.8/5</span>{" "}
              <span className="font-sans text-[18px] font-[400] sm:text-[22px]">
                rated by our students
              </span>
            </p>
          </div>

          <div className="rounded-[7px] border border-primary-400/40 bg-white/[0.04] px-5 py-4">
            <p className="text-[22px] leading-none text-white sm:text-[24px]">
              <span className="font-serif font-[700] italic">36</span>{" "}
              <span className="font-sans text-[18px] font-[400] sm:text-[22px]">
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