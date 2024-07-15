import { Route, Routes } from "react-router-dom";
import { Form } from "./component/Form";
import "./App.css";
import { Home } from "./component/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
