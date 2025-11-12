import React from "react";
import StartJournalButton from "./components/StartJournalButton";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Emotion Detection Journal
      </h1>
      <StartJournalButton />
    </div>
  );
}

export default App;