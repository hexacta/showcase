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
    <style jsx>
      {
        `
        header {
					display: flex;
					justify-content: space-between;
					margin-bottom: 20px;
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
