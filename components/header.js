import Link from "next/link";
import theme from "./style/theme";
import Title from "./header-title";

export default () => (
  <header>
    <div className="content">
      <a href="https://www.hexacta.com/?hil">
        <img className="logo" src="/static/hexacta.png" alt="Hexacta" />
      </a>
      <Link prefetch href="/">
        <a className="title"> <Title /></a>
      </Link>
      <nav>
        <Link prefetch href="/"><a className="active">Experiments</a></Link>
        <a href="https://medium.com/hexacta">Blog</a>
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

        @media (max-width: 600px) {
          .title {
            display: none;
          }
        }        
				`
      }
    </style>
  </header>
);
