import React from "react";
import "./Button.css";
function Button(props) {
  return (
   <>
     <div className="button">
      <button type="submit" onClick={props.start}>
        Start
      </button>
      <button type="submit" onClick={props.stop}>Stop</button>
      <button type="submit" onClick={props.reset}>Reset</button>
    </div>
   </>
  );
}
export default Button;
