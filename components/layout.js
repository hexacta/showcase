import Head from "next/head";
import Header from "./header";
import theme from "./style/theme";

export default ({ children, title }) => (
  <div>
    <Head>
      <title>{`Hexacta - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />

    {children}

    <style jsx global>
      {
        `
				* {
					margin: 0;
					padding: 0;
				}

        a {
          text-decoration: none;
          color: inherit;
        }

        html {
          background: #333;
        }
				`
      }
    </style>
  </div>
);
