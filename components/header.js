import Link from "next/link";
import theme from "./style/theme";

export default () => (
  <header>
    <div className="content">
      <Link href="https://www.hexacta.com">
        <a>
          <img className="logo" src="/static/hexacta.png" alt="Hexacta" />
        </a>
      </Link>
      <nav>
        <Link prefetch href="/"><a className="active">Experiments</a></Link>
        <Link prefetch href="https://medium.com/hexacta"><a>Blog</a></Link>
      </nav>
    </div>

    <style jsx>
      {
        `
				header {
	        background: ${theme.darkPrimaryColor};
					color: ${theme.lightPrimaryColor};
				}

        .content {
          padding: 15px;
          max-width: ${theme.maxWidth};
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          width: 118px;
        }

        a {
          text-decoration: none;
          color: inherit;
          margin: 0 10px;
          transition-duration: 0.2s;
          transition-property: color;
        }

        a.active {
          padding-bottom: 5px;
          border-bottom: solid 2px ${theme.accentColor};
        }

        a:hover {
          color: ${theme.lightSecondaryColor};
        }
				`
      }
    </style>
  </header>
);
