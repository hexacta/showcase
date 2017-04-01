import Link from "next/link";
import theme from "./style/theme";
import ShowcaseItem from "./showcase-item";

export default ({ experiments }) => (
  <div className="container">
    {experiments.map(exp => (
      <Link prefetch href={`/experiment?name=${exp.name}`} key={exp.name}>
        <a>
          <ShowcaseItem experiment={exp} />
        </a>
      </Link>
    ))}
    <style jsx>
      {
        `
        .container {
          display: flex;
          justify-content: center;
          flex-flow: row wrap;
          margin: 10px auto;
          max-width: ${theme.maxWidth};
        }
        `
      }
    </style>
  </div>
);
