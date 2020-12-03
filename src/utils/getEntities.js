import axios from "axios";
import { domain } from "./getDomain";

export default async function getEntities(section, dimension) {
  const {
    data: { Entities },
  } = await axios.get(
    `${domain}getEntities?surveyName=None&&section=${section}&&dimension=${dimension}`
  );
  return Entities.map((str) => ({
    name: str,
    value: str,
  }));
}