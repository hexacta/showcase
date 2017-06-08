const base = "/static/";
export default {
  name: "planning-deck",
  title: "Planning Deck",
  description:
    "Progressive web app that looks and feels like a deck of planning poker cards.",
  img: base + "planning-deck.png",
  launch: "https://planning-deck.hexacta.com",
  repo: "https://github.com/hexacta/planning-deck",
  tags: ["Polymer", "Mobile", "PWA", "Firebase"],
  sections: [
    // {
    //   title: "Performant Dragging Animations",
    //   description: "Animations should be rendered at 60fps, that makes fluent dragging animations a challenge to the developer, because the animation depends on the real-time user interaction and you have less than 16ms to draw the new frame.",
    //   img: base + "planning-deck/performant.gif",
    //   blog: {
    //     title: "Tips for dragging animations",
    //     url: "https://medium.com/",
    //     author: "Rodrigo Pombo",
    //     avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
    //   }
    // },
    {
      title: "Progressive Web App",
      description:
        "Planning Deck scores 87/100 on Lighthouse PWA test. The test validates PWA best practices and performance. This app includes good practices like: custom splash screen, offline support, mobile-friendly design, fast page load, etc.",
      img: base + "planning-deck/lighthouse.png",
      link: {
        title: "Lighthouse Report",
        url:
          "https://googlechrome.github.io/lighthouse/viewer/?gist=ee2003a2556b17e22b102f835d00db14",
        img: base + "planning-deck/score.png"
      }
    },
    {
      title: "Rotating Elements",
      description:
        "Making css rotations work as expected is not as easy as it sounds. Sometimes the best approach is try until you find what you want. You will find it faster if you have visual feedback:",
      img: base + "planning-deck/rotate.png",
      blog: {
        title: "Tune your CSS transform origin and rotation visually",
        url:
          "https://medium.com/hexacta-engineering/tune-your-css-transform-origin-and-rotation-visually-b043a8b1a03e",
        author: "Rodrigo Pombo",
        avatar:
          "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    }
  ]
};
