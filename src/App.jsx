// import { useState } from "react";
// import BookForm from "./components/BookForm";
// import BookList from "./components/BookList";

// export default function App() {
//   const [books, setBooks] = useState([]);

//   const addBook = (book) => {
//     setBooks([...books, book]);
//   };

//   return (
//     <div className="min-h-screen p-8">
//       <h1 className="text-4xl font-bold text-center mb-10">📚 My Book Tracker</h1>
//       <BookForm addBook={addBook} />
//       <BookList books={books} />
//     </div>
//   );
// }

import React from "react";
import Clock from "./components/Clock";
import QuoteBox from "./components/QuoteBox";

export default function App() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6"
      style={{
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <h1
        className="text-3xl font-bold text-center mb-6 text-blue-700"
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "700",
          color: "#1d4ed8",
          marginBottom: "24px",
        }}
      >
        Live Quote & Timer Dashboard
      </h1>

      <Clock />
      <QuoteBox />
    </div>
  );
}
