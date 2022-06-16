import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/crud-app-react" element={<Home />} />
          <Route path="/crud-app-react/create" element={<Create />} />
          <Route path="/crud-app-react/edit/:id" element={<Edit />} />
          <Route path="*" element={<Navigate to="/crud-app-react" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
