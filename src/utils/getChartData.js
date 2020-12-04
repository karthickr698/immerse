import axios from "axios";
import { domain } from "./getDomain";

export default async function getChartData(section, dimension, category) {
  const { data } = await axios.get(
    `${domain}${section.toLowerCase()}?surveyName=None&&dimension=${dimension}&&category=${category}`
  );
  return data;
}
