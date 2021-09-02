const TEAM_MEMBERS = [
  {
    name: "Christopher Glood",
    discord: "Chrosto#5009",
    avatar: "https://avatars.githubusercontent.com/u/36427177?v=4",
    socialMedia: [
      {
        name: "Github",
        url: "https://github.com/akachrosto",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/akachrosto",
      },
    ],
    technologies: [],
  },
  {
    name: "Douglas Lovera",
    discord: "DouLo#0763",
    avatar: "https://avatars.githubusercontent.com/u/42481580?v=4",
    socialMedia: [
      {
        name: "Link",
        url: "https://doulovera.vercel.app/",
      },
      {
        name: "Github",
        url: "https://github.com/doulovera",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/doulovera",
      },
    ],
    technologies: [
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Node.js",
    ],
  },
];

export default function team(req, res) {
  res.status(200).json(TEAM_MEMBERS);
}
