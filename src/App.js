import React from "react";
import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualizer/PathfindingVisualizer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./accordion/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div class="left-side">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
      <div className="right-side">
        <Accordion></Accordion>
      </div>
    </div>
  );
}

export default App;
