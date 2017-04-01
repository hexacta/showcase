import Link from "next/link";

export default ({ experiments }) => (
  <div>
    {experiments.map(({ name, title }) => (
      <Link prefetch href={`/experiment?name=${name}`} key={name}>
        <a>{title}</a>
      </Link>
    ))}
  </div>
);
