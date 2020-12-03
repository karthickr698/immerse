import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import getEntities from "../../utils/getEntities";
import getChartData from "../../utils/getChartData";
import { averageValue } from "../../mock_data_supply";
import DashBoardScreen from "./DashBoardScreen";

const Department = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Dashboard", "Department").then((entitiesOptions) =>
      setEntities(entitiesOptions)
    );
    getChartData("Dashboard", "Department", "Management").then((res) =>
      console.log(res)
    );
  });
  return (
    <>
      <SelectSearch
        options={entities}
        search
        name="language"
        placeholder="Choose dashboard"
      />
      <div className="ChartCardCont">
        <DashBoardScreen data={averageValue} />
      </div>
    </>
  );
};

export default Department;
