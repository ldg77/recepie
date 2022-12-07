import { useState } from "react";
import { Route, Router } from "react-router-dom";
import "./App.scss";
import Recepie from "./components/bottom/Recepie.jsx";
import Recepies from "./components/bottom/Recepies.jsx";
import Nav from "./components/top/Nav.jsx";
function App() {
  const [tag, setTag] = useState("");
  return (
    <div className="App">
      <Nav setTag={setTag} />
      <Router>
        <Route path="/" element={<Recepies tag={tag} />} />
        <Route path="/:id" element={<Recepie />} />
        <Route path="/form" element={<Form />} />
      </Router>
    </div>
  );
}

export default App;
