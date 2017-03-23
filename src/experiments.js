const base = process.env.PUBLIC_URL;
const EXPERIMENTS = [
  {
    name: "sanata",
    title: "Sanata",
    img: base + "/img/sanata.png",
    launch: "http://sanata-test.hexacta.com",
    repo: "https://github.com/hexacta/sanata",
    description: "Web application showing auto generated tweets based on a Markov Chain model of a given Twitter user.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    name: "planning-deck",
    title: "Planning Deck",
    img: base + "/img/planning-deck.png",
    launch: "https://planning-deck.firebaseapp.com",
    repo: "https://github.com/hexacta/planning-deck"
  },
  {
    name: "showcase",
    title: "Showcase",
    img: base + "/img/showcase.png",
    repo: "https://github.com/hexacta/showcase"
  }
];

export default EXPERIMENTS;
