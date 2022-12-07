import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Recepie from "./components/bottom/Recepie.jsx";
import Recepies from "./components/bottom/Recepies.jsx";
import Nav from "./components/top/Nav.jsx";
import Form from './components/bottom/Form.jsx';

function App() {
  const [tag, setTag] = useState("");
  return (
    <div className="App">
      <Nav setTag={setTag} />
      <Routes>
        <Route path="/" element={<Recepies tag={tag} />} />
        <Route path="/:id" element={<Recepie />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
