import React from "react";
import "./App.css";
// import { createSideTabNavigator } from "react-navigation-side-tabs";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Header from "./Components/Header.jsx";
import TabPanel from './Components/TabPanel'
import DashBoard from "./Components/DashBoard";
import Analytics from "./Components/Analytics";

import a11yProps from './utils/allyProps';

import { withStyles } from "@material-ui/core/styles";

// const Tab = createSideTabNavigator();

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
    "&$selected": {
      backgroundColor: "skyblue",
    },
    "&:focus": {
      backgroundColor: "skyblue",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Header />
      <div className="sideNavCont">
        <StyledTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          className="sideNav"
        >
          <StyledTab label="DashBoard" {...a11yProps(0)} />
          <StyledTab label="Analytics" {...a11yProps(1)} />
        </StyledTabs>
        <div className='tabBody'>
          <TabPanel value={value} index={0}>
            <DashBoard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Analytics />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
