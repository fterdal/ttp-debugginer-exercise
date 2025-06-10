import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import useStore from "./store";

const App = () => {
  const {
    cookies,
    clickMultiplier,
    autoClickers,
    superAutoClickers,
    addCookies,
    purchaseAutoClicker,
    purchaseClickEnhancer,
    purchaseSuperAutoClicker,
  } = useStore();

  // Handle auto-clickers
  useEffect(() => {
    const intervals = [];

    // Regular auto-clicker (every 5 seconds)
    if (autoClickers > 0) {
      const interval = setInterval(() => {
        addCookies(autoClickers);
      }, 5000);
      intervals.push(interval);
    }

    // Super auto-clicker (every second)
    if (superAutoClickers > 0) {
      const interval = setInterval(() => {
        addCookies(superAutoClickers);
      }, 1000);
      intervals.push(interval);
    }

    // Cleanup intervals on unmount
    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [autoClickers, superAutoClickers, addCookies]);

  const handleCookieClick = () => {
    addCookies(1);
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
      <h2 style={{ color: "#666" }}>Cookies: {cookies}</h2>
      <h3 style={{ color: "#666" }}>Click Power: x{clickMultiplier}</h3>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={purchaseAutoClicker}
          disabled={cookies < 10}
          style={{
            padding: "10px",
            backgroundColor: cookies >= 10 ? "#4CAF50" : "#cccccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: cookies >= 10 ? "pointer" : "not-allowed",
          }}
        >
          Buy Auto-Clicker (10 cookies)
          <br />
          Owned: {autoClickers}
        </button>

        <button
          onClick={purchaseClickEnhancer}
          disabled={cookies < 50}
          style={{
            padding: "10px",
            backgroundColor: cookies >= 50 ? "#2196F3" : "#cccccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: cookies >= 50 ? "pointer" : "not-allowed",
          }}
        >
          Buy Click Enhancer (50 cookies)
          <br />
          Power: x{clickMultiplier}
        </button>

        <button
          onClick={purchaseSuperAutoClicker}
          disabled={cookies < 100}
          style={{
            padding: "10px",
            backgroundColor: cookies >= 100 ? "#9C27B0" : "#cccccc",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: cookies >= 100 ? "pointer" : "not-allowed",
          }}
        >
          Buy Super Auto-Clicker (100 cookies)
          <br />
          Owned: {superAutoClickers}
        </button>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
