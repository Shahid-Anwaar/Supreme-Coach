import FAQSection from "@/components/home/FaqSection";
import ClientsSection from "@/components/home/clients";
import { pricingFaqs } from "@/data/data";
import ProductTools from "@/components/products/ProductTools";
import PricingSection from "@/components/pricing/PricingSection";
import TrustAndSecuritySection from "@/components/pricing/TrustAndSecurity";
import { createMetadata } from "@/lib/seo";
import WhatToInclude from "@/components/products/WhatInclude";

export const metadata = createMetadata({
  title:
    "Project Investment | Supreme Coach — Custom Coaching Infrastructure. No Monthly Fees.",
  description:
    "Supreme Coach pricing: Basic £7,000 · Growth £10,000 · Business £20,000. One-time custom build project. Deployed on your servers. You own everything. No monthly fees, no subscriptions, ever.",
  keywords: [
    "coaching business setup cost",
    "coaching website design pricing",
    "done-for-you coaching platform cost",
    "coaching infrastructure build price",
    "coaching business setup service UK",
  ],
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="bg-white text-black relative">
      <PricingSection />
      <TrustAndSecuritySection />
      <ProductTools />
      <WhatToInclude />
      <ClientsSection title="Supreme Coach success stories write themselves" isShowCompanies={true} />
      <FAQSection faqs={pricingFaqs} />
    </main>
  );
}
