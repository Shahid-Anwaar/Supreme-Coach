"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMemo, useState } from "react";

type Student = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  quote: string;
  classLabel: string;
};

const students: Student[] = [
  {
    id: 1,
    name: "Andy Smith",
    role: "Founder",
    company: "StrategIQ",
    location: "London, U.K.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "Augment helped me sharpen my offer and build a stronger network with business owners who think bigger.",
    classLabel: "Class of March '23",
  },
  {
    id: 2,
    name: "Janna Lusk",
    role: "Team Manager",
    company: "Google",
    location: "Austin, USA",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "Augment teaches business with the best value proposition for busy professionals like me. I grew alongside my client's needs.",
    classLabel: "Class of March '23",
  },
  {
    id: 3,
    name: "Matt Marsh",
    role: "Founder",
    company: "Stelacasa",
    location: "Tennessee, USA",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The network I built through Augment opened doors to partnerships I would not have reached alone.",
    classLabel: "Class of April '23",
  },
  {
    id: 4,
    name: "Ted Burgess",
    role: "Director of Psychological Health",
    company: "Air National Guard",
    location: "Boise, USA",
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "This community helped me turn business learning into practical systems I could apply immediately.",
    classLabel: "Class of April '23",
  },
  {
    id: 5,
    name: "Jamaal Bethea",
    role: "Director of Brand & Media",
    company: "CUA",
    location: "Los Angeles, USA",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The mentorship and peer learning made this much more than a course. It felt like a real growth circle.",
    classLabel: "Class of April '23",
  },
  {
    id: 6,
    name: "Hester Scotton",
    role: "CFO",
    company: "Potter Clarkson",
    location: "London, U.K.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "I found clear frameworks, a supportive cohort, and business lessons I could use right away.",
    classLabel: "Class of May '23",
  },
  {
    id: 7,
    name: "Adediran Adelekun",
    role: "Founder",
    company: "NeighborTrailer",
    location: "Chicago, USA",
    image:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "Augment’s instructors simplify business concepts while the supportive community helped me overcome any challenge I faced.",
    classLabel: "Class of April '23",
  },
  {
    id: 8,
    name: "Faye Sta. Ana-Corpuz",
    role: "Country Launcher",
    company: "Taptap Send",
    location: "Dubai, UAE",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "I came for the learning, but stayed for the network. The people in this program are exceptional.",
    classLabel: "Class of May '23",
  },
  {
    id: 9,
    name: "Gillan Watt",
    role: "Founder",
    company: "Thinking Labs",
    location: "Austin, USA",
    image:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The Augment student directory itself became one of the most valuable assets of the experience.",
    classLabel: "Class of June '23",
  },
  {
    id: 10,
    name: "Jon-David Hague",
    role: "Founder",
    company: "Bountisphere",
    location: "San Francisco, USA",
    image:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The program gave me better clarity, stronger positioning, and direct access to ambitious operators.",
    classLabel: "Class of June '23",
  },
  {
    id: 11,
    name: "Mohit Patel",
    role: "Founder",
    company: "Terrifit",
    location: "Mumbai, India",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "What stood out most was how practical and founder-focused everything felt.",
    classLabel: "Class of June '23",
  },
  {
    id: 12,
    name: "Eric Luttemoser",
    role: "Founder",
    company: "Electrifying Ventures",
    location: "Miami, USA",
    image:
      "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "I left with more than business insight — I left with genuine connections.",
    classLabel: "Class of July '23",
  },
  {
    id: 13,
    name: "Charlie Canard",
    role: "Founder",
    company: "Social To Go",
    location: "New York, USA",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The peer conversations pushed my thinking further than any traditional course ever had.",
    classLabel: "Class of July '23",
  },
  {
    id: 14,
    name: "Amanda Squilla",
    role: "Chief of Staff",
    company: "H.J. Baker",
    location: "Chicago, USA",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "Augment gave me both confidence and clarity in how to communicate my business value.",
    classLabel: "Class of August '23",
  },
  {
    id: 15,
    name: "Thibault Genouille",
    role: "Project Lead",
    company: "BCG",
    location: "Paris, France",
    image:
      "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "I met people from different industries, yet the advice always felt surprisingly relevant.",
    classLabel: "Class of August '23",
  },
  {
    id: 16,
    name: "Ed Trafager",
    role: "CEO & Founder",
    company: "Greenwave Media",
    location: "Boston, USA",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The content was strong, but the caliber of the community is what made it memorable.",
    classLabel: "Class of August '23",
  },
  {
    id: 17,
    name: "Ashley Davis",
    role: "Director",
    company: "Media Ventures",
    location: "New York, USA",
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "Thanks to the flexibility of remote learning, I balanced reserve duty and becoming a parent while having a great experience.",
    classLabel: "Class of April '24",
  },
  {
    id: 18,
    name: "Paolo Viale",
    role: "Senior Manager",
    company: "PressShop",
    location: "California, USA",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The structure of the program made every lesson easy to apply and easy to remember.",
    classLabel: "Class of April '24",
  },
  {
    id: 19,
    name: "Bahrel Burhan",
    role: "Business Analyst",
    company: "Dromotics",
    location: "Malaysia",
    image:
      "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The experience was practical, high quality, and rich with smart people from across the world.",
    classLabel: "Class of May '24",
  },
  {
    id: 20,
    name: "Gerardo Ramirez",
    role: "Director",
    company: "Learning Center",
    location: "Mexico City, Mexico",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "It was one of the few programs where I felt every session added real value.",
    classLabel: "Class of May '24",
  },
  {
    id: 21,
    name: "Ilona Zablockaja",
    role: "Dental Nurse",
    company: "Independent",
    location: "London, U.K.",
    image:
      "https://images.pexels.com/photos/3777568/pexels-photo-3777568.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "I appreciated how welcoming the cohort felt from the very first session.",
    classLabel: "Class of June '24",
  },
  {
    id: 22,
    name: "Giovanni Azadi",
    role: "Senior Engineer",
    company: "Lava Construction",
    location: "Washington, USA",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The network was real, the lessons were useful, and the experience exceeded expectations.",
    classLabel: "Class of June '24",
  },
  {
    id: 23,
    name: "Tom Lambrecht",
    role: "Business Development",
    company: "Stratbright",
    location: "Ghent, Belgium",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "I joined for growth and left with a stronger support system than I expected.",
    classLabel: "Class of June '24",
  },
  {
    id: 24,
    name: "Sofia Martins",
    role: "Marketing Manager",
    company: "BrightPath Studio",
    location: "Lisbon, Portugal",
    image:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "The sessions were practical, the people were inspiring, and I left with ideas I could use immediately.",
    classLabel: "Class of July '24",
  },
];

const INITIAL_COUNT = 12;

export default function StudentDirectory() {
  const [showAll, setShowAll] = useState(false);

  const visibleStudents = useMemo(() => {
    return showAll ? students : students.slice(0, INITIAL_COUNT);
  }, [showAll]);

  return (
    <section className="bg-[#F3F4F6] py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

        <span className="section-label inline-flex w-full justify-center mx-auto text-center text-black">THE AUGMENT STUDENT DIRECTORY</span>

        <h2 className="mt-3 section-title mx-auto text-center text-black">
          Develop Your Business Network
        </h2>

        <div id="temp" className="relative mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {!showAll &&<div className="absolute min-h-96 bottom-0 w-full bg-linear-to-b from-[#F3F4F6]/5 to-[#F3F4F6]/90 z-10" />}
          {visibleStudents.map((student) => {

            return (
              <div
                key={student.id}
                className="relative group"
              >
                <QuoteCard
                  student={student}
                />
                <ProfileCard
                  student={student}
                />
              </div>
            );
          })}
        </div>

        {students.length > INITIAL_COUNT && (
          <div className={`flex relative z-20 justify-center ${showAll? " mt-8" : "-mt-12"}`} >
            <button
              type="button"
              onClick={() => {
                if (showAll) {
                  document.getElementById("temp")?.scrollIntoView({ behavior: "smooth" });
                }
                setShowAll((prev) => !prev);
              }}
              className="outlined-btn px-7 lg:px-20 capitalize!"
            >
              {showAll ? "See Less" : "See More"}
              <Icon
                icon={showAll ? "mdi:arrow-up" : "mdi:arrow-down"}
                className="ml-2 h-5 w-5"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProfileCard({
  student,
}: {
  student: Student;
}) {
  return (
    <button
      type="button"
      className="group block group-hover:hidden relative h-[220px] w-full overflow-hidden rounded-[18px] bg-black text-left transition duration-300 hover:-translate-y-[2px] sm:h-[260px] md:h-[320px] lg:h-[348px]"
    >
      <Image
        src={student.image}
        alt={student.name}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute left-4 top-4 rounded-[4px] bg-black/55 px-2 py-1.5 text-[10px] font-[700] leading-none text-white sm:text-[11px]">
        {student.location}
      </div>

      <div className="absolute right-4 top-4 text-[26px] leading-none text-white/90">
        ›
      </div>

      <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
        <h3 className="text-[18px] font-[400] leading-[1.02] tracking-[-0.03em] text-white/90 sm:text-[22px] lg:text-[24px]">
          {student.name}
        </h3>

        <p className="mt-1 text-[11px] font-[400] leading-[1.25] text-white/65 sm:text-[13px] lg:text-[16px]">
          {student.role}, {student.company}
        </p>
      </div>
    </button>
  );
}

function QuoteCard({
  student,
}: {
  student: Student;
}) {
  return (
    <div className="relative hidden group-hover:flex h-[220px] w-full flex-col rounded-[18px] border border-black/10 bg-[#f6f6f6] p-4 sm:h-[260px] sm:p-5 md:h-[320px] lg:h-[348px] lg:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[16px] font-[400] leading-none tracking-[-0.03em] text-[#1f1f1f] sm:text-[18px]">
          {student.name}
        </h3>

        <button
          type="button"
          className="text-[23px] cursor-pointer leading-none text-[#1f1f1f]"
        >
          ×
        </button>
      </div>

      <div className="mt-0.5 h-px w-full bg-black/70" />

      <div className="mt-10 flex-1">
        <p className="font-serif text-[16px] leading-[1.38] text-black/70 sm:text-[18px] lg:text-[20px] lg:leading-[1.45]">
          {student.quote}
        </p>
      </div>

      <p className="mt-4 text-[12px] font-[400] text-[#707070] sm:text-[13px] lg:text-[14px]">
        {student.classLabel}
      </p>
    </div>
  );
}