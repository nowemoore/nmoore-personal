import React from "react";
import { Link } from "react-router-dom";

// The "Lists" accordion. Items may be plain strings or JSX.
export const LISTS = [
  {
    id: "books",
    title: "My Fiction Faves",
    icon: "ph ph-book-open",
    items: [
      <><span style={{ textDecoration: "line-through" }}><strong>1984</strong> by George Orwell</span> (moved to a different list)</>,
      <><strong>Scythe</strong> by Neal Shusterman</>,
      <><strong>It's Kind of a Funny Story</strong> by Ned Vizzini</>,
      <><strong>The Curious Incident of the Dog in the Night-Time</strong> by Mark Haddon</>,
      <><strong>They Both Die at the End</strong> by Adam Silvera</>,
    ],
  },
  {
    id: "tea",
    title: "Tea",
    icon: "ph ph-coffee",
    items: [
      <><a href="https://www.youtube.com/watch?v=77wNujaN0x8" target="_blank" rel="noopener noreferrer">Gummiberry Juice</a> (Masala Chai)</>,
      "Fujian White",
      "Nai Xiang (Milk Oolong)",
      "Kukicha (Bocha)",
    ],
  },
  {
    id: "hottakes",
    title: "Hot Takes",
    icon: "ph ph-fire-extinguisher",
    items: [
      "Pineapple belongs on pizza.",
      "Star Wars is not sci-fi.",
      "Herbal tea is not tea.",
      "Em-dashes and emojis are not just for AI.",
      "Meatarian diet should be on an opt-in basis.",
      "Chalkboard > Whiteboard.",
      "Phonology is a part of grammar.",
      <>We've been getting women's ed <a href="https://www.linkedin.com/posts/nowemoore_more-women-to-cs-activity-7405274919942504448-LIT-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADVI9r8BealWxLZnSq_Pnf_1i5dDlii4Z80" target="_blank" rel="noopener noreferrer">all wrong</a>.</>,
    ],
  },
  {
    id: "shows",
    title: "Shows",
    icon: "ph ph-film-slate",
    items: [
      "Sherlock (the BBC one)",
      "Young Sheldon",
      "The Umbrella Academy",
      "Dark",
      "Man on the Inside",
      "Wednesday",
      "Touch",
      "Alice in Borderland",
      "This Is Us",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: "ph ph-translate",
    items: [
      <a href="https://en.wikipedia.org/wiki/Ch%CA%BCol_language" target="_blank" rel="noopener noreferrer">Ch'ol</a>,
      "Japanese",
      <a href="https://en.wikipedia.org/wiki/American_Sign_Language" target="_blank" rel="noopener noreferrer">ASL</a>,
      "French",
    ],
  },
  {
    id: "agency",
    title: "High Agency Quests",
    icon: "ph ph-plant",
    items: [
      "Stop scrolling",
      "Replicate a study",
      "Send a cold email",
      "Write up an idea",
      "Remake that restaurant food but custom your spices",
      "Outline a book",
      "Make a CV for a millenial",
    ],
  },
  {
    id: "random",
    title: "Misc Beliefs",
    icon: "ph ph-rainbow",
    items: [
      "Actions create clarity.",
      <><Link to="/blog/changing-bases">Changing bases</Link> is the most important skill for the next century or so.</>,
      "Learning new languages is good for your brain.",
      "People don't remember what happened but how it made them feel.",
      "Writing things down changes how you think about them.",
      "Spreadsheets are underrated.",
      "Who watches/owns a TV anymore?",
    ],
  },
];
