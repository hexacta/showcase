const base = "/static/";
export default {
  name: "didact",
  title: "Didact",
  description: "A DIY guide to build your own React.",
  img: base + "didact.png",
  repo: "https://github.com/hexacta/didact",
  launch: "https://codepen.io/pomber/pen/RVqBrx",
  tags: ["React", "Web"],
  sections: [
    {
      title: "Didact Introduction",
      description: "Introducing Didact. Why sometimes it's a good idea to reinvent the wheel and how re-writing main features is easier than it sounds.",
      img: base + "didact/intro.png",
      blog: {
        title: "Didact: a DIY guide to build your own React",
        url: "https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5",
        author: "Rodrigo Pombo",
        avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    },
    {
      title: "Rendering DOM elements",
      description: "We add React's most basic feature: rendering elements to the DOM. We include element properties, event listeners and children.",
      img: base + "didact/render.png",
      blog: {
        title: "Didact: Rendering DOM elements",
        url: "https://engineering.hexacta.com/didact-rendering-dom-elements-91c9aa08323b",
        author: "Rodrigo Pombo",
        avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    },
    {
      title: "Element creation and JSX",
      description: "We include some syntactic sugar with JSX and provide a less verbose way to define elements.",
      img: base + "didact/jsx.png",
      blog: {
        title: "Didact: Element creation and JSX",
        url: "https://engineering.hexacta.com/didact-element-creation-and-jsx-d05171c55c56",
        author: "Rodrigo Pombo",
        avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    },
    {
      title: "Virtual DOM and reconciliation",
      description: "The more complex part of React is the virtual DOM and the reconciliation algorithm. We add our own version to Didact:",
      img: base + "didact/demo.gif",
      blog: {
        title: "Didact: Instances, reconciliation and virtual DOM",
        url: "https://engineering.hexacta.com/didact-instances-reconciliation-and-virtual-dom-9316d650f1d0",
        author: "Rodrigo Pombo",
        avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    },
    {
      title: "Components and State",
      description: "Finally, with everything else put in place, we add components to Didact and cover a big part of React use cases.",
      img: base + "didact/components.gif",
      blog: {
        title: "Didact: Components and State",
        url: "https://engineering.hexacta.com/didact-components-and-state-53ab4c900e37",
        author: "Rodrigo Pombo",
        avatar: "https://cdn-images-1.medium.com/fit/c/32/32/1*lJ3fWONmPl2rX1QMolsanA.jpeg"
      }
    },
  ]
};
