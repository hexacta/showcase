import theme from "./style/theme";

export default ({ section }) => (
  <section>
		<div>
			<h1>{section.title}</h1>
			<p>{section.description}</p>
		</div>
  </section>
);
