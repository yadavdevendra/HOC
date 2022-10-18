import "./App.css";
import "@shopify/polaris/build/esm/styles.css";
import Login from "./components/Login";
import Showdata from "./components/Showdata";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@shopify/polaris";
function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/show" element={<Showdata />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
