// Every past project, talk, course and post, newest first.
// `tags` are drawn from TAGS; internal hrefs (/blog/...) render as router Links.
export const TAGS = ["All", "AI", "IRL stuff", "languages", "unsolicited opinions", "art"];

export const WORK = [
  {
    date: "Sep 2026",
    title: "Pacing the Frontier: A Framework & Research Agenda",
    tags: ["AI"],
    description:
      "How should we think about pacing frontier AI? We bid for a unified research field on all the options, and lay out a broad framework and 23 open questions we'll need to answer to act flexibly and sanely.",
    links: [{ label: "Read", href: "https://pacing.tech/" }],
  },
  {
    date: "Sep 2026",
    title: "Graphene Fellowship",
    tags: ["IRL stuff", "AI"],
    description:
      "Building this experimental fellowship for strategy-curious talent to tackle open questions on building resilient post-TAI societies and to design solutions that close strategic gaps. Get in touch to get involved.",
    links: [{ label: "Site", href: "https://nowemoore.github.io/graphene/" }],
  },
  {
    date: "Nov 2025",
    title: "Changing Bases",
    tags: ["unsolicited opinions", "AI"],
    description: "And why I think it is more important than most people realise.",
    links: [{ label: "Read", href: "/blog/changing-bases" }],
  },
  {
    date: "Aug to Dec 2025",
    title: "Python from the Very Beginning",
    tags: ["IRL stuff"],
    description:
      "8-week intro course to Python programming for a women's ed NGO in CEE. Covers major barriers to entry such as environment setup and applied examples.",
    links: [
      { label: "Course", href: "https://ajtyvit.sk/podujatia/zacni-s-pythonom/" },
      { label: "Repo", href: "https://github.com/nowemoore/pythoness/tree/main" },
    ],
  },
  {
    date: "Aug 2025",
    title: "Fermi Problems",
    tags: ["unsolicited opinions"],
    description:
      "A showcase of estimation problems and solutions. General intuitions for my decision tree.",
    links: [{ label: "Read", href: "/blog/fermi-problems" }],
  },
  {
    date: "Aug 2025",
    title: "Fight Classy",
    tags: ["unsolicited opinions"],
    description: "How to become a more likeable person to argue with.",
    links: [{ label: "Read", href: "/blog/fight-classy" }],
  },
  {
    date: "Jul 2025",
    title: "FGLI Guide",
    tags: ["unsolicited opinions"],
    description: "Tangible observations from my experience as a first-gen student at Penn.",
    links: [{ label: "Read", href: "/blog/fgli-guide" }],
  },
  {
    date: "Jun 2025",
    title: "Minimum Feature Specification: Tool for Formal Phonology",
    tags: ["languages"],
    description: "A user-friendly tool for early-stage phonological analysis.",
    links: [
      { label: "Tool", href: "https://nowemoore.github.io/phonology-app/" },
      { label: "Help", href: "https://nowemoore.github.io/phonology-app/help.html" },
    ],
  },
  {
    date: "May 2025",
    title: "Hedging Our Bets on LLMs",
    tags: ["AI"],
    description:
      "HCI-focused thesis on human perception of linguistic uncertainty expressions and LLM calibration.",
    links: [{ label: "Paper", href: "/docs/ma-thesis.pdf" }],
  },
  {
    date: "May 2025",
    title: "Not Everything is up for Debate",
    tags: ["AI"],
    description:
      "Pilot project exploring sycophancy behavior in LLMs based on training data representation.",
    links: [{ label: "Paper", href: "/docs/syc-paper.pdf" }],
  },
  {
    date: "Apr 2025",
    title: "AI Safety & Social Impacts of AI Ideathon",
    tags: ["IRL stuff"],
    description:
      "Saturday ideathon bringing together academics from diverse fields to brainstorm safety questions in AI.",
    links: [
      { label: "Write-up", href: "https://omnia.sas.upenn.edu/story/new-mind-AI-nikola-moore" },
      { label: "Poster", href: "/images/ai4g-poster.jpg" },
    ],
  },
  {
    date: "Feb to Mar 2025",
    title: "AI Safety Workshop Series",
    tags: ["IRL stuff"],
    description:
      "3-session workshop series introducing AI safety concepts to academics from diverse fields.",
    links: [
      { label: "Write-up", href: "https://omnia.sas.upenn.edu/story/new-mind-AI-nikola-moore" },
      { label: "Poster", href: "/images/tnm.jpg" },
    ],
  },
  {
    date: "May 2024",
    title: "How Close is Close Enough?",
    tags: ["languages"],
    description:
      "Experimental study testing English native speakers' sensitivity to phonemic differences.",
    links: [
      { label: "Paper", href: "/docs/cam-paper-1.pdf" },
      { label: "Abstract", href: "/docs/se-abs.pdf" },
    ],
  },
  {
    date: "May 2024",
    title: "Early and Late Ergativity",
    tags: ["languages"],
    description:
      "Theoretical review of ergative systems in Hindi and Ch'ol with predictions on early learner language acquisition.",
    links: [{ label: "Paper", href: "/docs/erg-paper.pdf" }],
  },
  {
    date: "Mar 2024",
    title: "Crushes",
    tags: ["art"],
    description: "A field report from my trip to Canada.",
    links: [{ label: "Read", href: "/blog/crushes" }],
  },
  {
    date: "Sep 2023",
    title: "Observers",
    tags: ["unsolicited opinions"],
    description: "A rant and a wish for Central Europe.",
    links: [{ label: "Read", href: "https://dennikn.sk/blog/3589646/divaci/" }],
  },
  {
    date: "May 2023",
    title: "More Misery Is Coming",
    tags: ["languages"],
    description:
      "A closer look at the scope of AGREE versus the scope of Negative Concord in West Slavic languages.",
    links: [
      { label: "Paper", href: "/docs/neg-paper.pdf" },
      { label: "Abstract", href: "/docs/neg-abs.pdf" },
      { label: "Poster", href: "/docs/neg-post.pdf" },
    ],
  },
  {
    date: "Dec 2022",
    title: "Czech 'SE': Multiple Functions Are Better than One",
    tags: ["languages"],
    description:
      "Documentation of my search for implicit and/or explicit linguistic agents in various constructions using the 'SE' particle.",
    links: [
      { label: "Paper", href: "/docs/se-paper.pdf" },
      { label: "Abstract", href: "/docs/se-abs.pdf" },
    ],
  },
  {
    date: "May 2022",
    title: "There's Something about the French Bread",
    tags: ["art"],
    description: "A shamelessly oversentimental piece about home.",
    links: [{ label: "Read", href: "/blog/french-bread" }],
  },
];

// What's live right now — shown in the hero beside the name.
export const CURRENTLY = [
  {
    status: "AI",
    title: "Pacing the Frontier",
    date: "Sep 2026",
    text:
      "How should we think about pacing frontier AI? A unified framework and 23 open questions we'll need to answer to act flexibly and sanely.",
    links: [{ label: "Read", href: "https://pacing.tech/" }],
  },
  {
    status: "IRL stuff",
    title: "Graphene Fellowship",
    date: "Sep 2026",
    text:
      "An experimental fellowship for strategy-curious talent to tackle open questions on resilient post-TAI societies. Get in touch to get involved.",
    links: [{ label: "Site", href: "https://nowemoore.github.io/graphene/" }],
  },
  {
    status: "unsolicited opinions",
    title: "Fermi Problems",
    date: "Aug 2025",
    text: "Building out estimation intuitions for my decision tree.",
    links: [{ label: "Read", href: "/blog/fermi-problems" }],
  },
];

export const CONTACTS = [
  { label: "GitHub", icon: "ph ph-github-logo", url: "https://github.com/nowemoore" },
  { label: "LinkedIn", icon: "ph ph-linkedin-logo", url: "https://www.linkedin.com/in/nowemoore/" },
  { label: "Instagram", icon: "ph ph-instagram-logo", url: "https://www.instagram.com/nowe.moore/" },
  { label: "Facebook", icon: "ph ph-facebook-logo", url: "https://www.facebook.com/nika.datkova" },
  { label: "Email", icon: "ph ph-envelope-simple", url: "mailto:nowe.moore@gmail.com" },
  { label: "More", icon: "ph ph-dots-three-outline", url: "https://forms.gle/cRouWxe3XHBuJqUs6" },
];
