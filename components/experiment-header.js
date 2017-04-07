import theme from "./style/theme";
import Button from "./button";

export default ({ experiment }) => (
  <header>
    <div>
      <h1>{experiment.title}</h1>
      <p>{experiment.description}</p>
    </div>
    <nav>
      <Button filled href={experiment.launch}>Launch</Button>
      <Button href={experiment.repo}>Get the Code</Button>
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
					font-size: 34px;
    			font-weight: 600;		
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

        @media (max-width: 600px) {
          header {
						flex-direction: column;
          }

					nav {
						width: 100%;
						padding: 0 10px;
					}
        }  
        `
      }
    </style>
  </header>
);
