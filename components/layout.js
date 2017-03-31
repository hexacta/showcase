import Head from "next/head";
import Header from "./header";

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />

    {children}

    <style jsx global>
      {
        `
				html, body {
					margin: 0;
					padding: 0;
				}
				`
      }
    </style>
  </div>
);
