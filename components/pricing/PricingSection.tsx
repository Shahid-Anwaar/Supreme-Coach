"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type PricingTab = "coaches" | "forms";

type PricingPlan = {
    name: string;
    description: string;
    price: string;
    oldPrice?: string;
    badge?: string;
    buttonText: string;
    popular?: boolean;
    custom?: boolean;
    features: string[];
};

const pricingData: Record<PricingTab, PricingPlan[]> = {
    coaches: [
        {
            name: "Builder",
            description: "Essential features for building your multi-product offering.",
            price: "69,000",
            oldPrice: "89,000",
            badge: "SAVE 20,000",
            buttonText: "Start now",
            features: [
                "Everything in Starter",
                "10 products",
                "Create with AI",
                "Email integration",
                "Upsells & cart recovery",
                "Real-time support",
            ],
        },
        {
            name: "Growth",
            description: "Powerful tools for growing your revenue and audience.",
            price: "139,000",
            oldPrice: "189,000",
            badge: "POPULAR",
            buttonText: "Start now",
            popular: true,
            features: [
                "Everything in Builder",
                "50 products",
                "Advanced dashboard",
                "Affiliate program",
                "Custom admin permissions",
                "Priority support",
            ],
        },
        {
            name: "Custom",
            description:
                "For high-volume coaching businesses that need custom tools and premium support.",
            price: "Custom",
            buttonText: "Contact sales",
            custom: true,
            features: [
                "Dedicated success manager",
                "Bulk sales features",
                "Flexible admin seats",
                "Sandbox setup for testing",
                "Priority SLA-based support",
                "Migration assistance",
            ],
        },
    ],

    forms: [
        {
            name: "Core",
            description: "Centralize and launch your business forms and workflows.",
            price: "600,000",
            buttonText: "Start now",
            features: [
                "Form management",
                "5 admin seats",
                "250 users",
                "25 forms",
                "2 TB storage",
                "Email support",
            ],
        },
        {
            name: "Pro",
            description: "Expand your forms system with advanced management and SSO.",
            price: "1,200,000",
            buttonText: "Start now",
            popular: true,
            features: [
                "Everything in Core",
                "Single Sign-On",
                "Remove branding",
                "15 admin seats",
                "1,000 users",
                "Standard support",
            ],
        },
        {
            name: "Custom",
            description:
                "Work with our team to create a customized forms plan for your organization.",
            price: "Custom",
            buttonText: "Contact sales",
            custom: true,
            features: [
                "Customizable admin seats",
                "Customizable user seats",
                "Custom form limits",
                "Secure Single Sign-On",
                "Advanced analytics",
                "Priority support",
            ],
        },
    ],
};

const tabs: {
    label: string;
    value: PricingTab;
    icon: string;
}[] = [
        {
            label: "For Coaches",
            value: "coaches",
            icon: "mdi:account",
        },
        {
            label: "For Firms",
            value: "forms",
            icon: "mdi:file-document-outline",
        },
    ];

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<PricingTab>("coaches");

    const plans = pricingData[activeTab];

    return (
        <section className="section-spacing pb-5">
            <div className="section-container">
                <div className="section-title-wrap">
                    <h2 className="section-title stylish-family text-[44px] md:text-[58px]">
                        Plans and pricing
                    </h2>

                    <div className="mt-8 inline-flex rounded-full border border-black bg-white p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.value}
                                type="button"
                                onClick={() => setActiveTab(tab.value)}
                                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-bold uppercase transition ${activeTab === tab.value
                                        ? "bg-black text-white"
                                        : "text-black hover:bg-gray-100"
                                    }`}
                            >
                                <Icon icon={tab.icon} className="h-4 w-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <p className="paragraph-text mx-auto mt-8 max-w-[760px]">
                        One-time plans built to launch, sell, and scale your online
                        business.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`section-card relative flex min-h-[560px] flex-col border p-7 ${plan.popular ? "border-secondary-800" : "border-black/10"
                                } ${plan.custom ? "bg-gray-50" : "bg-white"}`}
                        >
                            {plan.popular && (
                                <div className="absolute left-0 top-0 w-full rounded-t-3xl bg-black py-2 text-center text-[12px] font-bold uppercase text-white">
                                    Popular
                                </div>
                            )}

                            <div className={plan.popular ? "pt-8" : ""}>
                                {plan.badge && !plan.popular && (
                                    <span className="mb-4 inline-block rounded bg-secondary-50 px-3 py-1 text-[12px] font-bold uppercase text-black">
                                        {plan.badge}
                                    </span>
                                )}

                                {plan.custom && (
                                    <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-wide text-black">
                                        Custom Plan
                                    </span>
                                )}

                                <h3 className="text-[28px] font-bold leading-tight text-black">
                                    {plan.name}
                                </h3>

                                <p className="mt-4 min-h-[54px] text-[15px] leading-[1.35] text-black">
                                    {plan.description}
                                </p>

                                <div className="mt-6">
                                    {plan.oldPrice && (
                                        <p className="text-[22px] text-black/40 line-through">
                                            £{plan.oldPrice}
                                        </p>
                                    )}

                                    {plan.price === "Custom" ? (
                                        <p className="mt-2 text-[42px] font-bold leading-none text-black">
                                            Custom
                                        </p>
                                    ) : (
                                        <p className="mt-2 text-[42px] font-bold leading-none text-black md:text-[48px]">
                                            £{plan.price}
                                        </p>
                                    )}

                                    {plan.price !== "Custom" && (
                                        <p className="mt-3 text-[14px] text-black">
                                            One-time payment
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    className={`mt-6 w-full ${plan.custom ? "closed-btn"
                                            : plan.popular
                                                ? "contained-btn"
                                                : "outlined-btn hover:bg-primary"
                                        }`}
                                >
                                    {plan.buttonText}
                                </button>

                                <ul className="mt-8 space-y-4">
                                    {plan.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-start gap-2 text-[14px] leading-[1.35] text-black"
                                        >
                                            <Icon
                                                icon="mdi:check"
                                                className="mt-[2px] h-4 w-4 shrink-0 text-black"
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {!plan.custom && (
                                <button
                                    type="button"
                                    className="mt-auto pt-10 text-[14px] font-medium text-secondary-800 underline"
                                >
                                    Compare all features
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}