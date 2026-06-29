import BookCallSection from "@/components/home/BookCall";
import Footer from "@/components/home/Footer";
import ClientsSection from "@/components/home/clients";
import ProductsHeroSection from "@/components/products/ProductsHero";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { Firms_FEATURES, Firms_FEATURES2, homeFaqs, integrationsFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import FAQSection from "@/components/home/FaqSection";

const companyLogos = [
  {
    title: "AA",
    image: "/external-images/img-cdcf3d31.webp",
  },
  {
    title: "AK",
    image: "/external-images/img-e982166d.webp",
  },
  {
    title: "CIET",
    image: "/external-images/img-129b3243.webp",
  },
  {
    title: "Visy",
    image: "/external-images/img-c6334e3e.webp",
  },
  {
    title: "GFS",
    image: "/external-images/img-696b08de.webp",
  },
];

export default function ExploreIntegrationPage() {
  return (
    <main className="bg-white text-black relative">
      <ProductsHeroSection />
      <p className="section-description mt-0! text-center mx-auto max-w-220 text-black">
        1,000+ companies trust Supreme Coach to deliver measurable change
      </p>
      <CompanyLogoCarousel companyLogos={[...companyLogos, ...companyLogos]} />;
      <div className="py-7"></div>
      {/* <ViewsSection items={views} /> */}
      {/* <ProductsCompaniesSection /> */}
      <ProductFeaturesSection
        title="Course creation tools for higher student engagement"
        description="So we give you the tools to give them the best learning experience possible. Keep them coming back—and referring their friends, too."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}

      />
      <ProductFeaturesSection
        title="Simple to build—and keep growing"
        description="When you’re big on ambition and light on time, you need a platform that’s reliable and doesn't limit your creativity."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Firms_FEATURES2}
        wrapperClassName="bg-white"
      />
      <ProductFeaturesSection
        title="Course creation tools for higher student engagement"
        description="So we give you the tools to give them the best learning experience possible. Keep them coming back—and referring their friends, too."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}

      />
      <ProductFeaturesSection
        title="Simple to build—and keep growing"
        description="When you’re big on ambition and light on time, you need a platform that’s reliable and doesn't limit your creativity."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Firms_FEATURES2}
        wrapperClassName="bg-white"
      />
      <ProductSalesHubSection />
      {/* <HowItWorksCard /> */}
      {/* <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      /> */}
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

      <FAQSection faqs={integrationsFaqs} />
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
