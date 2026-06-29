import BookCallSection from "@/components/home/BookCall";
import Footer from "@/components/home/Footer";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import ProductsHeroSection from "@/components/products/ProductsHero";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { Firms_FEATURES, Firms_FEATURES2, homeFaqs, solutionsFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import FAQSection from "@/components/home/FaqSection";

const views = [
  {
    title: "Your view",
    description:
      "Easily create your products, manage your business, and customize your students' learning experience in one place.",
    image:
      "/external-images/img-3f4ca6a1.webp",
  },
  {
    title: "Your student's view",
    description:
      "Intuitive, mobile-friendly, and built for your students to seamlessly access and discover your products and offers.",
    image:
      "/external-images/img-ef6a7f79.webp",
  },
  {
    title: "Your team's view",
    description:
      "Give your team a clear and organized workspace to manage content, track progress, and support your students more efficiently.",
    image:
      "/view3.png",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-white text-black relative">
      <ProductsHeroSection />
      <ViewsSection items={views} />
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
      <ProductSalesHubSection />
      <HowItWorksCard />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" />
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
      <FAQSection faqs={solutionsFaqs} />
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
