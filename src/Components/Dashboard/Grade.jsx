import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import getChartData from "../../utils/getChartData";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const Grade = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Dashboard", "Grade").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
    getChartData("Dashboard", "Grade", "Management").then((res) =>
      console.log(res)
    );
  }, []);
  const handleOnChange = (category) => {
    getChartData("Dashboard", "Grade", category).then((res) =>
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

export default Grade;
