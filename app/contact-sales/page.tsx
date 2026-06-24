
import ContactClientSection from "@/components/contact/ContactClient";
import FAQSection from "@/components/home/FaqSection";
import { contactFaqs } from "@/data/data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
    title: "Contact Supreme Coach | Commission Your Custom Coaching Infrastructure",
    description:
        "Contact the Supreme Coach team to discuss your custom coaching business build. Individual coaches, coaching firms, and enterprise organisations — we will scope the right project for you.",
    keywords: [
        "contact Supreme Coach coaching build",
        "coaching website build enquiry",
        "coaching business setup contact",
        "coaching infrastructure project",
    ],
    path: "/contact-sales",
});

export default function CoachesPage() {
    return (
        <main className="bg-white text-black relative">
            <ContactClientSection />
            <FAQSection faqs={contactFaqs} />
        </main>
    );
}
