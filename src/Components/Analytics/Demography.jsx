import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import getChartData from "../../utils/getChartData";
import Chart from "../chart";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const Demography = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Analytics", "Demography").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
  }, []);
  const handleOnChange = (category) => {
    getChartData("Analytics", "Demography", category).then((res) =>
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

export default Demography;
