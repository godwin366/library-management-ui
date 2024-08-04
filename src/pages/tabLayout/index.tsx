import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import Header from "../../components/header";

export default function TabLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(
    location.pathname.includes("session") ? "session" : "agentManagement"
  );

  const handleChange = (newValue: string) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "fit-content" }}>
      <Header>Talk to Customers</Header>
      <Tabs
        value={value}
        onChange={(_, val) => handleChange(val)}
        className="tabs-container"
      >
        <Tab value="agentManagement" label="Agent Management" />
        <Tab value="session" label="Session" />
      </Tabs>
      <Outlet />
    </Box>
  );
}
