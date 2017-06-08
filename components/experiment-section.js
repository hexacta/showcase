import theme from "./style/theme";
import BlogPost from "./blog-post";
import Repo from "./repo";
import SectionLink from "./section-link";

export default ({ section, odd }) =>
  <section className={odd ? "odd" : "even"}>
    <div className="wrapper">
      <img src={section.img} alt={section.title} className="preview ratio" />
      <div className="content">
        <h2>{section.title}</h2>
        <p>{section.description}</p>
        <BlogPost {...section.blog} />
        <Repo {...section.repo} />
        <SectionLink {...section.link} />
      </div>
    </div>
    <style jsx>
      {`
				.wrapper {
          max-width: ${theme.maxWidth};
          margin: 0 auto;
					padding: 30px;
					display: flex;
					flex-flow: row;
				}

				img {
					width: 300px;
					height: 300px;
				}

        @media (max-width: 720px) {
          img {
						display: none;
          }
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
				`}
    </style>
  </section>;
