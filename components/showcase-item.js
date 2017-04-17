import theme from "./style/theme";

export default ({ experiment }) => (
  <div className="container rectangle">
    <img
      src={experiment.img}
      alt={experiment.title}
      className="preview ratio"
    />
    <h2>{experiment.title}</h2>
    <p>{experiment.description}</p>
    <style jsx>
      {
        `
        .container {
					flex: 1;
					min-width: 300px;
					max-width: 300px;
					margin: 16px;
					background: ${theme.lightBackgroundColor};
					border-radius: 5px;
					overflow: hidden;
					transition: ${theme.shadowTransition};
					box-shadow: ${theme.lowShadow};
        }				

				.container:hover {
					box-shadow: ${theme.highShadow};
				}

				img {
					width: 100%;
					min-height: 225px;
					background: grey;
				}

				h2 {
					font-size:1.3em;
					margin: 10px 8px;
					color: ${theme.darkPrimaryColor};
					padding: 0 10px;
				}

				p {
					line-height: 1.25em;
					height: 3.75em;
					overflow: hidden;
					margin: 10px 8px;
					padding: 0 10px;
				}
        `
      }
    </style>
  </div>
);
