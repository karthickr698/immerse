import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const HighestQualification = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Dashboard", "HighestQualification").then((entitiesOptions) =>
      setEntities(entitiesOptions)
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
        <Chart data={averageValue} />
      </div>
    </>
  );
};

export default HighestQualification;
