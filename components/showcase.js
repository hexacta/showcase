import Link from "next/link";

export default ({ experiments }) => (
  <div>
    {experiments.map(exp => (
      <Link prefetch href="/" key={exp.name}>
        <div>{exp.title}</div>
      </Link>
    ))}
  </div>
);
