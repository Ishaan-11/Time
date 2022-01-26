import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const now: string = new Date().toLocaleTimeString();

  const [time, setTime] = useState<string>(now);

  function updateTime(): void {
    const newTime: string = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
