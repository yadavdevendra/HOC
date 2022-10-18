import React from "react";
import { TopBar, Frame, AppProvider } from "@shopify/polaris";
import { useLocation } from "react-router-dom";
import HighOrderComponents from "./Hoc";

const Showdata = () => {
  const { state } = useLocation();
  const logo = {
    width: 124,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
    url: "http://jadedpixel.com",
    accessibilityLabel: "Jaded Pixel",
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
