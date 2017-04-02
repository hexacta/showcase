import theme from "./style/theme";

export default ({ children, filled, href }) => (
  <a className={filled && "filled"} href={href}>
    {children}
    <style jsx>
      {
        `
        a {
					display: block;
					padding: 10px 0;
					margin: 4px;
					letter-spacing: 1px;
					text-transform: uppercase;
					text-align: center;
					cursor: pointer;
          color: ${theme.accentColor};
          background: transparent;
          box-shadow: ${theme.lowShadow};
          transition: ${theme.shadowTransition};
        }

        a.filled {
          color: #fafafa;
          background: ${theme.accentColor};
        }

        a:hover {
          box-shadow: ${theme.highShadow};
        }
        `
      }
    </style>
  </a>
);
