import React, { useState } from "react";

function StartJournalButton() {
  const [showForm, setShowForm] = useState(false);
  const [entry, setEntry] = useState("");

  const handleStart = () => {
    setShowForm(true);
  };

  const handleSave = () => {
    console.log("Journal entry saved:", entry);
    alert("Entry saved! (Backend connection coming soon)");
    setEntry("");
    setShowForm(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!showForm ? (
        <button
          onClick={handleStart}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Start Journal
        </button>
      ) : (
        <div>
          <h2>Write your journal entry:</h2>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows="6"
            cols="50"
            placeholder="How are you feeling today?"
            style={{ borderRadius: "8px", padding: "10px" }}
          />
          <br />
          <button
            onClick={handleSave}
            style={{
              marginTop: "10px",
              backgroundColor: "#007BFF",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Save Entry
          </button>
        </div>
      )}
    </div>
  );
}

export default StartJournalButton;
