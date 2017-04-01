import theme from "./style/theme";

const colors = filled => {
  return filled
    ? `
    color: ${theme.darkPrimaryColor};
    background: ${theme.accentColor};`
    : `
    color: ${theme.accentColor};
    background: transparent;`;
};

export default ({ children, filled }) => (
  <a>
    {children}
    <style jsx>
      {
        `
        a {
					display: block;
					border: 1px solid ${theme.accentColor};
					padding: 10px 0;
					margin: 4px;
					letter-spacing: 1px;
					text-transform: uppercase;
					text-align: center;
					cursor: pointer;
  				${colors(false)}
        }
        `
      }
    </style>
  </a>
);
