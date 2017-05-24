import sanata from "./sanata";
import planningDeck from "./planning-deck";
import showcase from "./showcase";
import didact from "./didact";

export default async () => {
  return [didact, sanata, planningDeck, showcase];
};
