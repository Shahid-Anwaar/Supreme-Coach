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
      <FacultySection />
      <EmblaCarousel />
      <HowItWorksCard />
      <IntegrationsSection
        title="Your stack, supercharged"
        description="Augment flexes to fit your workflow, integrating with the apps you love while powering them into a system for growth."
      />
      <ClientsSection title="Trusted by growing companies" isShowCompanies={true} />
      <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#f3f4f6]"
      />
      <FAQSection faqs={homeFaqs} />
      <BookCallSection
        title="Stand out with the Augment LinkedIn Certificate"
        btnText="Enroll Now"
        subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#000000]"
        imgSrc="/certificate.webp"
      />
      <MissionComparisonSection />
      {/* <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#000000]"
        bottomClasses="bg-[#000000]"
      /> */}
      

      {/* <TeaserVideoSection /> */}
      {/* <WhyAugmentSection /> */}
      {/* <StudentTestimonialsSection /> */}
      {/* <BookCallSection
        title="Stand out with the Augment LinkedIn Certificate"
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
