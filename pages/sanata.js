import React from "react";
import Layout from "../components/layout";
import Experiment from "../components/experiment";
import getExperiment from "../data/get-experiment";

export default class extends React.Component {
  static async getInitialProps() {
    const experiment = await getExperiment("sanata");
    return { experiment };
  }

  render = () =>
    <Layout title={this.props.experiment.title}>
      <Experiment experiment={this.props.experiment} />
    </Layout>;
}
