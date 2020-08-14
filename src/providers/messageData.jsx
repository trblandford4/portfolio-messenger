import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

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
  crwn: [
    { src: "https://i.imgur.com/W2fhioO.png", alt: "CRWN Clothing Home Page" },
    {
      src: "https://i.imgur.com/96Rtcoc.png",
      alt: "CRWN Checkout Page",
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
      text:
        "Every project is different, and I aim to choose the right tech for the job.",
      loaded: false,
      delay: 0,
    },
    {
      id: 11,
      text:
        "I prefer React w/ TypeScript for creating fast, beautiful Web apps.",
      loaded: false,
      delay: 1,
    },
    {
      id: 12,
      text: "Node, Express, MongoDB or PostgreSQL bring them to life.",
      loaded: false,
      delay: 2,
    },
    {
      id: 13,
      text: "& AWS keeps them online for me 🙏☁️💯",
      loaded: false,
      delay: 3,
    },
    {
      id: 14,
      text:
        "I'm constantly learning new things -- currently that's GraphQL, Redis, Docker, Kubernetes, and WebPack.",
      loaded: false,
      delay: 4,
    },
  ],
  projects: [
    { id: 20, text: "Check these out:", loaded: false, delay: 0 },
    { id: 21, type: "image", paths: images.qualcat, loaded: false, delay: 1 },
    {
      id: 22,
      text: (
        <span>
          1) Qualcat is an application I built that helped shorten the time for
          qualitative analyst get to meaningful insights from their audio data
          by as much as 74%! It featured:
          <ul>
            <li>Speech-to-text transcription</li>
            <li>Project management and sharing</li>
            <li>Real-time notifications</li>
            <li>
              An intuitive editor with word confidence, current word
              highlighting, and audio playback controls
            </li>
            <li>
              support for multiple audio file formats and natural languages
            </li>
          </ul>
        </span>
      ),
      loaded: false,
      delay: 2,
    },
    {
      id: 23,
      text: (
        <span>
          2) I was part of the award-winning team that helped The Ocean Cleanup
          use Microsoft AI to clean up plastic from our oceans!{" "}
          <FontAwesomeIcon icon={faMicrosoft} />
          🧠🌎🐢
          <br />
          <br />
          <a
            href="https://www.linkedin.com/pulse/plastic-free-oceans-2-hackathon-project-microsoft-ocean-wilkinson/"
            aria-label="Latest info on the project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here's the latest on that project.
          </a>
        </span>
      ),
      loaded: false,
      delay: 3,
    },
    { id: 24, type: "image", paths: images.crwn, loaded: false, delay: 4 },
    {
      id: 25,
      text: (
        <span>
          3) Here's an e-commerce application built using React, Redux, Hooks,
          GraphQL, ContextAPI, Stripe, and Firebase.
          <br />
          <a
            href="https://www.linkedin.com/pulse/plastic-free-oceans-2-hackathon-project-microsoft-ocean-wilkinson/"
            aria-label="Latest info on the project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out live!
          </a>
          <br />
          <br />
          <em>Note:</em> You may have to wait a few seconds for Heroku's servers
          to spin back up.
        </span>
      ),
      loaded: false,
      delay: 5,
    },
    {
      id: 26,
      text: (
        <span>
          I'm always working on new things, so check out my{" "}
          <a
            href="https://github.com/trblandford4"
            aria-label="Github link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          or{" "}
          <a href="mailto:hello@rayblandford.com" aria-label="Email">
            shoot me a message
          </a>{" "}
          if you want to create something together!
        </span>
      ),
      loaded: false,
      delay: 6,
    },
  ],
};

export const ACTIONS = ["skills", "projects", "contact"];
