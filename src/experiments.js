const base = process.env.PUBLIC_URL;
const EXPERIMENTS = [
  {
    name: "sanata",
    title: "Sanata",
    img: base + "/img/sanata.png",
    launch: "http://sanata-test.hexacta.com",
    repo: "https://github.com/hexacta/sanata",
    description: "Web application showing auto generated tweets based on a Markov Chain model of a given Twitter user.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    tags: ["React", "Docker", "Google Cloud", "Twitter", "NLP", "Node"],
    sections: [
      {
        title: "Markov Chain",
        description: "Sanata generates a Markov Chain...",
        img: base + "/img/sanata.png",
        blog: {
          title: "Markov Chaining",
          url: "https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738",
          author: "Rodrigo Pombo",
          avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
        }
      },
      {
        title: "Twitter Integration",
        description: `Twitter provides an API that can be used to get user's timeline, but with two limitations, first you can get at most 200 tweets per request, second there is a 1500 request rate limit.
The following post explains how Sanata handle this:`,
        img: base + "/img/sanata.png",
        blog: "https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738"
      },
      {
        title: "Continuous Delivery with Google Cloud",
        description: `One of the goals of this project was to provide a way of deploying all the app modules as easy as a git push. This was achieved using Docker, Kubernetes and Google Container Engine as described in this post:`,
        img: base + "/img/sanata.png",
        blog: "https://medium.com/@jdaudier/how-to-create-and-publish-your-first-node-js-module-444e7585b738"
      }
    ]
  },
  {
    name: "planning-deck",
    title: "Planning Deck",
    img: base + "/img/planning-deck.png",
    launch: "https://planning-deck.firebaseapp.com",
    repo: "https://github.com/hexacta/planning-deck",
    tags: ["Polymer", "Mobile", "PWA", "Firebase"]
  },
  {
    name: "showcase",
    title: "Showcase",
    img: base + "/img/showcase.png",
    repo: "https://github.com/hexacta/showcase",
    tags: ["React", "Web"]
  }
];

export default EXPERIMENTS;
