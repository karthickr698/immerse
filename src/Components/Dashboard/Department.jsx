import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import getEntities from "../../utils/getEntities";
import getChartData from "../../utils/getChartData";
import { averageValue } from "../../mock_data_supply";
import DashBoardScreen from "./DashBoardScreen";
import Chart from '../chart'

const Department = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Dashboard", "Department").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
  }, []);
  const handleOnChange = (category) => {
    getChartData("Dashboard", "Department", category).then((res) =>
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
      <DashBoardScreen data={averageValue} />
      
    </>
  );
};

export default Department;
