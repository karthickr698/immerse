import React from "react";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { withStyles } from "@material-ui/core/styles";

import TabPanel from "./TabPanel";
import a11yProps from "../utils/allyProps";
import Department from "./Dashboard/Department";
import Tenure from "./Dashboard/Tenure";
import Demography from "./Dashboard/Demography";
import Designation from "./Dashboard/Designation";
import Grade from "./Dashboard/Grade";
import HighestQualification from "./Dashboard/HighestQualification";

const StyledTabs = withStyles({
  indicator: {
    display: "none",
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    backgroundColor: "#009DAE",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: '2px',
    "&$selected": {
      backgroundColor: "#005284",
    },
    "&:focus": {
      backgroundColor: "#005284",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const DashBoard = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <StyledTabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        className="departTab"
      >
        <StyledTab label="Department" {...a11yProps(0)} />
        <StyledTab label="Tenure" {...a11yProps(1)} />
        <StyledTab label="Demographics" {...a11yProps(2)} />
        <StyledTab label="Designation" {...a11yProps(3)} />
        <StyledTab label="Grade" {...a11yProps(4)} />
        <StyledTab label="Highest Qualification" {...a11yProps(5)} />
      </StyledTabs>
      <div className="tabBody1">
        <TabPanel value={value} index={0}>
          <Department />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Tenure />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Demography />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Designation />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grade />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <HighestQualification />
        </TabPanel>
      </div>
    </div>
  );
};

export default DashBoard;
