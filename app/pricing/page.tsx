import BookCallSection from "@/components/home/BookCall";
import FacultySection from "@/components/home/FacultySection";
import FAQSection from "@/components/home/FaqSection";
import FeaturedInSection from "@/components/home/FeaturedIn";
import Footer from "@/components/home/Footer";
import MissionComparisonSection from "@/components/home/MissionComparison";
import HeaderSection from "@/components/home/Header";
import TeaserVideoSection from "@/components/home/TeaserVideo";
import StudentTestimonialsSection from "@/components/home/TestmonialSection";
import WhyAugmentSection from "@/components/home/WhyAugment";
import Chats from "@/components/home/Chats";
import EmblaCarousel from "@/components/home/EmblaCarosal";
import AugmentHeroSection from "@/components/home/HeroSection";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import CoursesCommunity from "@/components/home/CoursesCommunity";
import { companyLogos, homeFaqs, pricingFaqs } from "@/data/data";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import ProductTools from "@/components/products/ProductTools";
import PricingSection from "@/components/pricing/PricingSection";
import TrustAndSecuritySection from "@/components/pricing/TrustAndSecurity";

export default function PricingPage() {
  return (
    <main className="bg-white text-black relative">
      <PricingSection />
      <TrustAndSecuritySection />
      <ClientsSection title="Trusted by growing companies" isShowCompanies={true} />
      <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#f3f4f6]"
      />
      <ProductTools />
      <FAQSection faqs={pricingFaqs} />
    </main>
  );
}
