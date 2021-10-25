import React from "react";
// Components
import Timer from "./components/Timer";
import FormBtn from "./components/FormBtn";

const App = () => {
  const workTime = {
    minutes: 10,
    seconds: 15,
  };
  const restTime = {
    minutes: 10,
    seconds: 15,
  };

  return (
    <div className="App">
      <Timer workTime={workTime} restTime={restTime} />
      <FormBtn />
    </div>
  );
};

export default App;
