import BookCallSection from "@/components/home/BookCall";
import FeaturesSection from "@/components/home/FacultySection";
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
import { companyLogos, homeFaqs } from "@/data/data";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";

export default function Home() {
  return (
    <main className="bg-white text-black relative">
      <AugmentHeroSection />
      <div className="w-full bg-black pb-7">
        <div className="max-w-full bg-white py-4 mx-auto">
          <div className="mx-auto bg-white px-0">
            <CompanyLogoCarousel
              companyLogos={[...companyLogos, ...companyLogos]}
              wrapperClassName="min-h-0 bg-white"
            />
          </div>
        </div>
      </div>
      <FeaturedInSection />
      <ViewsSection />
      <FeaturesSection />
      <EmblaCarousel />
      <HowItWorksCard classes="pt-0" />
      <IntegrationsSection
        title="Your stack, connected. Configured on delivery not figured out later."
        description="Every integration Supreme Coach supports is set up, tested, and live before we hand over the keys. No documentation to follow. No API keys to paste. No hoping two platforms will finally sync. You open your business and everything already works."
      />
      <ClientsSection title="Trusted by growing companies" isShowCompanies={true} />
      <BookCallSection
        title="Book a Discovery Call With Our Team"
        icon="solar:phone-linear"
        subTitle="Tell us where your business is right now and where you're trying to take it. We'll show you exactly what Supreme Coach looks like in practice and give you an honest answer on whether it's the right fit."
                topClasses="bg-[#f3f4f6]"
                bottomClasses="bg-[#f3f4f6]"
      />
      <FAQSection faqs={homeFaqs} />
      <BookCallSection
        title="Your Business. Your Licence. Your Infrastructure For Life."
        btnText="Book a Discovery Call"
        subTitle="Every Supreme Coach client receives a personal lifetime licence not a subscription, not a rental, not access that expires when you stop paying."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#000000]"
        imgSrc="/certificate.webp"
      />
      <MissionComparisonSection />
      {/* <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Supreme Coach for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#000000]"
        bottomClasses="bg-[#000000]"
      /> */}


      {/* <TeaserVideoSection /> */}
      {/* <WhyAugmentSection /> */}
      {/* <StudentTestimonialsSection /> */}
      {/* <BookCallSection
        title="Stand out with the Supreme Coach LinkedIn Certificate"
        btnText="Enroll Now"
        subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#000000]"
        imgSrc="/certificate.webp"
      />
      <MissionComparisonSection />
      
      <FAQSection /> */}
    </main>
  );
}
