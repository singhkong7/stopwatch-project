import "./App.css";
import React, { useState } from "react";
import Time from "./Time";
import Button from "./Button";
export default function App() {
  const [time, setTime] = useState({ ms: 0, ss: 0, mm: 0, hh: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  var updatedMs = time.ms,
    updatedSs = time.ss,
    updatedMm = time.mm,
    updatedHh = time.hh;
  const run = () => {
    if (updatedMs === 100) {
      updatedSs++;
      updatedMs = 0;
    }
    if (updatedSs === 60) {
      updatedMm++;
      updatedSs = 0;
    }
    if (updatedMm === 60) {
      updatedHh++;
      updatedMm = 0;
    }
    updatedMs++;
    return setTime({
      ms: updatedMs,
      ss: updatedSs,
      mm: updatedMm,
      hh: updatedHh
    });
  };
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({
      ms: 0,
      ss: 0,
      mm: 0,
      hh: 0
    });
  };
  const resume = () => {
    start();
  };
  return (
    <div className="App">
      <h1>STOP WATCH</h1>
      <div className="clock">
        <h2>{time.ms} ms</h2>
        <h2>{time.ss} sec</h2>
        <h2>{time.mm} min</h2>
        <h2>{time.hh} hr</h2>
      </div>
      <Time time={time} />
      <Button
        resume={resume}
        status={status}
        stop={stop}
        reset={reset}
        start={start}
      />
    </div>
  );
}
