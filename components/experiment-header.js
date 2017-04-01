import theme from "./style/theme";
import Button from "./button";

export default ({ experiment }) => (
  <header>
    <div>
      <h1>{experiment.title}</h1>
      <p>{experiment.description}</p>
    </div>
    <nav>
      <Button>Launch</Button>
      <Button>Get the Code</Button>
    </nav>
    <style jsx>
      {
        `
        header {
					display: flex;
					justify-content: space-between;
          max-width: ${theme.maxWidth};
          margin: 0 auto 20px;
        }

				h1 {
					padding: 12px;
				}

				p {
					margin: 0;
					color: ${theme.darkSecondaryColor};
					line-height: 1.3em;
					padding: 12px;
					font-size: 18px;
				}
				nav {
					min-width: 200px;
					width: 300px;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
        `
      }
    </style>
  </header>
);
