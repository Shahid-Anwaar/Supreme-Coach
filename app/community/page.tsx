import BookCallSection from "@/components/home/BookCall";
import Footer from "@/components/home/Footer";
import FAQSection from "@/components/home/FaqSection";
import { coachesFaqs } from "@/data/data";
import CommunityHero from "@/components/community/CommunityHero";
import StudentsTestmonials from "@/components/community/StudentsTestmonials";
import StudentDirectory from "@/components/community/StudentDirectory";
import StudentsCompaniesBuilt from "@/components/community/StudentCompanies";
import InPersonEventsSection from "@/components/community/InPersonEvents";


export default function CommunityPage() {
    return (
        <main className="bg-white text-black relative">
            <CommunityHero />
            <StudentsTestmonials />
            <StudentDirectory />
            <StudentsCompaniesBuilt />
            <InPersonEventsSection />
            <BookCallSection
                title="15-Day Money-Back Guarantee"
                btnText="Enroll Now"
                subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
                topClasses="bg-[#f3f4f6]"
                bottomClasses="bg-[#f3f4f6]"
            />
            <FAQSection faqs={coachesFaqs} />
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
