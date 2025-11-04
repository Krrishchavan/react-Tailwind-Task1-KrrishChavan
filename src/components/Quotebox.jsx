import React, { useState, useEffect } from "react";

export default function QuoteBox() {
  const [quote, setQuote] = useState("Loading quote...");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (err) {
      console.error("Error fetching quote:", err);
      setQuote("Could not load quote. Please try again.");
      setAuthor("");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "500px",
        textAlign: "center",
      }}
    >
      <p
        className="text-lg italic text-gray-700 mb-4"
        style={{
          fontSize: "20px",
          fontStyle: "italic",
          color: "#374151",
          marginBottom: "16px",
        }}
      >
        “{quote}”
      </p>
      <p
        className="text-gray-500 mb-4"
        style={{ fontSize: "16px", color: "#6b7280", marginBottom: "16px" }}
      >
        — {author}
      </p>
      <button
        onClick={fetchQuote}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        style={{
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        New Quote
      </button>
    </div>
  );
}
