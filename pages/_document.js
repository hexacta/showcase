import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                        ga('create', 'UA-2430758-17', 'auto');
                        ga('set', 'transport', 'beacon');
                        ga('send', 'pageview');
                    `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
