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
					
      		transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
					
					box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
											0 1px 5px 0 rgba(0, 0, 0, 0.12),
											0 3px 1px -2px rgba(0, 0, 0, 0.2);
        }

				.container:hover {
					box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
											0 1px 10px 0 rgba(0, 0, 0, 0.12),
											0 2px 4px -1px rgba(0, 0, 0, 0.4);
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
