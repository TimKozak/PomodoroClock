import React from "react";

// Components
import Timer from "./components/Timer";
import Alert from "./components/Alert";
import Form from "./components/Form";

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
      <Form />
    </div>
  );
};

export default App;
