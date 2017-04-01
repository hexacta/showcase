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
					margin: 7px;
					background: ${theme.lightBackgroundColor};
					border-radius: 5px;
					overflow: hidden;
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
