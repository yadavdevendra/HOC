import HighOrderComponents from "./Hoc";
import { FormLayout, AppProvider, TextField, Button, Page, Frame } from "@shopify/polaris";


function Login(props) {
 const {Username,handleLogin,setUsername}= props;


  return (
    <div>
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
        <div style={{ height: "200px" ,margin:"25px" }}>
          <Button onClick={handleLogin}>Login</Button>
        </div>
      </AppProvider>
    </div>
  );
}

export default HighOrderComponents(Login);
