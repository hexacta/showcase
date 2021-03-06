import React from "react";
import Layout from "../components/layout";
import Showcase from "../components/showcase";
import getExperiments from "../data/get-experiments";

export default class extends React.Component {
  static async getInitialProps() {
    const experiments = await getExperiments();
    return { experiments };
  }

  render = () =>
    <Layout title="Innovation Labs">
      <Showcase experiments={this.props.experiments} />
    </Layout>;
}
