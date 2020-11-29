import React from "react";
import SelectSearch from "react-select-search";
import Chart from "./chart";
import { averageValue } from "../mock_data_supply";

const Department = () => {
  const options = [
    { name: "Admin & HR", value: "sv" },
    { name: "Management", value: "en" },
    { name: "Accounts", value: "sv1" },
    { name: "Quality", value: "en1" },
    { name: "Civil", value: "sv2" },
    { name: "Dispatch", value: "en2" },
  ];
  return (
    <>
      <SelectSearch
        options={options}
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

export default Department;
