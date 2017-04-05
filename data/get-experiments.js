const base = "static/";

export default async () => {
  return [
    {
      name: "sanata",
      title: "Sanata",
      img: base + "sanata.png",
      launch: "http://sanata.hexacta.com",
      repo: "https://github.com/hexacta/sanata",
      description: "Web application showing auto generated tweets based on a Markov Chain model of a given Twitter user.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["React", "Docker", "Google Cloud", "Twitter", "NLP", "Node"],
      sections: [
        {
          title: "Twitter Integration",
          description: `Twitter provides an API that can be used to get user's timeline, but with two limitations, first you can get at most 200 tweets per request, second there is a 1500 request rate limit.
The following post explains how Sanata handle this:`,
          img: base + "sanata/twitter.png",
          blog: {
            title: "Get all tweets from one user using Twitter API",
            url: "https://medium.com/",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        },
        {
          title: "Markov Chains",
          description: "Markov chains are a simple but powerful models. One of the things you can do with them is automatic text generation. The Markov chain algorithm that Sanata uses is now available as an NPM package.",
          img: base + "sanata/markov.png",
          repo: {
            title: "hexacta/markov-chain",
            url: "https://github.com/hexacta/markov-chain",
            description: "Create, update and run Markov chain models for text generation."
          }
        },
        {
          title: "Continuous Delivery with Google Cloud",
          description: `One of the goals of this project was to provide a way of deploying all the app modules as easy as a git push. This was achieved using Docker, Kubernetes and Google Container Engine as described in this post:`,
          img: base + "sanata/gcloud.png",
          blog: {
            title: "Continuous Delivery of NGINX and Node with Travis and Google Container Engine",
            url: "https://medium.com/@pomber/continuous-delivery-of-nginx-node-and-mongo-with-travis-and-google-container-engine-e5d9e191d5ad",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        },
        {
          title: "Travis Conditional Deploys",
          description: `We have two environments for Sanata, test and production. Test environment is always running the last code pushed to the master branch. Production is only updated when a new version is pushed using a git tag.`,
          img: base + "sanata/travis.png",
          blog: {
            title: "Deploy to different environments with Travis using git tags",
            url: "https://medium.com/@pomber/continuous-delivery-of-nginx-node-and-mongo-with-travis-and-google-container-engine-e5d9e191d5ad",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        }
      ]
    },
    {
      name: "planning-deck",
      title: "Planning Deck",
      description: "Progressive web app that looks and feels like a deck of planning poker cards.",
      img: base + "planning-deck.png",
      launch: "https://planning-deck.hexacta.com",
      repo: "https://github.com/hexacta/planning-deck",
      tags: ["Polymer", "Mobile", "PWA", "Firebase"],
      sections: [
        {
          title: "Performant Dragging Animations",
          description: "Animations should be rendered at 60fps, that makes fluent dragging animations a challenge to the developer, because the animation depends on the real-time user interaction and you have less than 16ms to draw the new frame.",
          img: base + "planning-deck/performant.gif",
          blog: {
            title: "Tips for dragging animations",
            url: "https://medium.com/",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        },
        {
          title: "Rotating Elements",
          description: "Making css rotations work as expected is not as easy as it sounds. Sometimes the best approach is try until you find what you want. You will find it faster if you have visual feedback:",
          img: base + "planning-deck/rotate.png",
          blog: {
            title: "Tune your CSS transform origin and rotation visually",
            url: "https://medium.com/@pomber/tune-your-css-transform-origin-and-rotation-visually-b043a8b1a03e",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        }
      ]
    },
    {
      name: "showcase",
      title: "Showcase",
      description: "React website, statically rendered, showcasing some experiments.",
      img: base + "showcase.png",
      repo: "https://github.com/hexacta/showcase",
      launch: "https://showcase.hexacta.com",
      tags: ["React", "Web"],
      sections: [
        {
          title: "Static Rendering",
          description: "This site is dynamic in the sense that depends on the list and details of experiments to show. But experiments don't change to often, so every time there are changes, we can rebuild it as a static site by re-rendering all the pages and components.",
          img: base + "showcase/render.png",
          blog: {
            title: "React Static Rendering",
            url: "https://medium.com/",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        },
        {
          title: "Grid Layout",
          description: "Grid Layout is here, supported by all the major browsers.",
          img: base + "showcase/grid.png",
          blog: {
            title: "Showing a grid of cards is now much easier and flexible thanks to Grid Layout.",
            url: "https://medium.com/",
            author: "Rodrigo Pombo",
            avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
          }
        }
      ]
    }
  ];
};
