import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addevent" element={<AddEvent />} />
        <Route path="/editevent/:id" element={<EditEvent />} />
      </Routes>
    </div>
  );
}

export default App;
