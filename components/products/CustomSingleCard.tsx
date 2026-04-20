import { Icon } from "@iconify/react";

type CustomFeatureCardProps = {
  title: string;
  icon: string;
  bg?: string;
  items: string[];
  isBlack?: boolean;
};

export default function CustomProductCard({
  title,
  icon,
  bg = "bg-[#ffffff]",
  items,
  isBlack = false,
}: CustomFeatureCardProps) {
  return (
    <article
      className={`w-full max-w-[320px] rounded-[14px] border border-black/10 ${bg} p-5 sm:p-6`}
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${isBlack ? "bg-black" : "bg-[#e8e8e8]"}`}>
          <Icon icon={icon} className={`h-6 w-6 ${isBlack ? "text-white" : "text-black"}`} />
        </div>

        <h3 className="stylish-family text-[26px] font-normal leading-none tracking-[-0.03em] text-black sm:text-[30px]">
          {title}
        </h3>
      </div>

      <div className="mt-5 border-t border-black/70" />

      <div className="mt-2">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-2 py-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/70">
                <Icon icon="mdi:check" className="h-4 w-4 text-black" />
              </div>

              <p className="text-[16px] font-normal leading-[1.35] tracking-[-0.02em] text-black sm:text-[17px]">
                {item}
              </p>
            </div>

            {index !== items.length - 1 ? (
              <div className="border-t border-black/70" />
            ) : null}
          </div>
        ))}
      </div>
    </article>
  );
}