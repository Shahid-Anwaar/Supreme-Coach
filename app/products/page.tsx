import BookCallSection from "@/components/home/BookCall";
import FeaturesSection from "@/components/home/FacultySection";
import FAQSection from "@/components/home/FaqSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import ProductsHeroSection from "@/components/products/ProductsHero";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { companyLogos, COURSE_FEATURES, COURSE_FEATURES2, productFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import ProductTools from "@/components/products/ProductTools";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import { createMetadata } from "@/lib/seo";
import WhatToInclude from "@/components/products/WhatInclude";

export const metadata = createMetadata({
  title: "What We Build | Supreme Coach — Custom Coaching Business Infrastructure",
  description: "Supreme Coach builds 8 custom coaching infrastructure components — website, CRM, client portal, programme delivery, funnels, AI, community, and payments — deployed on your own servers, owned by you.",
  keywords: [
    "done-for-you coaching business infrastructure", 
    "coaching website design service UK", 
    "custom coaching platform build", 
    "coaching CRM setup service", 
    "coaching business setup", 
    "coaching programme delivery system"
  ],
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main className="bg-white text-black relative">
      <ProductsHeroSection />
      <div className="w-full bg-white pb-7">
        <div className="max-w-full bg-white py-0 mx-auto">
          <div className="mx-auto bg-white px-0">
            <CompanyLogoCarousel
              companyLogos={[...companyLogos, ...companyLogos]}
              wrapperClassName="min-h-0 bg-white"
            />
          </div>
        </div>
      </div>
      {/* <ProductsCompaniesSection /> */}
      <ProductFeaturesSection
        title="Course creation tools for higher student engagement"
        description="So we give you the tools to give them the best learning experience possible. Keep them coming back—and referring their friends, too."
        imgShown="left"
        imgSrc="https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e3117618576ae8098abc7b_b98cb8e56c799a3342711e81f7fb0fce_courses-quiz-1.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={COURSE_FEATURES}

      />
      <ProductFeaturesSection
        title="Simple to build—and keep growing"
        description="When you’re big on ambition and light on time, you need a platform that’s reliable and doesn't limit your creativity."
        imgShown="right"
        imgSrc="https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e31176489d43d06d91c2a4_de40b7dd8f24f29c9f0a8704b2f53a34_courses-quiz-2.webp"
        features={COURSE_FEATURES2}
        wrapperClassName="bg-white"
      />
      <FeaturesSection isShowBtn={false} />
      <ProductSalesHubSection />
      <HowItWorksCard />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" />
      <ProductTools />
      <WhatToInclude />
      {/* <ProductSold /> */}
      <FAQSection faqs={productFaqs} />

      {/* <FeaturedInSection />
            <ViewsSection />
            <FacultySection />
            <EmblaCarousel /> */}


      {/* <ClientsSection /> */}
     

      {/* <BookCallSection
                title="Stand out with the Supreme Coach LinkedIn Certificate"
                btnText="Enroll Now"
                subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
                topClasses="bg-[#f3f4f6]"
                bottomClasses="bg-[#000000]"
                imgSrc="/certificate.webp"
            />
            <MissionComparisonSection /> */}
      <BookCallSection
        title="Book a Demo with a Program Advisor"
        icon="solar:phone-linear"
        subTitle="Discuss your business goals and find out if Supreme Coach is a fit for you."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-black"
      />
    </main>
  );
}
