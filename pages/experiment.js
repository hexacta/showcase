import React from "react";
import Layout from "../components/layout";
import Experiment from "../components/experiment";
import getExperiment from "../data/get-experiment";

export default class extends React.Component {
  static async getInitialProps({ query: { name } }) {
    const experiment = await getExperiment(name);
    return { experiment };
  }

  render = () => (
    <Layout>
      <Experiment experiment={this.props.experiment} />
    </Layout>
  );
}
