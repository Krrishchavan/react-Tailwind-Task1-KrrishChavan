import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="mb-8 text-center bg-white shadow-md rounded-lg p-4"
      style={{
        textAlign: "center",
        backgroundColor: "#ffffff",
        padding: "16px",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        marginBottom: "32px",
        width: "260px",
      }}
    >
      <p
        className="text-gray-800 text-lg"
        style={{ fontSize: "18px", color: "#1f2937" }}
      >
        📅 {date}
      </p>
      <p
        className="text-gray-900 text-2xl font-semibold"
        style={{ fontSize: "24px", fontWeight: "600", color: "#111827" }}
      >
        ⏰ {time}
      </p>
    </div>
  );
}
