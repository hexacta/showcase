const base = "/static/";
export default {
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
        author: "someone",
        avatar: base + "unknown-avatar.png"
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
        title: "Automatic deployment of multiple Docker containers to Google Container Engine using Travis",
        url: "https://medium.com/hexacta-engineering/automatic-deployment-of-multiple-docker-containers-to-google-container-engine-using-travis-e5d9e191d5ad",
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
        url: "https://medium.com/",
        author: "Rodrigo Pombo",
        avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    }
  ]
};
