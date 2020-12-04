import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import getChartData from "../../utils/getChartData";
import Chart from "../chart";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const HighestQualification = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Analytics", "Highest Qualification").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
  }, []);
  const handleOnChange = (category) => {
    getChartData("Analytics", "Highest Qualification", category).then((res) =>
      console.log(res)
    );
  };
  return (
    <>
      <SelectSearch
        options={entities}
        search
        autoComplete
        onChange={handleOnChange}
        name="language"
        placeholder="Choose dashboard"
      />
      <div className="ChartCardCont">
        <Chart data={averageValue} />
      </div>
    </>
  );
};

export default HighestQualification;
