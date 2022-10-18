import { AppProvider } from "@shopify/polaris";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HighOrderComponents = (WrappedComponents) => {
  function Hoc() {
    const [Username, setUsername] = useState("");
    const navigate = useNavigate();
    function handleLogin() {
      navigate("/show",{state:Username})
    }
    return (
      <WrappedComponents
        Username={Username}
        handleLogin={handleLogin}
        setUsername={setUsername}
      />
    );
  }

  return Hoc;
};
export default HighOrderComponents;
