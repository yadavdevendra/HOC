import React, { useState } from "react";
import { FormLayout, AppProvider, TextField, Button } from "@shopify/polaris";
const HighOrderComponents = (WrappedComponents) => {
  function Hoc(props) {
    const [Username, setUsername] = useState("");
     const [Username1, setUsername1] = useState("");
    function handleLogin() {
      setUsername1(Username)
    }
    return (
      <>
        <WrappedComponents
          Username={Username1}
          handleLogin={handleLogin}
          setUsername={setUsername}
          {...props}
        />
        <AppProvider>
          <FormLayout>
            <TextField
              value={Username}
              type="UserName"
              label="User Name"
              onChange={(e) => setUsername(e)}
              autoComplete="username"
            />
          </FormLayout>
          <Button onClick={handleLogin}>Login</Button>
        </AppProvider>
      </>
    );
  }

  return Hoc;
};
export default HighOrderComponents;
