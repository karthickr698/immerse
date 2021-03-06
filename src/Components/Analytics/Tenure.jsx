import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import getChartData from "../../utils/getChartData";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const Tenure = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Analytics", "Tenure").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
  }, []);
  const handleOnChange = (category) => {
    getChartData("Analytics", "Tenure", category).then((res) =>
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

export default Tenure;
