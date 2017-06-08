import theme from "./style/theme";
import BlogLogo from "./blog-logo";

export default ({ title, avatar, author, url }) => {
  if (!title) return null;
  return (
    <a href={url}>
      <BlogLogo />
      <div className="content">
        <h3>{title}</h3>
        <div className="author">
          <span className="author-name">by {author}</span>
          <img src={avatar} alt={author} />
        </div>
      </div>
      <style jsx>{`
					a {
						background: ${theme.lightBackgroundColor};
						padding: 10px;
						border: 1px solid rgba(0,0,0,.04);
						border-radius: 4px;
						box-shadow: ${theme.lowShadow};
						transition: ${theme.shadowTransition};
						display: flex;
						align-items: center;
						cursor: pointer;
					}

					a:hover {
						box-shadow: ${theme.highShadow};
					}

					.content {
						flex: 1;
						padding: 0 5px 0 10px;
					}

					h3 {
						color: ${theme.darkPrimaryColor};
						font-weight: 400;
						font-size: 20px;
						line-height: 1.1;
						padding-top: 5px;
					}

					img {
						border-radius: 100%;
						width: 36px;
						height: 36px;
						display: inline-block;
					}

					.author {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						padding-top: 5px;
					}

					.author-name {
						color: ${theme.darkSecondaryColor};
						vertical-align: middle;
						padding: 2px 10px;
						font-size: 14px;
					}
				`}</style>
    </a>
  );
};
