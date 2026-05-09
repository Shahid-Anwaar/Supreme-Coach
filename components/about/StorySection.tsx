

export default function StorySection() {
  return (
    <section className="relative overflow-hidden bg-white  section-container">
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
        <div className="relative">
          <div className="group relative aspect-[16/9] overflow-hidden rounded-[14px] bg-black shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
            <iframe
              src="https://www.youtube.com/embed/QpsUX6mH-Wo?rel=0&modestbranding=1"
              title="The Power of a Big Idea with Ariel Renous | StrategiQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}