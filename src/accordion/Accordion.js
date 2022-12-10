import AccordionList from "./AccordionList";
import AccordionData from "./AccordionData";
import { useState } from "react";
function Accordion() {
  const [toggle, setToggle] = useState(null);
  let handleToggle = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    }
    setToggle(id);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="sid">
          <h3>Description and Algorithm</h3>
          <h4>The Optimal Path is defined in Yellow Color</h4>
          <AccordionList
            accordionData={AccordionData}
            handleToggle={handleToggle}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
  );
}

export default Accordion;
