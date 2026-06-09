"use client";

import Link from "next/link";

type LogoItem = {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

type SecurityItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const trustedLogos: LogoItem[] = [
  {
    name: "University of Pennsylvania",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0d2d84a7346a752b39181_1f76f88275861077a90fbdc3fa6089aa_upenn-logo-black.svg",
    width: 140,
    height: 48,
    className: "h-12 w-auto sm:h-16",
  },
  {
    name: "BBC",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0d2d8a9139c3c33c4dddd_68bd2fea137c68506d295fdcb16a5bb7_bbc-logo-black.svg",
    width: 110,
    height: 40,
    className: "h-8 w-auto sm:h-16",
  },
  {
    name: "Manychat",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0d2d80951bd87a9a079d2_e33f9312470aee49cd7f2c3e2e4db60d_manychat-logo-black.svg",
    width: 170,
    height: 40,
    className: "h-8 w-auto sm:h-10",
  },
  {
    name: "Shopify",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0d2d8a523bbe12950cc43_70745516ac53e02c9f92e7455dd38c38_shopify-logo-black.svg",
    width: 150,
    height: 42,
    className: "h-8 w-auto sm:h-10",
  },
];

const securityItems: SecurityItem[] = [
  {
    name: "SOC 2",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0e2f8ab376492b66e3173_security-soc2-icon-black.svg",
    width: 56,
    height: 56,
  },
  {
    name: "PCI DSS",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0e2f8bba97ee0f04598a9_security-pci-dss-icon-black.svg",
    width: 56,
    height: 56,
  },
  {
    name: "GDPR",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0e2f8f3673b5a9d910a2e_security-gdpr-icon-black.svg",
    width: 56,
    height: 56,
  },
  {
    name: "CCPA",
    src: "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/69e0e2f8a1fd8534085a20b3_security-ccpa-icon-black.svg",
    width: 56,
    height: 56,
  },
];

export default function TrustAndSecuritySection() {
  return (
    <section>
    <div className="section-container pt-0">
        <div className="text-center">
            <p className="text-[14px] font-medium uppercase leading-tight tracking-[-0.03em] text-black sm:text-[16px] md:text-[18px] lg:text-[20px]">
                Trusted by over 150,000 businesses
            </p>
        </div>

        <div className="mt-5 grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 sm:gap-x-8 sm:gap-y-9 md:grid-cols-4 lg:gap-y-10">
            {trustedLogos.map((logo) => (
                <div
                    key={logo.name}
                    className="flex min-h-[44px] items-center justify-center sm:min-h-[56px] md:min-h-[64px]"
                >
                    <img
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="h-9 w-auto object-contain sm:h-12 md:h-14 lg:h-[72px]"
                    />
                </div>
            ))}
        </div>

        <div className="mt-6 rounded-[18px] bg-gray-50 px-4 py-6 sm:rounded-[22px] sm:px-6 sm:py-8 md:px-8 lg:rounded-[24px] lg:px-10 lg:py-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
                <div className="mx-auto max-w-[440px] text-center lg:mx-0 lg:text-left">
                    <h2 className="stylish-family text-[32px] leading-[1] tracking-[-0.04em] text-black sm:text-[40px] md:text-[48px] lg:text-[54px]">
                        Security and safety
                    </h2>

                    <p className="mt-3 text-[15px] leading-[1.45] tracking-[-0.03em] text-black sm:mt-4 sm:text-[17px] md:text-[18px] lg:text-[20px]">
                        We ensure Supreme Coach meets the highest standards of security and confidentiality.{" "}
                        Learn more.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 sm:gap-x-6 md:gap-x-8 lg:gap-y-8">
                    {securityItems.map((item) => (
                        <div
                            key={item.name}
                            className="flex flex-col items-center justify-center text-center"
                        >
                            <img
                                src={item.src}
                                alt={item.name}
                                width={item.width}
                                height={item.height}
                                className="h-10 w-10 object-contain sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14"
                            />

                            <p className="mt-2 text-[14px] font-normal leading-tight tracking-[-0.03em] text-black sm:text-[15px] md:text-[17px] lg:mt-3 lg:text-[20px]">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</section>
  );
}