import BookCallSection from "@/components/home/BookCall";
import FacultySection from "@/components/home/FacultySection";
import FAQSection from "@/components/home/FaqSection";
import FeaturedInSection from "@/components/home/FeaturedIn";
import Footer from "@/components/home/Footer";
import MissionComparisonSection from "@/components/home/MissionComparison";
import EmblaCarousel from "@/components/home/EmblaCarosal";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import CoursesCommunity from "@/components/home/CoursesCommunity";
import ProductsHeroSection from "@/components/products/ProductsHero";
import ProductsCompaniesSection from "@/components/products/ProductCompanies";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { COURSE_FEATURES, COURSE_FEATURES2, productsFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import ProductStories from "@/components/products/ProductStories";
import ProductTools from "@/components/products/ProductTools";
import ProductSold from "@/components/products/ProductSold";

export default function ProductsPage() {
  return (
    <main className="bg-white text-black relative">
      <ProductsHeroSection />
      <ProductsCompaniesSection />
      <ProductFeaturesSection
        title="Course creation tools for higher student engagement"
        description="So we give you the tools to give them the best learning experience possible. Keep them coming back—and referring their friends, too."
        imgShown="left"
        imgSrc="https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e3117618576ae8098abc7b_b98cb8e56c799a3342711e81f7fb0fce_courses-quiz-1.webp"
        imgAlt="Augment course onboarding and quiz preview"
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
      <ProductSalesHubSection />
      <HowItWorksCard />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Augment success stories write themselves" />
      <ProductTools />
      {/* <ProductSold /> */}
      <FAQSection faqs={productsFaqs} />

      {/* <FeaturedInSection />
            <ViewsSection />
            <FacultySection />
            <EmblaCarousel /> */}


      {/* <ClientsSection /> */}
     

      {/* <BookCallSection
                title="Stand out with the Augment LinkedIn Certificate"
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
        subTitle="Discuss your business goals and find out if Augment is a fit for you."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-black"
      />
      <Footer />
    </main>
  );
}
