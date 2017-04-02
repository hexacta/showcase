import theme from "./style/theme";

export default ({ experiment }) => (
  <div className="container rectangle">
    <img src={experiment.img} alt={experiment.title} className="square" />
    <h2>{experiment.title}</h2>
    <style jsx>
      {
        `
        .container {
					flex: 1;
					min-width: 200px;
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
				}

				h2 {
					font-size:1.3em;
					margin: 10px 8px;
					color: ${theme.darkPrimaryColor};
					text-align: center;
				}
        `
      }
    </style>
  </div>
);
