import theme from "./style/theme";
import BlogPost from "./blog-post";

export default ({ section, odd }) => (
  <section className={odd ? "odd" : "even"}>
    <div className="wrapper">
      <img src={section.img} alt={section.title} />
      <div className="content">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        <BlogPost {...section.blog} />
      </div>
    </div>
    <style jsx>
      {
        `
				.wrapper {
          max-width: ${theme.maxWidth};
          margin: 0 auto;
					padding: 30px;
					display: flex;
					flex-flow: row;
				}

				.odd .wrapper {
					flex-flow: row-reverse;
				}

				section.even {
					background: #eee;
				}

				h2 {
					font-size: 28px;
    			font-weight: 400;					
    			line-height: 32px;
					padding-bottom: 16px;
				}

				.content {
					padding: 10px 30px;
					flex: 1;
					min-width: 300px;
				}

				p {
					color: ${theme.darkSecondaryColor};
					padding-bottom: 20px;
				}
				`
      }
    </style>
  </section>
);
