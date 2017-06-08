import theme from "./style/theme";

export default ({ title, url, img }) => {
  if (!title) return null;
  return (
    <a href={url}>
      <img src={img} alt={title} />
      <div className="content">
        <h3>{title}</h3>
      </div>
      <style jsx>
        {`
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
						font-size: 22px;
						line-height: 1.1;
						padding-top: 5px;
					}

					p {
						font-size: 16px;						
						color: ${theme.darkSecondaryColor};
						display: flex;
						align-items: center;
						padding-top: 5px;
					}
					`}
      </style>
    </a>
  );
};
