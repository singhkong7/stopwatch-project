import React from "react";
import "./Time.css";
function Time(props) {
  return (
    <div className="time">
      <span>{props.time.ss >= 10 ? props.time.ms : "0" + props.time.ms}</span>
      <span>{props.time.ss >= 10 ? props.time.ss : "0" + props.time.ss}</span>
      <span>{props.time.mm >= 10 ? props.time.mm : "0" + props.time.mm}</span>
      <span>{props.time.hh >= 10 ? props.time.hh : "0" + props.time.hh}</span>
    </div>
  );
}
export default Time;
