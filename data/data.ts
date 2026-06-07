export type NavLink = {
  label: string;
  href: string;
};

export type WhyCard = {
  title: string;
  text: string;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
};

export type ComparisonRow = [string, string, string];

export type ComparisonItem = {
  text: string;
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  title?: string;
  avatar: string;
  text: string;
  linkedin?: boolean;
  schoolLink?: string;
};

export type WhyAugmentSlide = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
  layout: "right-composite" | "left-dashboard" | "right-community";
};

export type InstructorItem = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  logoIcon?: string;
  badge?: string;
};

export type ReviewItem = {
  id: number;
  quote: string;
  name: string;
  avatar: string;
  role: string;
};

export type FeatureItem = {
  label: string;
  icon: string;
};

export const FEATURES: FeatureItem[] = [
  { label: "Online", icon: "ph:play-circle-fill" },
  { label: "Bite-Sized Lessons", icon: "ph:clock-fill" },
  { label: "Certificate", icon: "ph:certificate-fill" },
];

export type HeroSlide = {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  video?: string;
  description: string;
};

export type HowItWorksCardItem = {
  id: number;
  step: string;
  label: string;
  title: string;
  description: string;
  image: string;
  points: {
    icon: string;
    text: string;
  }[];
};

export type Student = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  quote: string;
  classLabel: string;
};

export const students: Student[] = [
  {
    id: 1,
    name: "Andy Smith",
    role: "Founder",
    company: "StrategIQ",
    location: "London, U.K.",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=900",
    quote:
      "Supreme Coach helped me sharpen my offer and build a stronger network with business owners who think bigger.",
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
      "Supreme Coach teaches business with the best value proposition for busy professionals like me. I grew alongside my client's needs.",
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
      "The network I built through Supreme Coach opened doors to partnerships I would not have reached alone.",
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
      "Supreme Coach’s instructors simplify business concepts while the supportive community helped me overcome any challenge I faced.",
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
      "The Supreme Coach student directory itself became one of the most valuable assets of the experience.",
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
      "Supreme Coach gave me both confidence and clarity in how to communicate my business value.",
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

export const ProductStoriesTestimonials = [
  {
    id: 1,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e472413569b297952cca46_913afd2f27884db7e271d63afae0dc26_AnnaGeiger.webp",
    name: "Anna Geiger",
    role: "The Science of Reading",
    title:   "Revenue Engine",
    text: "I’ve been using Supreme Coach since 2017, and it continues to be a major revenue generator for my business. It’s easy to create and upload content, and I never have to worry about tax compliance or payment processing. I’ve tried other platforms—Supreme Coach is hands down the best for me and my students.",
    schoolLink: "#",
  },
  {
    id: 2,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47241731fcd597b0e34c7_5eac61fb053a8becdbd0a29455c59bb5_LeilaGharani_xel.webp",
    name: "Leila Gharani",
    role: "XelPlus Academy",
    title: "Global Reach",
    text: "With students from 188 countries, tax compliance could have been a nightmare. Supreme Coach handles it all, so instead of drowning in admin work, we can focus on helping our members upgrade their data skills. The platform makes our global reach possible.",
    schoolLink: "#",
  },
  {
    id: 3,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e696146624fd498ea179d8_fd7a70083fe8fe915699fc2085035a53_ErinBooth.webp",
    name: "Erin Booth",
    role: "Virtual Assistant Coach",
    title: "Get Full Control",
    text: "You should never have anyone dictating the prices you charge for your content. With Supreme Coach, you get full control—you can talk to your students, match their learning styles, and build real relationships instead of going through third parties.",
    schoolLink: "#",
  },
  {
    id: 4,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e472416ae55881ceb0b6ab_a2de2377ce4b09a8b5f8b765899567ca_RazvanCiobanu.webp",
    name: "Razvan Ciobanu",
    role: "Voxyde",
    title: "Peace of Mind",
    text: "Supreme Coach is consistently monitored and delivers excellent uptime. As an instructor, that peace of mind is invaluable. On top of that, Supreme Coach’s built-in tax handling has been a huge advantage, freeing me up to focus more on creating content and supporting my students.",
    schoolLink: "#",
  },
  {
    id: 5,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e696151b1e1847cbe8c324_6f744f022c2b792ccc48c4e542526f9f_FrancescoCositore.webp",
    name: "Francesco Cositore",
    role: "Vaporetto Italiano",
    title: "Has Been Essential",
    text: "Supreme Coach has been essential for the growth of my business and for reaching thousands of students all over the world. It automatically takes care of payments, taxes, and enrollments, freeing me from administrative tasks so I can fully focus on the creative side of my job.",
    schoolLink: "#",
  },
  {
    id: 6,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e472412b52873214f161ed_af941bac35e86470a5fc50c0e4d11805_DanGeorge.webp",
    name: "Dan George",
    role: "FlightInsight",
    title: "10,000+ Students",
    text: "Supreme Coach gave me the structure to scale beyond the classroom. What started as a few dozen students has grown into 10,000+ pilots worldwide. My courses now run 24/7, serving pilots in every time zone, while I focus on teaching and Supreme Coach handles the technology.",
    schoolLink: "#",
  },
  {
    id: 7,
    avatar:
      "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e472411eac276ecb2a885d_acd3419cdc23d64a536b9362a0f77c55_Headshot.webp",
    name: "Huzan R & Nicoleta S",
    role: "Speak Norsk",
    title: "Made Simple",
    text: "We realized we couldn’t do everything on our own—teaching, managing operations, and course delivery. That’s when Supreme Coach came in. The platform made it simple to create and deliver our programs, and even let us offer a free course so students could get comfortable before enrolling.",
    schoolLink: "#",
  },
];

export const companyLogos = [
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

export const HOW_IT_WORKS_CARDS: HowItWorksCardItem[] = [
  {
    id: 1,
    step: "01",
    label: "SET GOALS",
    title: "We don't begin with a job ad, we begin with your business.",
    description:
      "We'll unpack your hiring challenges, skill gaps and goals, then build a bespoke recruitment marketing plan designed to reach the exact people you need.",
    image: "/hiw-img2.webp",
    points: [
      {
        icon: "lucide:search",
        text: "Market mapping to understand the real talent pool",
      },
      {
        icon: "lucide:target",
        text: "Goal-oriented planning that works back from the outcome you want",
      },
      {
        icon: "lucide:play",
        text: "Clear timeline and metrics so you know what success will look like",
      },
    ],
  },
  {
    id: 2,
    step: "02",
    label: "BUILD CAMPAIGNS",
    title: "We don't just list jobs, we launch them.",
    description:
      "We design custom campaigns around your brand so your business is impossible to ignore. How this looks is unique for every business and their goals but includes:",
    image: "/hiw-img1.webp",
    points: [
      {
        icon: "lucide:image",
        text: "Creative content: multimedia creative that bring your workplace & roles alive.",
      },
      {
        icon: "lucide:radio-tower",
        text: "Connect with top candidates via digital, social, OOH, and radio channels.",
      },
      {
        icon: "lucide:users",
        text: "Smart strategic placement that gets in front of candidates, wherever they are.",
      },
    ],
  },
  {
    id: 3,
    step: "03",
    label: "FIND TALENT",
    title: "We get the hard-to-getters.",
    description:
      "Using a mix of virtual shoulder tapping and personal outreach, we find and engage high-quality candidates, including those not actively job hunting.",
    image: "/hiw-img3.webp",
    points: [
      {
        icon: "lucide:hand",
        text: "Digital shoulder tapping through clever advertising",
      },
      {
        icon: "lucide:shield-check",
        text: "Direct, personal outreach to high-value candidates",
      },
      {
        icon: "lucide:brain",
        text: "Smart targeting to avoid wasting time in the wrong talent pools",
      },
    ],
  },
  {
    id: 4,
    step: "04",
    label: "HUMAN SCREENING",
    title: "Your shortcut to the shortlist.",
    description:
      "Every candidate is personally vetted by experienced recruiters, ensuring shortlists are built for fit and readiness, not just keyword matches. The result: faster hires, fewer wasted interviews, and stronger long-term retention.",
    image: "/hiw-img4.webp",
    points: [
      {
        icon: "lucide:sparkles",
        text: "Every candidate personally reviewed by experienced recruiters",
      },
      {
        icon: "lucide:clipboard-check",
        text: "Shortlists built for genuine fit and job readiness, not algorithms",
      },
      {
        icon: "lucide:clock-3",
        text: "Quicker hires, fewer time-wasters, and stronger long-term retention",
      },
    ],
  },
  {
    id: 5,
    step: "05",
    label: "SUPPORT",
    title: "With you from search to success.",
    description:
      "When your campaign goes live, we're hands-on until the right person signs.",
    image: "/hiw-img5.webp",
    points: [
      {
        icon: "lucide:hourglass",
        text: "Real-time campaign optimisation",
      },
      {
        icon: "lucide:clipboard-list",
        text: "Transparent reporting on reach and candidate quality",
      },
      {
        icon: "lucide:user-round-plus",
        text: "Support closing the offer so you don't lose great talent late in the game",
      },
    ],
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    name: "Jimmy Wales",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F3a370c96d97b4942b42ad70f3382c000",
    role: "Founder of Wikipedia",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F234946f583ab4a7e98dd9bba047775d2",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F52f0105d32714e168307b5da0a27b4fc%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=52f0105d32714e168307b5da0a27b4fc&alt=media&optimized=true",
    description:
      "Learn how Jimmy Wales turned a simple idea into one of the world’s most trusted knowledge platforms and built a community-driven product at global scale.",
  },
  {
    id: 2,
    name: "Georgia Lewis",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fad8c245895824a339ee40830d041c26c",
    role: "Former Prompt Engineer at Meta",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7835a8f882ef450b84d1c16324fc8d75",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7cfe202a016644adb4552d366932c01c%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=7cfe202a016644adb4552d366932c01c&alt=media&optimized=true",
    description:
      "Discover practical lessons on AI, prompt thinking, and how founders can use emerging technology to make smarter product and business decisions.",
  },
  {
    id: 3,
    name: "Steve Chen",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fa2bab8fba2434d09b01c553d115e3fbe",
    role: "Founder of Youtube",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F47dbb563aed44486b28b4631c8833235",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F509807a034044fd0b3aff3c3a6c3266a%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=509807a034044fd0b3aff3c3a6c3266a&alt=media&optimized=true",
    description:
      "Learn from Steve Chen’s journey of building YouTube, understanding user behavior, scaling fast, and creating a product people use every day.",
  },
  {
    id: 4,
    name: "Zack Kass",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F56f4f4ee156f43b3847270e2669fd324",
    role: "Former Head of Go-To-Market at OpenAI",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F513af209523041388c737f66336e62e5",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7c887e35c3a54751a8b7d63c2eb59f28%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=7c887e35c3a54751a8b7d63c2eb59f28&alt=media&optimized=true",
    description:
      "Get go-to-market insights from Zack Kass on positioning, adoption, AI opportunity, and how founders can bring powerful products to the market.",
  },
  {
    id: 5,
    name: "Ann Hiatt",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fc33f8dc7073c4e65ad88bb99143e721a",
    role: "Chief of Staff",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F03323b1302d94d50a9bba04594d829ac",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fbc1c38b516ad4255bfb4cbfd2e6a0627%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=bc1c38b516ad4255bfb4cbfd2e6a0627&alt=media&optimized=true",
    description:
      "Understand leadership, execution, and high-performance team habits from Ann Hiatt’s experience working close to some of the world’s top leaders.",
  },
  {
    id: 6,
    name: "Morin Oluwole",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fad8c245895824a339ee40830d041c26c",
    role: "Ex-Director at Meta",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F2e7ee683820648d9ab0ded82e21402de",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F4d37000288bc4898afba44b5568d0d7c%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=4d37000288bc4898afba44b5568d0d7c&alt=media&optimized=true",
    description:
      "Learn how global product, partnerships, and growth teams think about scale, market expansion, and building strong business relationships.",
  },
  {
    id: 7,
    name: "Chris Barton",
    company: "",
    role: "Founder of Shazam",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fb4bfaa5158ac467ebda01fc7802240d8",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F92eef86c59e44cb9bf88943ee46097eb%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=92eef86c59e44cb9bf88943ee46097eb&alt=media&optimized=true",
    description:
      "Explore how Chris Barton built Shazam by solving a real user problem, staying persistent, and turning a complex idea into a simple product experience.",
  },
  {
    id: 8,
    name: "Caen Contee",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F6a1f6df1d2d44b5fb5212174b1afcc41",
    role: "Founder of Lime",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fc115f60499c24833971a20af6d253375",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F734172ad92114e84ab3a068f9722cdfa%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=734172ad92114e84ab3a068f9722cdfa&alt=media&optimized=true",
    description:
      "Get founder lessons on building mobility products, scaling operations, understanding cities, and creating a business that solves everyday problems.",
  },
  {
    id: 9,
    name: "Uri Levine",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fb5387309aa2842f2b27b60f26a397778",
    role: "Founder of Waze",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F3c1232896777476e9b5704d580aec96f",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fe9701219a7e743408c14fa27cc8edd3a%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=e9701219a7e743408c14fa27cc8edd3a&alt=media&optimized=true",
    description:
      "Learn how Uri Levine approaches problem-solving, product-market fit, and building user-focused companies that grow through real-world value.",
  },
  {
    id: 10,
    name: "Kelly Richmond Pope",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F31d24bcfe549491f971d154458d493ab",
    role: "Best-Selling Author",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F27cc610e575c4478bc245cc94889dc15",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F80aee6543c4946ec854dc7c019eaf8c8%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=80aee6543c4946ec854dc7c019eaf8c8%2F80aee6543c4946ec854dc7c019eaf8c8&alt=media&optimized=true",
    description:
      "Gain practical insight on trust, decision-making, ethics, and business responsibility from Kelly Richmond Pope’s experience as an author and educator.",
  },
];

export type FeaturedItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "Coaching",
    description:
      "Offer one-on-one or group sessions with easy scheduling and payment management.",
    image:
      "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/coaching",
  },
  {
    id: 2,
    title: "Courses",
    description:
      "Create online courses with lessons, videos, modules, and student progress tracking.",
    image:
      "https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/courses",
  },
  {
    id: 3,
    title: "Community",
    description:
      "Build a private space where your members can connect, learn, and stay engaged.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/community",
  },
  {
    id: 4,
    title: "Memberships",
    description:
      "Sell paid memberships with exclusive content, member access, and recurring plans.",
    image:
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/memberships",
  },
  {
    id: 5,
    title: "Live Sessions",
    description:
      "Host live classes, workshops, webinars, and group sessions from one simple platform.",
    image:
      "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/live-sessions",
  },
  {
    id: 6,
    title: "Digital Products",
    description:
      "Sell downloads, templates, guides, and digital resources directly to your audience.",
    image:
      "https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/digital-products",
  },
  {
    id: 7,
    title: "Booking",
    description:
      "Let users book calls, consultations, and sessions with simple availability controls.",
    image:
      "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/booking",
  },
  {
    id: 8,
    title: "Payments",
    description:
      "Accept payments for coaching, courses, memberships, and products with easy checkout.",
    image:
      "https://images.pexels.com/photos/6863259/pexels-photo-6863259.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/features/payments",
  },
];

export const instructors: InstructorItem[] = [
  {
    id: 1,
    name: "Jimmy Wales",
    role: "Founder of Wikipedia",
    company: "Wikipedia",
    image:
      "/faculty (1).webp",
    logoIcon: "mdi:wikipedia",
  },
  {
    id: 2,
    name: "Steve Chen",
    role: "Founder of YouTube",
    company: "YouTube",
    image:
      "/faculty (6).webp",
    logoIcon: "mdi:youtube",
  },
  {
    id: 3,
    name: "Chris Barton",
    role: "Founder of Shazam",
    company: "Shazam",
    image:
      "https://images.pexels.com/photos/12616223/pexels-photo-12616223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:music-circle",
  },
  {
    id: 4,
    name: "Rend Stephan",
    role: "Managing Director at BCG",
    company: "BCG",
    image:
      "https://images.pexels.com/photos/36934779/pexels-photo-36934779/free-photo-of-business-portrait-in-formal-suit-on-black-background.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:briefcase-variant",
  },
  {
    id: 5,
    name: "Caen Contee",
    role: "Founding Team at Lime",
    company: "Lime",
    image:
      "https://images.pexels.com/photos/28186654/pexels-photo-28186654/free-photo-of-business-meeting.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:leaf-circle",
  },
  {
    id: 6,
    name: "Morin Oluwole",
    role: "Ex-Director at Meta",
    company: "Meta",
    image:
      "https://images.pexels.com/photos/10375939/pexels-photo-10375939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:infinity",
  },
  {
    id: 7,
    name: "Angela Visage",
    role: "Founder of Eventbrite",
    company: "Eventbrite",
    image:
      "/faculty (5).webp",
    logoIcon: "mdi:ticket-confirmation",
  },
  {
    id: 8,
    name: "Gabriela Hersham",
    role: "Founder of Huckletree",
    company: "Huckletree",
    image:
      "https://images.pexels.com/photos/7710091/pexels-photo-7710091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:tree",
  },
  {
    id: 9,
    name: "Jeffrey Gitomer",
    role: "Best-Selling Sales Author",
    company: "The New York Times",
    image:
      "https://images.pexels.com/photos/12616223/pexels-photo-12616223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:newspaper-variant",
  },
  {
    id: 10,
    name: "Tobi Oluwole",
    role: "LinkedIn Creator & Entrepreneur",
    company: "LinkedIn",
    image:
      "https://images.pexels.com/photos/5717304/pexels-photo-5717304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:linkedin",
  },
  {
    id: 11,
    name: "Uri Levine",
    role: "Founder of Waze",
    company: "Waze",
    image:
      "https://images.pexels.com/photos/8424520/pexels-photo-8424520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:car",
  },
  {
    id: 12,
    name: "Ann Hiatt",
    role: "First Chief of Staff at Google",
    company: "Google",
    image:
      "https://images.pexels.com/photos/7710091/pexels-photo-7710091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:google",
  },
  {
    id: 13,
    name: "Kelly Richmond Pope",
    role: "Best-Selling Finance Author",
    company: "",
    image:
      "https://images.pexels.com/photos/7394350/pexels-photo-7394350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:cash-multiple",
  },
  {
    id: 14,
    name: "Greg Hoffman",
    role: "Former CMO at Nike",
    company: "Nike",
    image:
      "/faculty (4).webp",
    logoIcon: "mdi:shoe-sneaker",
    // badge: "New Course",
  },
  {
    id: 15,
    name: "Steve Cadigan",
    role: "Former CHRO at LinkedIn",
    company: "LinkedIn",
    image:
      "/faculty (3).webp",
    logoIcon: "mdi:linkedin",
    // badge: "Coming Soon",
  },
  {
    id: 16,
    name: "Felix Haas",
    role: "Design at Lovable",
    company: "Lovable",
    image:
      "/faculty (5).webp",
    logoIcon: "mdi:heart",
    // badge: "New Course",
  },
  {
    id: 17,
    name: "Sahil Bloom",
    role: "Best-Selling Author",
    company: "The New York Times",
    image:
      "https://images.pexels.com/photos/8424520/pexels-photo-8424520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:newspaper-variant",
  },
  {
    id: 18,
    name: "Zack Kass",
    role: "Former Head of Go-To-Market at OpenAI",
    company: "OpenAI",
    image:
      "/faculty (2).webp",
    logoIcon: "mdi:brain",
  },
  {
    id: 19,
    name: "Georgia Lewis Anderson",
    role: "Former Prompt Engineer at Microsoft",
    company: "Microsoft",
    image:
      "https://images.pexels.com/photos/10375939/pexels-photo-10375939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:microsoft-windows",
  },
  {
    id: 20,
    name: "Harry Stebbings",
    role: "Founder of 20VC",
    company: "20VC",
    image:
      "https://images.pexels.com/photos/5717304/pexels-photo-5717304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:numeric-20-circle",
  },
  {
    id: 21,
    name: "Adam Cheyer",
    role: "Founder of Siri",
    company: "Apple",
    image:
      "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:apple",
  },
];

export const whyAugmentSlides: WhyAugmentSlide[] = [
  {
    id: 1,
    eyebrow: "Why Supreme Coach?",
    title: "Real-World Startup\nInsights",
    description:
      "Gain hands-on experience and actionable skills. Supreme Coach provides real-world tactics and frameworks, taught by business legends.",
    buttonLabel: "Explore Courses",
    buttonHref: "/courses",
    image: "/step1.webp",
    imageAlt: "Course module preview collage",
    layout: "right-composite",
  },
  {
    id: 2,
    eyebrow: "Why Supreme Coach?",
    title: "Learn On Your Own\nTime",
    description:
      "Flexible, self-paced education for entrepreneurs. Access the best alternative MBA—anywhere, anytime, on any device.",
    buttonLabel: "Explore Courses",
    buttonHref: "/courses",
    image: "/step2.webp",
    imageAlt: "Supreme Coach dashboard preview",
    layout: "left-dashboard",
  },
  {
    id: 3,
    eyebrow: "Why Supreme Coach?",
    title: "Connect With Fellow\nFounders",
    description:
      "Get support from your peers through online masterminds and real-world networking events.",
    buttonLabel: "Explore Community",
    buttonHref: "/community",
    image: "/step3.webp",
    imageAlt: "Founder community member collage",
    layout: "right-community",
  },
];

export const COURSE_FEATURES = [
    {
        title: "On-the-go learning",
        description:
            "It’s your course, anywhere. Let students take it to go, with offline access on our top-rated iOS and Android mobile apps.",
    },
    {
        title: "Meaningful engagement",
        description:
            "Motivate your students and drive their progress with graded quizzes, certificates, drip content, and more.",
    },
    {
        title: "Conversion boosters",
        description:
            "Reach the right people (and make more sales) using marketing features like student referrals and upsells.",
    },
];

export const COURSE_FEATURES2 = [
  {
    title: "Intuitive course builder",
    description:
      "Our drag-and-drop builder makes it easy to create and customize your course. Rearrange and add content blocks with ease.",
  },
  {
    title: "Powered by AI",
    description:
      "Use our built-in AI tools to kickstart ideas, draft content, create sales pages, transcribe and translate video subtitles, and more in no time.",
  },
  {
    title: "Make it yours",
    description:
      "With advanced customizations, a custom domain, and a white label website, you can make your course totally yours.",
  },
];

export const reviews: ReviewItem[] = [
  {
    id: 1,
    quote:
      "This was a goal I have wanted to accomplish further my knowledge and understanding as I continue to grow my business and continue my journey as an entrepreneur!",
    name: "Anwar Molette",
    role: "Executive Chef",
    avatar:
      "https://cdn.senja.io/public/media/19579b7f-13ac-4b0f-84b9-c8345980ad33_a054ae06-e274-4f49-92c0-ec2e5ee931bc_c-AnwarMolette__62CAAD5443E64C7D86B1E9C108EDDCFD_1663889156012.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 2,
    quote:
      "Supreme Coach is the future of learning for business-minded people looking to gain real, practical knowledge about starting a business and developing in a successful way.",
    name: "Simon Lee Maryiah",
    role: "Founder",
    avatar:
      "https://cdn.senja.io/public/media/d4461c1b-ef42-4846-9e34-78a7e716e50d_634b1196-1666-478d-991c-e0878299b2f1_1708357355889.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 3,
    quote:
      "I think Supreme Coach is a game changer. It's a brilliant concept and the contents, program and interface are just great. As soon as you start a module it becomes hard to stop. Also there is a human contact and great support from the orientation to graduation.",
    name: "Ivan Nappo",
    role: "Financial Regulation Specialist",
    avatar:
      "https://cdn.senja.io/public/media/1e94f3b8-6b05-4c30-bba2-18b801d2f71b_35706b17-b7fb-459c-95e1-7a7df87795e9_1721121911975.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 4,
    quote:
      "This was the most enjoyable program I have completed. I could feel the impact of their perspectives and enjoy how the course allows you to continue learning as part of the community.",
    name: "Heather D. Whelan",
    role: "Business Coach",
    avatar:
      "https://cdn.senja.io/public/media/638a23de-6410-44cd-a303-082ca0626542_590cd49f-9b96-478b-9c4c-e4dd6e53f7e3_1759273290357.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 5,
    quote:
      "The instructors incorporating their own experiences in the lesson made learning very easy on my part as it kept my interest level high. I wish Supreme Coach will continue adding more lectures as these are all gold!",
    name: "Delise Mutuc",
    role: "Sales & Marketing Strategist",
    avatar:
      "https://cdn.senja.io/public/media/6302d82b-4d1e-405d-9e5a-7e2e5a7db96e_e761f846-19ea-40f6-95bc-15593eb0758c_1645047645371.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 6,
    quote:
      "I found the course really straightforward, a positive experience! The micro units are suited around busy lifestyles and meant I could jump on as a break or even sitting in the coffee shop!",
    name: "Johabh Muldoogh",
    role: "Managing Director",
    avatar:
      "https://cdn.senja.io/public/media/e643a944-708a-4b21-9fd0-f43f6951d1a5_2c2b3852-2f50-4d1a-a848-f0d7903d9651_1727294476692.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 7,
    quote:
      "A valuable content that is accessible as a self-passed format. Beloved entrepreneurs and equally famous and highly respected creators and CEOs share their personal insights and journeys.",
    name: "Iloha Z.",
    role: "Self Employed",
    avatar:
      "https://cdn.senja.io/public/media/b4d547ec-8818-42b9-9a5e-3360170e5ec5_7609080a-0e9d-4e58-93dd-31ea2ad62e05_1700770061020.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 8,
    quote:
      "The content was very professionally presented and engaging. I also loved having the handbook takeaways for each model to be able to reference and refresh when needed.",
    name: "Matt Marsh",
    role: "Business Owner",
    avatar:
      "https://cdn.senja.io/public/media/1c647c47-6181-4ae7-bb07-2c2905def07d_fd7e0340-9629-435d-98a9-07bffb44b0ea_1638380870191.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 9,
    quote:
      "Flexibility, incredible resources, and inspiring live classes, I loved the Supreme Coach MBA Program. It taught me so much about the industry, helped me understand key things I’d never considered, and gave me the freedom to learn on my own time.",
    name: "Daisy White",
    role: "Senior Talent Manager",
    avatar:
      "https://cdn.senja.io/public/media/ec11df5f-a26f-4bf0-8e0d-20899d34aa1b_c736df24-6a01-49b5-bb1a-d4e184c44de5_1719262805462.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 10,
    quote:
      "This has been the most life-changing business course I’ve taken. Great lessons from people with real experience. There is support from staff but knowledge is the biggest touch that it works.",
    name: "Arthur Shaba",
    role: "Finance",
    avatar:
      "https://cdn.senja.io/public/media/4267d4da-6c01-4a9f-98a2-526f45f27fee_fbdcd35a-844f-457c-a338-db41ae5e8e5e_1655971000970.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 11,
    quote:
      "When I started this course, I got asked the question ‘how are you going to fit it in?’ However, what I’ve found is that it’s easy to fit the learning into my life.",
    name: "Hester Scotton",
    role: "Strategic CFO",
    avatar:
      "https://cdn.senja.io/public/media/3a33864d-9dc8-4424-a092-c7614df9e489_avatar.png?width=63&height=63&format=webp",
  },
  {
    id: 12,
    quote:
      "I’ve learned so much here that it feels like I could’ve spent 4 years in college and still not retained as much.",
    name: "Donavon Flegeance",
    role: "Business Consultant",
    avatar:
      "https://cdn.senja.io/public/media/00ea40b3-588e-421b-95e2-f8d0e3678612_71e63fc0-c30e-4bbf-8172-15224a0a317b_1525798117586.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 13,
    quote:
      "The idea behind Supreme Coach is one I truly stand for. I LOVED this course and its structure. I’ll definitely keep coming back to its content because it’s that valuable.",
    name: "Mikhail Sieni",
    role: "Sales Director",
    avatar:
      "https://cdn.senja.io/public/media/4a407c0b-0a42-471e-a997-3ed9aaa8bbd3_8de82ba6-2e69-47b7-8586-7296435440e2_1756214871399.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 14,
    quote:
      "The course touches on a lot of key areas most classes don't discuss that are paramount to success in business. I found the Supreme Coach program very accommodating to busy schedules.",
    name: "June Burton",
    role: "Financial Services Advisor",
    avatar:
      "https://cdn.senja.io/public/media/e06ce752-5618-4418-b7ea-bd9d705d455d_85ef1206-d9a6-4445-93fe-e4d051b9fcbf_1707946558049.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 15,
    quote:
      "Supreme Coach is not just another program; it’s built by founders, for founders, designed to give entrepreneurs the practical insights, network, and mindset they need to scale.",
    name: "Oren Broshi",
    role: "Entrepreneur | Founder of Stealth Mode Startup",
    avatar:
      "https://cdn.senja.io/public/media/KpWRnRxiS7skl0e6yOfcO0VV.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 16,
    quote:
      "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills and knowledge necessary to take on new challenges in the industry.",
    name: "Gary Lamach II",
    role: "Director @ AICPA",
    avatar:
      "https://cdn.senja.io/public/media/37691754-9e62-4885-a7d8-c2d13dbfd448_640eb926-bfce-4154-9728-837745e75c68_Screenshot%202023-11-20%20at%2012.27.48.png?width=63&height=63&format=webp",
  },
  {
    id: 17,
    quote:
      "In a world where traditional MBA teachings often revolve around academic research, Supreme Coach offers a modern and innovative approach to business education.",
    name: "Mubarak AlBahar",
    role: "Trade Relations Officer at The C Holding",
    avatar:
      "https://cdn.senja.io/public/media/lNTQ2RuqGaYj2tw98bAM0TAz.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 18,
    quote:
      "Last year, I decided to give Supreme Coach MBA a try. It's a new way of learning at your own pace and at an affordable price.",
    name: "Shkumbin Mustafa",
    role: "Branding & Digital Marketing",
    avatar:
      "https://cdn.senja.io/public/media/zmwDBMlEeR6ME5ZNVqx6HfnQ.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 19,
    quote:
      "What happens when you take the advice of a marketing and personal branding expert? The insights I gained were invaluable.",
    name: "Patricia Paisis-Oakwell",
    role: "Certified Health Coach",
    avatar:
      "https://cdn.senja.io/public/media/afdccf8f-2d59-4ea5-87c2-b1bef06b2141_avatar.png?width=63&height=63&format=webp",
  },
  {
    id: 20,
    quote:
      "Supreme Coach is democratizing access to education against the traditional school systems that are for profit.",
    name: "Jamaal Bethea",
    role: "Business Owner",
    avatar:
      "https://cdn.senja.io/public/media/db143e9b-0cc1-4ae7-af3a-7124a4491063_2d6fc2a4-ee81-4cc9-8a1e-e1f13ddcf46e_e3b213ae-8bec-4fdb-af91-8eacb9f32aa6_ab2bc69e-ef2a-4d0e-8b40-82ce701c04a9_1732653211541.webp?width=63&height=63&format=webp",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Heather D. Whelan",
    role: "Business Coach",
    avatar: "https://cdn.senja.io/public/media/638a23de-6410-44cd-a303-082ca0626542_590cd49f-9b96-478b-9c4c-e4dd6e53f7e3_1759273290357.jpeg?width=63&height=63&format=webp",
    text: "This was the most enjoyable online educational program that I have ever completed. I could feel the impact of their experiences on their perspectives and enjoyed the quality of the content. I love how the program allows you to continue to be a part of the community and have access to new modules and materials as they are developed. I am very excited about what I learned through the program and looking forward to the continuing education component. Thank you! The quality and execution of the content.",
  },
  {
    id: 2,
    name: "Simon Lee Maryan",
    role: "Founder",
    avatar: "https://cdn.senja.io/public/media/d4461c1b-ef42-4846-9e34-78a7e716e50d_634b1196-1666-478d-991c-e0878299b2f1_1708357355889.jpeg?width=63&height=63&format=webp",
    text: "This program is so different from typical MBA's, and although it is still growing content, what it currently provides is so practical, realistic and valuable. I can't wait to see what comes next. It is online, self paced and great",
  },
  {
    id: 3,
    name: "Janene Nadolny-Jimenez",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/727b3e2e-aab0-4a17-9e76-8fdccbc42f87_08553bdc-a032-487e-95b7-71b41efe2dc9_1756077942174.jpeg?width=63&height=63&format=webp",
    text: "My experience with Supreme Coach completely changed how I approach my business, my work, and my rest. It gave me a fresh perspective on old ideas and pushed me to face the hard parts instead of avoiding them. One chapter in particular made me realize I had to ‘fire’ the old version of myself, to stop playing small and start running a real, scalable company. The teachers were authentic, the content was current and practical, and the course was worth every penny.",
  },
  {
    id: 4,
    name: "Ivan Nappo",
    role: "Financial Regulation Specialist",
    avatar: "https://cdn.senja.io/public/media/1e94f3b8-6b05-4c30-bba2-18b801d2f71b_35706b17-b7fb-459c-95e1-7a7df87795e9_1721121911975.jpeg?width=63&height=63&format=webp",
    text: "I think Supreme Coach is a game changer. It's a brilliant concept and the contents, program and interface are just great. As soon as you start a module it becomes hard to stop. Also there is a human contact and great support from the orientation to graduation. I highly recommend it.",
  },
  {
    id: 5,
    name: "Hester Scotton",
    role: "Strategic CFO",
    avatar: "https://cdn.senja.io/public/media/3a33864d-9dc8-4424-a092-c7614df9e489_avatar.png?width=63&height=63&format=webp",
    text: "When I started this course, I got asked the question ‘how are you going to fit it in? You have a full time job as a CFO, you have two children, you are training for a marathon…’. The truthful answer was that I wasn’t sure. However, what I’ve found is that it’s easy to fit the learning into my life. The modules are all short and easy to digest. The content is enjoyable and engaging so I often do some of it as my lunch break or first thing in the morning. If you want to learn more about business but are worried you don’t have the time then I would highly recommend you look at Supreme Coach.",
    linkedin: true,
  },
  {
    id: 6,
    name: "Donavon Flegeance",
    role: "Business Consultant",
    avatar: "https://cdn.senja.io/public/media/00ea40b3-588e-421b-95e2-f8d0e3678612_71e63fc0-c30e-4bbf-8172-15224a0a317b_1525798117586.jpeg?width=63&height=63&format=webp",
    text: "I’ve learned so much here that it feels like I could’ve spent 4 years in college and still not retained as much. I love being able to move at my own pace and hear from people who’ve actually done it, not just professors who’ve never built anything.",
  },
  {
    id: 7,
    name: "Daisy White",
    role: "Senior Talent Manager",
    avatar: "https://cdn.senja.io/public/media/ec11df5f-a26f-4bf0-8e0d-20899d34aa1b_c736df24-6a01-49b5-bb1a-d4e184c44de5_1719262805462.jpeg?width=63&height=63&format=webp",
    text: "Flexibility, incredible resources, and inspiring live classes, I loved the Supreme Coach MBA Program. It taught me so much about the industry, helped me understand key things I’d never considered, and gave me the freedom to learn on my own time. The support from the network was invaluable, and I couldn’t be more grateful or proud of what I’ve achieved.",
  },
  {
    id: 8,
    name: "Mikhail Sieni",
    role: "Sales Director",
    avatar: "https://cdn.senja.io/public/media/4a407c0b-0a42-471e-a997-3ed9aaa8bbd3_8de82ba6-2e69-47b7-8586-7296435440e2_1756214871399.jpeg?width=63&height=63&format=webp",
    text: "The idea behind Supreme Coach is one I truly stand for. I LOVED this course and its structure. I’ll definitely keep coming back to its content because it’s that valuable.",
  },
  {
    id: 9,
    name: "June Burton",
    role: "Financial Services Advisor",
    avatar: "https://cdn.senja.io/public/media/e06ce752-5618-4418-b7ea-bd9d705d455d_85ef1206-d9a6-4445-93fe-e4d051b9fcbf_1707946558049.jpeg?width=63&height=63&format=webp",
    text: "The course touches on a lot of key areas most classes don't discuss that are paramount to success in business. I found the Supreme Coach program very accommodating to busy schedules.",
  },
  {
    id: 10,
    name: "Oren Broshi",
    role: "Entrepreneur | Founder of Stealth Mode Startup",
    avatar: "https://cdn.senja.io/public/media/KpWRnRxiS7skl0e6yOfcO0VV.jpeg?width=63&height=63&format=webp",
    text: "Supreme Coach is not just another program; it’s built by founders, for founders, designed to give entrepreneurs the practical insights, network, and mindset they need to scale. Grateful to be part of it and highly recommend it to every entrepreneur who’s serious about leveling up",
    linkedin: true,
  },
  {
    id: 11,
    name: "Gary Lamach II",
    role: "Director @ AICPA",
    avatar: "https://cdn.senja.io/public/media/37691754-9e62-4885-a7d8-c2d13dbfd448_640eb926-bfce-4154-9728-837745e75c68_Screenshot%202023-11-20%20at%2012.27.48.png?width=63&height=63&format=webp",
    text: "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills and knowledge necessary to take on new challenges in the industry. Thank you, Supreme Coach , for this amazing opportunity!",
    linkedin: true,
  },
  {
    id: 12,
    name: "Mubarak AlBahar",
    role: "Trade Relations Officer at The C Holding",
    avatar: "https://cdn.senja.io/public/media/lNTQ2RuqGaYj2tw98bAM0TAz.jpeg?width=63&height=63&format=webp",
    text: "In a world where traditional MBA teachings often revolve around academic research, Supreme Coach offers a modern and innovative approach to business education, emphasizing real-world insights directly from renowned entrepreneurial leaders. Supreme Coach's curriculum, characterized by its practical, founder-driven approach, has enriched my understanding of contemporary business practices grounded in genuine experiences.",
    linkedin: true,
  },
  {
    id: 13,
    name: "Shkumbin Mustafa",
    role: "Branding & Digital Marketing",
    avatar: "https://cdn.senja.io/public/media/zmwDBMlEeR6ME5ZNVqx6HfnQ.jpeg?width=63&height=63&format=webp",
    text: "Last year, I decided to give Supreme Coach.org MBA a try. It's a new way of learning at your own pace and at an affordable price. The program offers direct advice from some of the smartest people in business, including the founders of Wikipedia, Waze, Shazam, and Lime. It’s a straightforward, fast, and affordable way to gain the skills and confidence needed to succeed in business. If you’re looking to learn how the best in the business made it and you want to start your own venture, I highly recommend giving Supreme Coach MBA a try.",
    linkedin: true,
  },
  {
    id: 14,
    name: "Patricia Paisis-Oakwell",
    role: "Certified Health Coach",
    avatar: "https://cdn.senja.io/public/media/afdccf8f-2d59-4ea5-87c2-b1bef06b2141_avatar.png?width=63&height=63&format=webp",
    text: "What happens when you take the advice of a marketing and personal branding expert? On Thursday, I had the pleasure of attending an inspiring masterclass led by Tobi Oluwole on Marketing and Personal Branding, hosted by Ariel Renous and Elyssa Goldberg from Supreme Coach.org . The insights I gained were invaluable! Tonight, while reviewing my stats, I was excited to see that my post impressions increased by 90% in just one day. It’s amazing to see how quickly effective strategies can make an impact!",
    linkedin: true,
  },
  {
    id: 15,
    name: "Arthur Shaba",
    role: "Finance",
    avatar: "https://cdn.senja.io/public/media/4267d4da-6c01-4a9f-98a2-526f45f27fee_fbdcd35a-844f-457c-a338-db41ae5e8e5e_1655971000970.jpeg?width=63&height=63&format=webp",
    text: "This has been the most life-changing program I’ve ever done. Great lessons from people who have the experience. No textbook staff but knowledge straight from those who’ve lived it and can vouch that it works.",
  },
  {
    id: 16,
    name: "Jamaal Bethea",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/db143e9b-0cc1-4ae7-af3a-7124a4491063_2d6fc2a4-ee81-4cc9-8a1e-e1f13ddcf46e_e3b213ae-8bec-4fdb-af91-8eacb9f32aa6_ab2bc69e-ef2a-4d0e-8b40-82ce701c04a9_1732653211541.webp?width=63&height=63&format=webp",
    text: "Supreme Coach is democratizing access to education against the traditional school systems that are for profit. These systems are archaic and don’t represent the needs of many communities that don’t have access to economic resources or connections.",
  },
  {
    id: 17,
    name: "Momchil Tsonev",
    role: "Commodity Trader",
    avatar: "https://cdn.senja.io/public/media/ff125b6c-e92a-4935-984a-a9cd29748376_8d9afcda-124a-4edc-a4ee-7d82c713aa98_1517628067223.jpeg?width=63&height=63&format=webp",
    text: "Program is structured in very unique and intuitive way. It gives exposure to diverse perspectives and practical wisdom that make business and everyday concepts more tangible and easy to understand. But most important it could inspire more people to approach challenges with a creative and entrepreneurial mindset and help them set up their own business ventures. The program goes beyond the conventional by integrating real-world insights from practitioners, entrepreneurs, and business founders.",
  },
  {
    id: 18,
    name: "Anwar Molette",
    role: "Executive Chef",
    avatar: "https://cdn.senja.io/public/media/19579b7f-13ac-4b0f-84b9-c8345980ad33_a054ae06-e274-4f49-92c0-ec2e5ee931bc_c-AnwarMolette__62CAAD5443E64C7D86B1E9C108EDDCFD_1663889156012.jpeg?width=63&height=63&format=webp",
    text: "This was a goal I have wanted to accomplish to further my knowledge and understanding as I continue to grow my business and continue my journey as an entrepreneur! It taught me many useful things I needed to know in order to be successful, the baffling things that I had questions for, that went unanswered in my mind, gave me a different look at how to handle myself as a business owner and leader of my company",
  },
  {
    id: 19,
    name: "Swaroop Rath",
    role: "Software Engineer",
    avatar: "https://cdn.senja.io/public/media/e8e49af0-db9b-4117-994b-1e8fd95c2a4b_d4613783-58db-4912-ab6e-02f7039da1e0_1731644373149.jpeg?width=63&height=63&format=webp",
    text: "Love it! And I learnt a lot. What I like the most is the content, format, summaries, knowledge and the fact that it’s always available and growing. Also the community, social media channels and the support group are great",
  },
  {
    id: 20,
    name: "Kenneth Maynard",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/79003e85-84e1-4b09-a2df-1014a9ee67e3_ff623dd9-dc9d-49b3-a805-4834507a12e7_1610196548115%20%281%29.jpeg?width=63&height=63&format=webp",
    text: "It is priceless to have such esteemed and successful faculty, they teach business concepts that are immediately applicable for entrepreneurs, not to mention the most outstanding value for money!",
  },
  {
    id: 21,
    name: "Jason Doubt",
    role: "Co-Founder",
    avatar: "https://cdn.senja.io/public/media/ec6125f7-9d10-46de-a317-64f3e96b868c_34b2cbbe-7c3e-46f4-8087-bb72952ed5c7_1744816316399.jpeg?width=63&height=63&format=webp",
    text: "Supreme Coach is the future of learning for business-minded people looking to gain real, practical knowledge about starting a business and developing in a successful way.",
  },
  {
    id: 22,
    name: "Muzammil Kamran",
    role: "Writer",
    avatar: "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    text: "This is the best entrepreneurship course out there which distinguishes itself from traditional business education which teaches ages old theories and frameworks leaving you in no place to start your own venture. Supreme Coach not only teaches practical concepts but a comprehensive understanding which enables you to start your own venture. When do you get a chance to learn from founders of Youtube, Shazam, Waze and Wikipedia etc? The course gave me an insight into the mindset of people who made the magic happen and changed the world.",
  },
  {
    id: 23,
    name: "Denise Mutuc",
    role: "Sales & Marketing Strategist",
    avatar: "https://cdn.senja.io/public/media/6302d82b-4d1e-405d-9e5a-7e2e5a7db96e_e761f846-19ea-40f6-95bc-15593eb0758c_1645047645371.jpeg?width=63&height=63&format=webp",
    text: "The instructors incorporating their own experiences in the lesson made learning very easy on my part as it kept my interest level high.I'm happy to have access to the lessons along with the downloadable PDF files as I would love to come back and revisit every now and then. I wish Supreme Coach will continue adding more lectures as these are all gold!",
  },
  {
    id: 24,
    name: "Johann Muldoon",
    role: "Managing Director",
    avatar: "https://cdn.senja.io/public/media/e643a944-708a-4b21-9fd0-f43f6951d1a5_2c2b3852-2f50-4d1a-a848-f0d7903d9651_1727294476692.jpeg?width=63&height=63&format=webp",
    text: "I found the course really straightforward, a positive experience! The micro units are suited around busy lifestyles and meant I could jump on as a break or even sitting in the coffee shop!",
  },
  {
    id: 25,
    name: "Iliona Zablockaja",
    role: "Self Employed",
    avatar: "https://cdn.senja.io/public/media/b4d547ec-8818-42b9-9a5e-3360170e5ec5_7609080a-0e9d-4e58-93dd-31ea2ad62e05_1700770061020.jpeg?width=63&height=63&format=webp",
    text: "A valuable content that is accessible as a self-passed format. Beloved entrepreneurs and equally famous and highly respected creators and CEOs share their personal insights and journeys. That's a valuable resource to gain knowledge about the business world, especially for those, who never had a chance to familiarize with this part of the professionals in the business society.",
  },
  {
    id: 26,
    name: "Matt Marsh",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/1c647c47-6181-4ae7-bb07-2c2905def07d_fd7e0340-9629-435d-98a9-07bffb44b0ea_1638380870191.jpeg?width=63&height=63&format=webp",
    text: "The content was very professionally presented and engaging. I also loved having the handbook takeaways for each model to be able to reference and refresh when needed.",
  },
  {
    id: 27,
    name: "Victory Oluwagbemiga",
    role: "Business Owner",
    avatar: "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    text: "I still remember my first Supreme Coach trial with Ann Hiatt, I thought, ‘There’s no way I’m going to let this go.’ I felt like I found gold!. Joining Supreme Coach to get coached by some of the best minds in the world has been a major milestone in my professional career. Meeting the Supreme Coach team in London was amazing and I will never forget it, thank you for such a powerful experience!",
  },
  {
    id: 28,
    name: "Amit Bhundhoo, CPA",
    role: "Cloud Accounting | Tax | Strategy | Financial Management  Tax Planning | Fractional SMB Support",
    avatar: "https://cdn.senja.io/public/media/G7vjrwnP4JicDZ8S6OSebuQH.jpeg?width=63&height=63&format=webp",
    text: "I’ve officially graduated from the Supreme Coach.org MBA. A new-age program built for entrepreneurs, innovators, and modern business leaders. Unlike traditional MBAs, Supreme Coach is practical, immersive, and refreshingly honest about what it takes to grow a sustainable business today. It has sharpened how I think strategically about business, finance, and leadership; lessons I’m already applying in my own work.",
    linkedin: true,
  },
  {
    id: 29,
    name: "Mohit Patel",
    role: "Founder of TruText | Building a Better Way to Connect | Ex-Mathnasium Owner",
    avatar: "https://cdn.senja.io/public/media/jyG5asuSIPH3uhev0YxM0YKq.jpeg?width=63&height=63&format=webp",
    text: "Last week, I officially completed the Supreme Coach Business School MBA course—but the real learning is just beginning. Supreme Coach Business School is not a normal MBA course. You get real advice from real entrepreneurs who have been through every struggle you can think of. It’s not just theory—it’s real-world strategies, lessons from failures, and insights you won’t find in a textbook. One of the biggest takeaways? You don’t have to figure it all out alone. Building a business can feel isolating, but surrounding yourself with the right people changes everything. Hearing from founders who have been in the same trenches—solving the same problems—gave me perspectives I never would’ve considered on my own. I also love how Supreme Coach is always adding new material and new resources for students. Can't wait to see what 2025 has in store! 📌 Lesson learned: The best investment you can make is in learning from others. A huge thanks to the Supreme Coach team and the incredible entrepreneurs in the program. Now, it’s time to apply what I’ve learned! For all the business owners out there—what’s the best piece of advice you’ve ever received? Drop it in the comments!",
    linkedin: true,
  },
  {
    id: 30,
    name: "Christopher Mensah",
    role: "Solution Consultant Digital Assets, Web3, Board Advisor, Digital Assets Educator: Bridging the gap from web2 to web3",
    avatar: "https://cdn.senja.io/public/media/6b21fd33-874d-4698-84a9-373d1835b606_57ed6256-060c-4c90-b891-f0aab8b800a7_Christopher%20Mensah.jpeg?width=63&height=63&format=webp",
    text: "When you decide to upgrade your knowledge, I recommend studying business. Supreme Coach's alternative MBA was invaluable in its content and its insights were exactly what I was looking for, I was able to apply the principles immediately. Entrepreneurship, intrapreneurship or solopreneurship is accessible to all when you understand the principles and applications of business. If you were thinking of a course to upgrade your knowledge, check Supreme Coach.org",
    linkedin: true,
  },
  {
    id: 31,
    name: "Gilles Chetelat",
    role: "CEO at mediarithmics",
    avatar: "https://cdn.senja.io/public/media/KWOdCWqXPsusDFhRHp5O86p7.jpeg?width=63&height=63&format=webp",
    text: "This is in fact my 3rd master's degree after Georgia Institute of Technology and ESC Clermont Business School but this experience was invaluable: 👉 Taught by the best tech entrepreneurs from the Silicon Valley including founders from Shazam, Youtube, Wikipedia, Waze and Lime... ⛵️ Fully Remote and 20 times less expensive than a full time MBA, ⛳️ Graduated >20 years after my last degree (Was worth the update), ♻️ No travel needed.",
    linkedin: true,
  },
  {
    id: 32,
    name: "Aidan Kaye",
    role: "Servant Leader | Entrepreneur",
    avatar: "https://cdn.senja.io/public/media/Xbnj0kZS7jU4j2CMmv7MMuLC.jpeg?width=63&height=63&format=webp",
    text: "Happy to have completed the Supreme Coach MBA program. I loved the course, as it filled gaps in my knowledge of my business skills, including leadership, business strategy, entrepreneurship, and financial accounting. I'm excited to put these skills to use!",
    linkedin: true,
  },
  {
    id: 33,
    name: "Gregory T. Lande",
    role: "Award-Winning Sales Leader",
    avatar: "https://cdn.senja.io/public/media/e5a5830a-7aa4-4b37-a7fe-7a245294e745_avatar.png?width=63&height=63&format=webp",
    text: "I recently completed my MBA program with The #Supreme Coach Business School; it was an incredibly educational and rewarding experience. The support and guidance from #Supreme Coach's faculty was invaluable...from Joaquim Berryer convincing me that at this stage of my career #Supreme Coach was undoubtedly the right choice, to Joceline Perrot continually communicating with me ensuring that the modules. I couldn't be happier with the choice I made with #Supreme Coach...you have added to my life in multiple ways, and I couldn't be more grateful.",
    linkedin: true,
  },
  {
    id: 34,
    name: "Grace Randall",
    role: "Project Manager at StrategiQ",
    avatar: "https://cdn.senja.io/public/media/iiLW8IfJmSblVPZFGTVCdPyv.jpeg?width=63&height=63&format=webp",
    text: "This course has given me actionable insights from the world's most successful founders and top executives, supporting me to progress my professional career. It's especially helped to elevate my thinking which will be invaluable when delivering projects and working with our brilliant clients.",
    linkedin: true,
  },
  {
    id: 35,
    name: "Kelvin Alaneme",
    role: "CEO Mindhelpa",
    avatar: "https://cdn.senja.io/public/media/SMqW64grLFL5ww0wzuH3hYc3.jpeg?width=63&height=63&format=webp",
    text: "If you are a startup founder and there is just one book to read, I will recommend Uri Levine’s masterpiece - 'Fall in Love with the Problem, Not the Solution'. Uri is the Co-Founder of Waze and Moovit - 2 unicorns (private companies valued at over $1 billion). I encountered him during my Supreme Coach.org MBA program and he spits gems after gems.",
    linkedin: true,
  },
  {
    id: 36,
    name: "Carl Morris",
    role: "Experienced EdTech Founder",
    avatar: "https://cdn.senja.io/public/media/7d3d1476-2946-452f-95b9-b776a79702ed_96342f07-3720-4291-af72-a230ab8e69d6_Carl%20Morris.jpeg?width=63&height=63&format=webp",
    text: "Huge thanks for the mention in the latest Supreme Coach.org community update. 🙏 Calling all aspiring entrepreneurs! If you're looking to level up your skills, this course is a game-changer. Packed with invaluable insights and advice from seasoned innovators. 💡💪",
    linkedin: true,
  },
  {
    id: 37,
    name: "Kevin Creery",
    role: "Planning Analyst @ Resort Municipality Of Whistler | Community Planning | Policy Planning | Bylaw Enforcement",
    avatar: "https://cdn.senja.io/public/media/05jOlcp3Wzqf6bGHJKw1O2VV.jpeg?width=63&height=63&format=webp",
    text: "Supreme Coach offers great insights from tech founders and CEOs about how they started their businesses. Supreme Coach fits my needs to grow my business and tech expertise with real-world examples from successful tech founders. Supreme Coach enables me to learn the modules as I go and handbooks provide more background and context. As a lifelong learner who embraces innovation, Supreme Coach provides me with many skills and the knowledge necessary to advance my career and enhance opportunities.",
    linkedin: true,
  },
  {
    id: 38,
    name: "Azam Khan",
    role: "ASM Software Manager | Driving Quality and Efficiency",
    avatar: "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    text: "What an MBA ⭐️⭐️⭐️⭐️⭐️",
    linkedin: true,
  },
  {
    id: 39,
    name: "Tamzidul Matin",
    role: "Cloud DevOps Engineer",
    avatar: "https://cdn.senja.io/public/media/YnUwwlQziXs7Ah1Ud9xlC3TQ.jpeg?width=63&height=63&format=webp",
    text: "This revolutionary program, taught by some of the world's most accomplished founders, has been an incredible journey of learning and growth. The knowledge and insights I've gained throughout this program are invaluable. I've had the opportunity to delve deep into the world of business, learning from the best in the field, and applying these learnings to real-world scenarios.",
    linkedin: true,
  },
  {
    id: 40,
    name: "Jean Boutros",
    role: "Data Engineering and Analytics Lead at PwC UK",
    avatar: "https://cdn.senja.io/public/media/5tD266xB8DBfi0rcpxt0MASg.jpeg?width=63&height=63&format=webp",
    text: "I have studied at 6 different universities, some of which I graduated with a degree, others I didn't. While I still have a special place for academia in my life, and while I'm still planning to pursue my PhD in social sciences, there's a reality that keeps striking me every time I think back about my academic journeys. I can describe my academic journeys as enriching and eye-opening, but also economically straining and socially exclusionist. I can also confidently say that classic education still got a long way before it becomes aligned with real-life and market skills. I am delighted to share that I’ve started my Master of Business Administration - MBA at Supreme Coach. Supreme Coach's mission is to democratise business education, enabling access to a wider audience, away from systemic selectivism that is strengthened by socio-economic factors. Supreme Coach's objective is also to form people with market-ready skills and a growth make-it-happen mindset. #business #education #mba #growth #Supreme Coachmba Voir la traduction",
    linkedin: true,
  },
];

export const traditionalMbaItems: ComparisonItem[] = [
  { text: "$100,000 tuition, on average" },
  { text: "Inflexible learning" },
  { text: "No refund policy" },
  { text: "2 year time commitment" },
  { text: "Academic instructors" },
  { text: "Outdated, rigid curriculum" },
  { text: "Tedious admission process" },
];

export const augmentMbaItems: ComparisonItem[] = [
  { text: "$2450, with payment plans available" },
  { text: "Anywhere, anytime, on any device" },
  { text: "15-day money-back guarantee" },
  { text: "15-minute / day" },
  { text: "Taught by recognized founders" },
  { text: "Constantly updated curriculum" },
  { text: "Open education" },
];

export const navLinks: NavLink[] = [
  { label: "Faculty", href: "/faculty" },
  { label: "Community", href: "/students" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const highlights: string[] = [
  "Online",
  "Bite-sized Lessons",
  "Certificate",
];

export const logos: string[] = [
  "Forbes",
  "Entrepreneur",
  "TechCrunch",
  "Fast Company",
  "Business Insider",
];

export const whyCards: WhyCard[] = [
  {
    title: "Learn from iconic operators",
    text: "Practical business lessons from founders and executives who have built category-defining companies.",
  },
  {
    title: "Built for modern entrepreneurs",
    text: "A flexible alternative to traditional business school focused on real decisions, growth, and execution.",
  },
  {
    title: "Actionable and self-paced",
    text: "Short lessons, practical frameworks, and a format that fits around work and life.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  ["Format", "Online, flexible", "Campus-based"],
  ["Speed", "Bite-sized learning", "Semester structure"],
  ["Focus", "Practical entrepreneurship", "Academic curriculum"],
  ["Outcome", "Immediate application", "Longer-term theory"],
];

type SecurityItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const securityItems: SecurityItem[] = [
  {
    name: "SOC 2",
    src: "/security (1).svg",
    width: 56,
    height: 56,
  },
  {
    name: "PCI DSS",
    src: "/security (2).svg",
    width: 56,
    height: 56,
  },
  {
    name: "GDPR",
    src: "/security (3).svg",
    width: 56,
    height: 56,
  },
  {
    name: "CCPA",
    src: "/security (4).svg",
    width: 56,
    height: 56,
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};


export const homeFaqs: FAQItem[] = [
  {
    question: "What is Supreme Coach?",
    answer:
      "Supreme Coach is a modern business school for entrepreneurs, founders, and professionals who want practical business education without the traditional MBA limits.",
  },
  {
    question: "Who is Supreme Coach made for?",
    answer:
      "Supreme Coach is made for entrepreneurs, startup founders, operators, executives, and ambitious professionals who want to learn real business skills from experienced leaders.",
  },
  {
    question: "How is Supreme Coach different from a traditional MBA?",
    answer:
      "Supreme Coach focuses on practical lessons, real-world examples, founder-led learning, and flexible online access instead of long academic theory.",
  },
  {
    question: "How much time do I need each day?",
    answer:
      "You can learn at your own pace. Most lessons are designed to be easy to follow, so you can make progress even with a busy schedule.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. You can try Supreme Coach risk-free for 15 days. If it is not the right fit, you can contact finance@Supreme Coach.org for refund support.",
  },
];

export const pricingFaqs: FAQItem[] = [
  {
    question: "Which plan is right for me?",
    answer:
      "You can choose the plan based on your learning needs. If you are starting, a basic plan is good. If you want full access and deeper learning, choose the higher plan.",
  },
  {
    question: "Can I cancel my plan anytime?",
    answer:
      "Yes. You can cancel your plan anytime. After cancellation, your access will continue until the end of your current billing period.",
  },
  {
    question: "Is there a free trial or refund policy?",
    answer:
      "Yes. Supreme Coach offers a 15-day risk-free refund policy. If it is not the right fit, you can contact finance@Supreme Coach.org for refund support.",
  },
  {
    question: "What is included in the paid plan?",
    answer:
      "The paid plan includes access to business lessons, practical learning content, expert insights, and resources designed for entrepreneurs and professionals.",
  },
  {
    question: "Do I need to pay every month?",
    answer:
      "It depends on the plan you choose. Some plans may be billed monthly, while others may offer yearly access at a better value.",
  },
  {
    question: "Can teams or companies join Supreme Coach?",
    answer:
      "Yes. Supreme Coach can be useful for teams, founders, operators, and professionals who want to improve business knowledge together.",
  },
];

export const productsFaqs: FAQItem[] = [
  {
      question: "Why should I sell my courses on Supreme Coach?",
      answer:
        "Creating and selling online courses on Supreme Coach gives you access to both the most powerful selling tools and the most flexible course builder. You control your content. You control how you get paid. And you control the learning environment for your audience.",
    },
    {
      question: "How do I make a course on Supreme Coach?",
      answer:
        "It’s easy (and free) to get started with a seven-day free trial. Once logged in, you’ll be prompted to create a product. Select course. From there, you can start building manually. Or, use our AI course starter to draft your curriculum, lesson content, and sales page all at once.",
    },
    {
      question: "Can I do live courses on Supreme Coach?",
      answer:
        "While Supreme Coach is built for self-paced courses by default, it’s easy enough to host live courses using third-party embeds, including YouTube, Vimeo, and Zoom. You can also create a cohort-based learning experience using drip content.",
    },
    {
      question: "Do online courses make money?",
      answer:
        "Absolutely—in fact, they’re the perfect way to earn ongoing revenue, without ongoing work. Online course creation on Supreme Coach is designed with longevity in mind, meaning once you do the up front work of creating it, you can sell it on a continuous basis with little maintenance. Whatever your expertise or your business, you can translate it into an online course that people will pay for.",
    },
    {
      question: "How much does Supreme Coach cost per month?",
      answer:
        "Your first seven days are free. After that, we have plans starting at $29 per month, each designed to fit your unique business needs. Browse plans and pricing here.",
    },
    {
      question: "How many courses can I have on Supreme Coach?",
      answer:
        "Believe it or not, on any Supreme Coach plan, you can create an unlimited number of courses. From there, you can sell up to one course on a Starter plan, five courses on a Builder plan, 25 courses on a Growth plan, and 100 courses on an Advanced plan. For more courses, please contact sales.",
    },
    {
      question: "What else can I create on Supreme Coach?",
      answer:
        "You can build and sell your entire suite of learning products on Supreme Coach, including online coaching sessions, how-to guides, interactive templates, a community space, and more.",
    },
];

export const aboutFaqs: FAQItem[] = [
  {
    question: "Why was Supreme Coach created?",
    answer:
      "Supreme Coach was created to make high-quality business education more practical, flexible, and accessible for entrepreneurs and professionals.",
  },
  {
    question: "Who teaches at Supreme Coach?",
    answer:
      "Supreme Coach courses are taught by experienced founders, executives, and business leaders who have built and scaled real companies.",
  },
  {
    question: "Is Supreme Coach an accredited university?",
    answer:
      "Supreme Coach is not a traditional university. It is built to provide practical business learning outside the limitations of traditional academic programs.",
  },
  {
    question: "What makes Supreme Coach trusted?",
    answer:
      "Supreme Coach focuses on real business experience, practical frameworks, and learning from people who have worked at a high level in business.",
  },
];

export const communityFaqs: FAQItem[] = [
  {
    question: "What is included in the Supreme Coach community?",
    answer:
      "The community gives members a place to connect with entrepreneurs, professionals, and learners who are also building and growing businesses.",
  },
  {
    question: "Can I network with other founders?",
    answer:
      "Yes. Supreme Coach gives you opportunities to connect with like-minded founders, operators, and professionals from different backgrounds.",
  },
  {
    question: "Are there live sessions or meetups?",
    answer:
      "Depending on your program, Supreme Coach may include live Q&A sessions, networking events, and selected in-person meetups.",
  },
  {
    question: "Is the community useful after completing the course?",
    answer:
      "Yes. The community can help you keep learning, ask questions, share progress, and build long-term professional connections.",
  },
];

export const integrationsFaqs: FAQItem[] = [
  {
    question: "Can I access Supreme Coach from different devices?",
    answer:
      "Yes. You can access Supreme Coach online from your laptop, tablet, or mobile device depending on the platform access available.",
  },
  {
    question: "Does Supreme Coach work with my existing workflow?",
    answer:
      "Yes. Supreme Coach is designed for busy professionals, so you can learn alongside your work, business, or team responsibilities.",
  },
  {
    question: "Can teams use Supreme Coach together?",
    answer:
      "Yes. Teams can use Supreme Coach to build shared business knowledge, improve leadership skills, and create a common learning system.",
  },
  {
    question: "Do I need any special software?",
    answer:
      "No special setup is usually required. You only need internet access and the login details provided after enrollment.",
  },
];

export const teamFaqs: FAQItem[] = [
  {
    question: "Can my team join Supreme Coach?",
    answer:
      "Yes. Supreme Coach can be useful For Firms that want to improve business thinking, leadership, growth, and decision-making skills.",
  },
  {
    question: "Is Supreme Coach good for employee training?",
    answer:
      "Yes. Companies can use Supreme Coach as professional development for team members, managers, operators, and future leaders.",
  },
  {
    question: "Can we expense Supreme Coach through our company?",
    answer:
      "Yes. Many students expense Supreme Coach as professional development. Documentation can be provided upon request.",
  },
  {
    question: "Do teams get different pricing?",
    answer:
      "Team pricing may depend on the number of members and the selected program. You can contact Supreme Coach for team enrollment details.",
  },
];

export const solutionsFaqs: FAQItem[] = [
  {
    question: "What business problems does Supreme Coach help solve?",
    answer:
      "Supreme Coach helps with business strategy, leadership, growth, decision-making, entrepreneurship, and building stronger business skills.",
  },
  {
    question: "Is Supreme Coach useful for startup founders?",
    answer:
      "Yes. Startup founders can learn practical lessons about scaling, fundraising, leadership, product thinking, and business growth.",
  },
  {
    question: "Can Supreme Coach help experienced professionals?",
    answer:
      "Yes. Supreme Coach is not only for beginners. It is also useful for experienced professionals who want sharper business thinking.",
  },
  {
    question: "How fast can I start learning?",
    answer:
      "You can start learning after enrollment and access setup. The lessons are flexible, so you can begin at your own pace.",
  },
];


export const coachesFaqs: FAQItem[] = [
  {
    question: "How does coaching through Supreme Coach Individual work?",
    answer:
      "Coaching through Supreme Coach Individual begins with a seamless digital onboarding where each employee is matched with a certified business coach who fits their goals, language and professional context. The experience is designed to be intuitive from the start, giving every coachee immediate access to high quality coaching without operational friction.\n\nEmployees define their development priorities through a self assessment and select focus areas that reflect both their personal goals and the organization’s strategic needs. They schedule sessions at their preferred cadence and work with their coach in flexible, ongoing conversations that drive real behavior change. Progress is visible at every step through built in goal tracking, which helps coachees stay accountable and gives organizations clarity on outcomes.\n\nBetween sessions, employees access Supreme Coach Academy, a curated library of resources that reinforces learning and ensures development continues beyond coaching conversations. With Supreme Coach Feedback, they can also gather feedback from peers, direct reports or managers to deepen self awareness and uncover areas of improvements.\n\nFor program managers, Supreme Coach Individual provides aggregated insights across focus areas and cohorts to measure progress, demonstrate impact and ensure coaching is aligned with broader talent and business priorities.",
  },
  {
    question:
      "What makes Supreme Coach different from other business coaching services?",
    answer:
      "Supreme Coach stands apart from other business coaching services by delivering a truly scalable, personalized and measurable coaching experience. This is made possible by a global pool of rigorously vetted business coaches, all certified by the International Coaching Federation and equipped with extensive leadership and coaching experience, ensuring consistently high quality across regions and roles.\n\nBuilt-in analytics also provide real-time visibility into progress across focus areas, enabling companies to track behavioral change and link it to business outcomes. For organizations managing large or global workforces, Supreme Coach also removes complexity through seamless scheduling, multi language access and GDPR compliant hosting.\n\nTogether, these elements create a coaching solution that combines human expertise, digital scale and measurable results.",
  },
  {
    question: "How does Supreme Coach measure coaching success?",
    answer:
      "Supreme Coach measures coaching success by combining individual progress tracking with clear, data-driven insights at the program level. Each coachee begins by identifying their development focus areas and setting goals with their coach. These goals are tracked in real-time through the platform, allowing employees to see how their skills and behaviors evolve over the course of the program. This creates a transparent view of personal progress and helps sustain motivation and accountability.\n\nTo enrich this picture, Supreme Coach Feedback also offers integrated self-assessment and 360° feedback tools. Employees can gather input from peers, managers and direct reports at different moments in their journey, providing a rounded perspective on how their behavior is changing and where improvement is most visible. This feedback loop gives organizations a reliable pulse on the impact of coaching beyond the individual’s own perception.\n\nOn the organizational side, Supreme Coach Insights™ consolidates anonymized data to show how employees are progressing collectively. These analytics help program managers understand which capabilities are strengthening, how engagement is evolving and where coaching is driving measurable outcomes. By connecting individual growth to broader trends, companies can clearly demonstrate the value of coaching and ensure it aligns with strategic priorities.",
  },
  {
    question: "Who are Supreme Coach’s business coaches?",
    answer:
      "Supreme Coach’s business coaches are a highly vetted group of seasoned professionals who meet strict standards that go well beyond typical market requirements. Every coach holds at least a PCC level certification from the International Coaching Federation or an equivalent credential.\n\nAll coaches in the Supreme Coach network are specialists in business and goal-oriented coaching, bringing both formal training and practical leadership experience. The minimum requirement includes 500 coaching hours, 125 training hours and more than six years of leadership experience, along with a proven track record supporting leaders and teams in top enterprise organizations across industries. This combination of expertise ensures that coaches understand real business challenges and can translate coaching into meaningful workplace outcomes.\n\nTo uphold this standard at scale, Supreme Coach applies an intensive selection and onboarding process. Only 5% of applicants are accepted into the global coach pool, reflecting a rigorous evaluation of skills and professionalism. This careful selection, combined with ongoing performance monitoring, leads to a 4.8/5 coachee satisfaction.",
  },
  {
    question: "How does Supreme Coach ensure coaching quality?",
    answer:
      "Coaching quality is safeguarded through a multi-step vetting process, ongoing supervision and continuous evaluation. Our business coaches participate in professional development and are reviewed based on client feedback and measurable outcomes. This commitment to excellence guarantees consistency across all coaching experiences.",
  },
  {
    question: "What kind of results can I expect from Supreme Coach’s coaching?",
    answer:
      "Supreme Coach’s coaching approach is built around an evidence-based methodology. At the start of each coaching program, program managers select up to 12 focus areas from a library of 29 options. This creates a clear foundation and ensures development is anchored in the capabilities that matter most for the business, whether that means strengthening resilience, improving communication, elevating strategic thinking, or building leadership behaviors such as inclusion and collaboration.\n\nCoachees then choose the focus areas most relevant to their goals, complete assessments and track their progress over time. This approach keeps development highly personalized while staying closely aligned with organizational priorities.\n\nBecause the coaching journey is structured around these focus areas, the impact becomes easy to see and measure. Organizations gain visibility into which capabilities are improving and where behavior change is taking place across cohorts.\n\nThis is exactly what our customers are seeing in practice. For example, at SumUp, 80% of coachees reported improved self awareness and confidence, 70% felt better equipped to overcome challenges and 50% developed new skills in conflict resolution, strategic thinking and communication.",
  },
  {
    question: "Can Supreme Coach’s coaching be scaled across our organization?",
    answer:
      "Yes, Supreme Coach’s coaching is designed to scale seamlessly across organizations of any size. The platform, the coaching network and the customer support model are all built to ensure that companies can expand coaching from a small pilot to a global, enterprise-wide program without losing quality, consistency, or impact.\n\nA key enabler of this scalability is Supreme Coach’s global coach pool. With more than 3,500 certified business coaches available worldwide, organizations can offer high quality coaching to employees in every region. Coaches cover 80 languages and operate in more than 90 countries, making it easy to support diverse teams across time zones, cultures and business contexts.\n\nCombined with flexible program design, unified reporting and a digital platform that centralizes the entire coaching journey, Supreme Coach makes it simple for companies to roll out coaching broadly while keeping development aligned, measurable and highly qualitative at scale.",
  },
  {
    question: "How does Supreme Coach use technology in coaching?",
    answer:
      "Supreme Coach uses technology to make coaching smarter, more personalized, and easier to scale. AI matching connects each employee with the right coach based on their goals, experience, and preferences.\n\nThroughout the journey, tools like self assessments, 360 degree feedback, goal tracking, and smart nudges support continuous progress and keep coachees engaged. The platform also includes Supreme Coach Academy, offering curated learning resources that reinforce what is discussed in coaching sessions.\n\nOn the organizational side, dashboards provide clear visibility into engagement and progress across focus areas, making impact measurable.",
  },
  {
    question: "What is included in the Supreme Coach coaching experience?",
    answer:
      "Every Supreme Coach coaching journey includes one-to-one virtual sessions, progress tracking, goal setting, and access to curated learning resources. Participants work with a dedicated business coach who tailors the experience to their individual goals. This holistic, data-informed approach drives measurable personal and professional growth.",
  },
  {
    question:
      "Why do global companies choose Supreme Coach for business coaching?",
    answer:
      "Global companies choose Supreme Coach because it delivers high quality, scalable and measurable coaching across regions and business contexts. With a global network of more than 3,500 certified business coaches available in 80 languages and 90+ countries, organizations can offer consistent development to all employees, no matter where they are. This makes it easy to roll out coaching at scale while maintaining the same level of quality worldwide.\n\nCompanies also value Supreme Coach’s focus on impact. Coaching is structured around clear focus areas that align with organizational goals, and progress is measured through built-in self-assessments, 360° feedback and aggregated insights. This gives leaders visibility into real behavioral change and helps them demonstrate coaching impact.\n\nIn addition, the digital platform removes operational friction through AI coach matching, seamless scheduling, continuous learning resources and smart nudges that keep employees engaged. Combined with multilingual support from customer success managers, Supreme Coach offers a reliable, end-to-end solution that global organizations can trust to develop talent in a scalable, personalized and data driven way.",
  },
];

export const footerLinks: NavLink[] = [
  { label: "Faculty", href: "/faculty" },
  { label: "Community", href: "/students" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];