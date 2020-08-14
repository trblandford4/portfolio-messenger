export const images = {
  qualcat: [
    { src: "https://i.imgur.com/mNVdd1E.png", alt: "Qualcat Dashboard" },
    {
      src: "https://i.imgur.com/Qs6xzdB.png",
      alt: "Qualcat Projects with Notification",
    },
    {
      src: "https://i.imgur.com/HqtFA50.png",
      alt: "Qualcat Transcript Editor",
    },
  ],
};

export const MESSAGES = {
  intro: [
    { id: 0, text: "Hello there 👋", loaded: true, delay: 0 },
    { id: 1, text: "I'm Ray", loaded: false, delay: 1 },
    {
      id: 2,
      text: "I build things for the web.",
      loaded: false,
      delay: 2,
    },
    {
      id: 3,
      text: "I'm a software engineer located in Washington, DC.",
      loaded: false,
      delay: 3,
    },
    {
      id: 4,
      text:
        "I've built software at Microsoft, Appian, Visa, and most recently my own startup.",
      loaded: false,
      delay: 4,
    },
    {
      id: 5,
      text: "Send me a message if you're interested in working together!",
      loaded: false,
      delay: 5,
    },
    { id: 6, text: "What else can I tell you about?", loaded: false, delay: 6 },
  ],
  skills: [
    {
      id: 10,
      text: "I use React and TypeScript to create fast, beautiful Web apps.",
      loaded: false,
      delay: 0,
    },
    {
      id: 11,
      text: "Node, Express, MongoDB or PostgreSQL give them more life.",
      loaded: false,
      delay: 1,
    },
    {
      id: 12,
      text: "& AWS keeps them online for me 🙏☁️💯",
      loaded: false,
      delay: 2,
    },
    {
      id: 13,
      text:
        "I'm learning new things everyday to make them even better! Currently that's GraphQL, Redis, Docker, Kubernetes, and WebPack.",
      loaded: false,
      delay: 3,
    },
  ],
  projects: [
    { id: 20, text: "Check these out:", loaded: false, delay: 0 },
    { id: 21, type: "image", paths: images.qualcat, loaded: false, delay: 1 },
    { id: 22, text: "This is Qualcat", loaded: false, delay: 2 },
  ],
};

export const ACTIONS = ["skills", "projects", "contact"];
