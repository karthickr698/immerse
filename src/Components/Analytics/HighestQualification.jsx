import React, { useEffect, useState } from "react";
import SelectSearch from "react-select-search";
import Chart from "../chart";
import axios from 'axios';
import { domain } from '../../utils/getDomain';
import { averageValue } from "../../mock_data_supply";

const HighestQualification = () => {
  const [entities, setEntities] = useState([]);
  useEffect(() => {
    axios.get(`${domain}getEntities?surveyName=None&&section=Analytics&&dimension=HighestQualification`).then(res => {
      const { Entities } = res;
      const entitiesOptions = Entities.map(str => ({
          name: str,
          value: str,
        }));
      setEntities(entitiesOptions)
    })
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
