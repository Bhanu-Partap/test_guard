import "./App.css";
import Routing from "./Router/index";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
