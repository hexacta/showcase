import theme from "./style/theme";

export default ({ experiment }) => (
  <header>
		<div>
			<h1>{experiment.title}</h1>
			<p>{experiment.description}</p>
		</div>
		<nav>
			<button>Launch</button>
			<button>Get the Code</button>
		</nav>
  </header>
);
