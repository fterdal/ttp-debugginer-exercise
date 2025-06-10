import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCookieClick = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1 style={{ color: "#333" }}>Cookie Clicker</h1>
      <div
        style={{
          fontSize: "100px",
          cursor: "pointer",
          userSelect: "none",
          transition: "transform 0.1s",
          ":hover": {
            transform: "scale(1.1)",
          },
        }}
        onClick={handleCookieClick}
      >
        🍪
      </div>
      <h2 style={{ color: "#666" }}>Cookies: {count}</h2>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
