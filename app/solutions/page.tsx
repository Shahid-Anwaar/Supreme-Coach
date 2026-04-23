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
import { COURSE_FEATURES, COURSE_FEATURES2 } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import ProductStories from "@/components/products/ProductStories";
import ProductTools from "@/components/products/ProductTools";
import ProductSold from "@/components/products/ProductSold";

const FAQS = [
  {
    question: "Why should I sell my courses on Teachable?",
    answer:
      "Creating and selling online courses on Teachable gives you access to both the most powerful selling tools and the most flexible course builder. You control your content. You control how you get paid. And you control the learning environment for your audience.",
  },
  {
    question: "How do I make a course on Teachable?",
    answer:
      "It’s easy (and free) to get started with a seven-day free trial. Once logged in, you’ll be prompted to create a product. Select course. From there, you can start building manually. Or, use our AI course starter to draft your curriculum, lesson content, and sales page all at once.",
  },
  {
    question: "Can I do live courses on Teachable?",
    answer:
      "While Teachable is built for self-paced courses by default, it’s easy enough to host live courses using third-party embeds, including YouTube, Vimeo, and Zoom. You can also create a cohort-based learning experience using drip content.",
  },
  {
    question: "Do online courses make money?",
    answer:
      "Absolutely—in fact, they’re the perfect way to earn ongoing revenue, without ongoing work. Online course creation on Teachable is designed with longevity in mind, meaning once you do the up front work of creating it, you can sell it on a continuous basis with little maintenance. Whatever your expertise or your business, you can translate it into an online course that people will pay for.",
  },
  {
    question: "How much does Teachable cost per month?",
    answer:
      "Your first seven days are free. After that, we have plans starting at $29 per month, each designed to fit your unique business needs. Browse plans and pricing here.",
  },
  {
    question: "How many courses can I have on Teachable?",
    answer:
      "Believe it or not, on any Teachable plan, you can create an unlimited number of courses. From there, you can sell up to one course on a Starter plan, five courses on a Builder plan, 25 courses on a Growth plan, and 100 courses on an Advanced plan. For more courses, please contact sales.",
  },
  {
    question: "What else can I create on Teachable?",
    answer:
      "You can build and sell your entire suite of learning products on Teachable, including online coaching sessions, how-to guides, interactive templates, a community space, and more.",
  },
];

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
        imgSrc="https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e3117618576ae8098abc7b_b98cb8e56c799a3342711e81f7fb0fce_courses-quiz-1.webp"
        imgAlt="Teachable course onboarding and quiz preview"
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
      {/* <ProductStories /> */}
      <ClientsSection title="Teachable success stories write themselves" />
      {/* <ProductTools /> */}
      {/* <ProductSold /> */}
      {/* <FAQSection faqs={FAQS} /> */}



      {/* <FeaturedInSection />
            
            <FacultySection />
            <EmblaCarousel /> */}


      {/* <ClientsSection /> */}
      {/* <BookCallSection
                title="15-Day Money-Back Guarantee"
                btnText="Enroll Now"
                subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
                topClasses="bg-[#f3f4f6]"
                bottomClasses="bg-[#f3f4f6]"
            /> */}

      {/* <BookCallSection
                title="Stand out with the Augment LinkedIn Certificate"
                btnText="Enroll Now"
                subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
                topClasses="bg-[#f3f4f6]"
                bottomClasses="bg-[#000000]"
                imgSrc="/certificate.webp"
            />
            <MissionComparisonSection /> */}
      {/* <BookCallSection
                title="15-Day Money-Back Guarantee"
                btnText="Enroll Now"
                subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
                topClasses="bg-[#000000]"
                bottomClasses="bg-[#000000]"
            /> */}
      {/* <CoursesCommunity /> */}
      <BookCallSection
        title="Book a Call with a Program Advisor"
        icon="solar:phone-linear"
        subTitle="Discuss your business goals and find out if Augment is a fit for you."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-black"
      />
      <Footer />
    </main>
  );
}
