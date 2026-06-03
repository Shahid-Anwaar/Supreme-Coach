type PrivacySectionType = {
  title: string;
  content: string[];
  bullets?: string[];
};

type PrivacySectionBlockProps = {
  section: PrivacySectionType;
};

function PrivacySectionBlock({ section }: PrivacySectionBlockProps) {
  return (
    <article className="space-y-3">
      <h2 className="text-[18px] font-bold uppercase leading-tight tracking-[-0.02em] text-black sm:text-[20px]">
        {section.title}
      </h2>

      <div className="space-y-3">
        {section.content.map((para, index) => (
          <p
            key={index}
            className="text-[14px] leading-[1.75] tracking-[-0.01em] text-[#333333] sm:text-[15px]"
          >
            {para}
          </p>
        ))}
      </div>

      {section.bullets && section.bullets.length > 0 && (
        <ul className="ml-5 list-disc space-y-2 pt-1 text-[14px] leading-[1.65] text-[#333333] sm:text-[15px]">
          {section.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

type PrivacySectionsListProps = {
  sections: PrivacySectionType[];
};

export default function PrivacySectionsList({
  sections,
}: PrivacySectionsListProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <PrivacySectionBlock key={index} section={section} />
      ))}
    </div>
  );
}