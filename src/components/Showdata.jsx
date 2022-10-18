import React from "react";
import { TopBar, Frame, AppProvider } from "@shopify/polaris";
import { useLocation } from "react-router-dom";
import HighOrderComponents from "./Hoc";

const Showdata = () => {
  const { state } = useLocation();
  const logo = {
    width: 124,
    topBarSource:
      "https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg",
    contextualSaveBarSource:
      "https://d3vlhkqyz4y38a.cloudfront.net/skin/frontend/cedcomnew/default/images/header/logo/ced-logo-web.svg",
    url: "http://jadedpixel.com",
    accessibilityLabel: "Cedcommerce",
  };
  const topBarMarkup = <TopBar userMenu={state} />;
  return (
    <AppProvider>
      <div style={{ height: "250px",width:"50%" }}>
        <Frame topBar={topBarMarkup} logo={logo}  />
      </div>
    </AppProvider>
  );
};

export default HighOrderComponents(Showdata);
