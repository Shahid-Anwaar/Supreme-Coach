import Image from "next/image";
import Link from "next/link";

type SalesHubFeatureItem = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    objClass?: string;
};

const SALES_HUB_FEATURES: SalesHubFeatureItem[] = [
    {
        title: "Easy payments",
        description:
            "Sell with peace of mind using Supreme Coach:pay, our built-in checkout. You’ll get fraud protection, tax-inclusive pricing, flexible payout options, and more.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e311765fa29efc8085f497_943111b162257a8d92b15efa8ad802c4_courses-payments-2.webp",
        imageAlt: "Easy payments preview",
        objClass: "",
    },
    {
        title: "Less tax complexity",
        description:
            "We calculate, collect, and remit sales taxes, VAT, and GST on your behalf—so you don’t have to deal with additional accounting work.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e31176548905717e562e8a_4ce85045ea6d6abfccfc6ba00aed2594_courses-payments-1.webp",
        imageAlt: "Less tax complexity preview",
        objClass: "lg:-translate-y-28",
    },
    {
        title: "Pay their way",
        description:
            "Let students choose their preferred payment method, including PayPal, Apple Pay, Google Pay, Afterpay, and Klarna¹.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e31176a0248cabd8f02012_763b4baf45e90e34561637b98bbac9d5_courses-pay-their-way.webp",
        imageAlt: "Multiple payment methods preview",
        objClass: "lg:-translate-y-14",
    },
];

function SalesHubCard({ item, }: { item: SalesHubFeatureItem;  }) {
    return (
        <div className={`min-w-0 ${item.objClass }`}>
            <div className="rounded-lg bg-linear-to-b from-[#f0f0f0] to-[#c0c0c0] sm:rounded-[14px] lg:rounded-xl">
                <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={1200}
                    height={1000}
                    className="h-auto w-full "
                    unoptimized
                />
            </div>

            <h3 className="stylish-family mt-5 text-[24px] font-normal leading-[1.04] tracking-[-0.04em] text-black sm:mt-6 sm:text-[30px] md:text-[36px] lg:text-[40px]">
                {item.title}
            </h3>

            <p className="mt-3 max-w-[30rem] text-[16px] font-normal leading-[1.45] tracking-[-0.02em] text-black sm:text-[18px] md:text-[19px] lg:text-[20px]">
                {item.description}
            </p>
        </div>
    );
}

export default function ProductSalesHubSection() {
    return (
        <section className="bg-[#ffffff]">
            <div className="section-container py-10 sm:py-12 md:py-14 lg:py-18">
                <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <h2 className="section-title max-w-100 text-black">
                            Your course platform and your sales hub
                        </h2>
                    </div>

                    <div className="">
                        <p className="max-w-full text-[18px] font-normal leading-[1.45] tracking-[-0.02em] text-black sm:text-[20px] md:text-[22px] lg:text-[21px]">
                            Our selling and payment features are designed to meet the
                            needs of advanced creators and business owners. Sell in 120
                            different currencies in more than 200 countries and regions.
                        </p>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-3 sm:mt-16 sm:gap-4 md:grid-cols-2 lg:mt-48 lg:grid-cols-3 lg:gap-5 xl:gap-7">
                    {SALES_HUB_FEATURES.map((item, index) => (
                        <SalesHubCard key={item.title} item={item} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                            href="/"
                            className="contained-btn mt-3 px-8 py-3 sm:mt-10 capitalize!"
                        >
                            Start for free
                        </Link>
                </div>
            </div>
        </section>
    );
}