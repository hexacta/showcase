import theme from "./style/theme";
import ExperimentHeader from "./experiment-header";
import ExperimentSection from "./experiment-section";

export default ({ experiment }) =>
  <div className="container">
    <ExperimentHeader experiment={experiment} />
    {experiment.sections.map((sec, i) =>
      <ExperimentSection key={i} section={sec} odd={i % 2} />
    )}
  </div>;
