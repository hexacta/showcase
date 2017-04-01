import getExperiments from "./get-experiments";
export default async name => {
  const experiments = await getExperiments();
  return experiments.find(e => e.name == name);
};
