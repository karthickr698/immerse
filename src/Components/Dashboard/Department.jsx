import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import getEntities from "../../utils/getEntities";
import { averageValue } from "../../mock_data_supply";

const Department = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    getEntities("Dashboard", "Department").then((entitiesOptions) =>
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
      <Chart data={averageValue} />
      
    </>
  );
};

export default Department;
