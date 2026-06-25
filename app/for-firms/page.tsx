import BookCallSection from "@/components/home/BookCall";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { COURSE_FEATURES, COURSE_FEATURES2, teamFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import FAQSection from "@/components/home/FaqSection";
import AugmentHeroSection from "@/components/home/HeroSection";
import FirmHeroSection from "@/components/for-firms/FirmHero";
import FeaturesSection from "@/components/home/FacultySection";

const views = [
  {
    title: "Your view",
    description:
      "Easily create your products, manage your business, and customize your students' learning experience in one place.",
    image:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47a1edeb440ab80fdf439_0eb0b462897381c9122d4546e00aca77_ui-main-hero-tab-2.webp",
  },
  {
    title: "Your student's view",
    description:
      "Intuitive, mobile-friendly, and built for your students to seamlessly access and discover your products and offers.",
    image:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47a1d7727e0f7bd1ac19e_8b04a4deab039f00b369cedcd9295a73_ui-main-hero-tab-1.webp",
  },
  {
    title: "Your team's view",
    description:
      "Give your team a clear and organized workspace to manage content, track progress, and support your students more efficiently.",
    image:
      "/view3.png",
  },
];

const companyLogos = [
  {
    title: "AA",
    image: "https://www.gogetta.com/home/logo-aa.svg",
  },
  {
    title: "AK",
    image: "https://www.gogetta.com/home/logo-ak.svg",
  },
  {
    title: "CIET",
    image: "https://www.gogetta.com/home/logo-ciet.svg",
  },
  {
    title: "Visy",
    image: "https://www.gogetta.com/home/logo-visy.svg",
  },
  {
    title: "GFS",
    image: "https://www.gogetta.com/home/logo-gfs.svg",
  },
];


export default function FirmsPage() {
  return (
    <main className="bg-white text-black relative">
      <FirmHeroSection />
      {/* <ProductsHeroSection /> */}
      {/* <p className="section-description mt-0! text-center mx-auto max-w-220 text-black">
        1,000+ companies trust Supreme Coach to deliver measurable change
      </p> */}
      <CompanyLogoCarousel companyLogos={[...companyLogos, ...companyLogos]} />;
      <div className="py-7"></div>
      <ViewsSection items={views} />
      <FeaturesSection />
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
      <ProductSalesHubSection />
      <HowItWorksCard />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" isShowCompanies={true} />
      {/* <ProductTools /> */}
      {/* <ProductSold /> */}
      {/* <FAQSection faqs={FAQS} /> */}



      {/* <FeaturedInSection />
            
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


      <FAQSection faqs={teamFaqs} />
      {/* <BookCallSection
              title="Stand out with the Supreme Coach LinkedIn Certificate"
              btnText="Enroll Now"
              subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
              topClasses="bg-[#f3f4f6]"
              bottomClasses="bg-[#000000]"
              imgSrc="/certificate.webp"
            /> */}
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
