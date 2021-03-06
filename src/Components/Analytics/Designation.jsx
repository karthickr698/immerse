import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import getChartData from "../../utils/getChartData";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const Designation = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Analytics", "Designation").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
  }, []);
  const handleOnChange = (category) => {
    getChartData("Analytics", "Designation", category).then((res) =>
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

export default Designation;
