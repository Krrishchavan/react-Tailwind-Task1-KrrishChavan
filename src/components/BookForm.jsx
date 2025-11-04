// import { useState } from "react";

// export default function BookForm({ addBook }) {
//   const [book, setBook] = useState({
//     title: "",
//     author: "",
//     genre: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!book.title || !book.author) return;
//     addBook(book);
//     setBook({ title: "", author: "", genre: "", description: "" });
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-3"
//       style={{
//         backgroundColor: "white",
//         padding: "24px",
//         borderRadius: "12px",
//         boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//         margin: "0 auto",
//         maxWidth: "400px",
//       }}
//     >
//       <h2
//         className="text-2xl font-semibold text-center"
//         style={{ textAlign: "center", fontSize: "22px", fontWeight: "600" }}
//       >
//         Add a Book
//       </h2>

//       <input
//         name="title"
//         value={book.title}
//         onChange={handleChange}
//         placeholder="Book Title"
//         className="w-full border p-2 rounded focus:outline-blue-400"
//         style={{
//           width: "100%",
//           padding: "8px",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//         }}
//       />

//       <input
//         name="author"
//         value={book.author}
//         onChange={handleChange}
//         placeholder="Author"
//         className="w-full border p-2 rounded focus:outline-blue-400"
//         style={{
//           width: "100%",
//           padding: "8px",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//         }}
//       />

//       <input
//         name="genre"
//         value={book.genre}
//         onChange={handleChange}
//         placeholder="Genre"
//         className="w-full border p-2 rounded focus:outline-blue-400"
//         style={{
//           width: "100%",
//           padding: "8px",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//         }}
//       />

//       <textarea
//         name="description"
//         value={book.description}
//         onChange={handleChange}
//         placeholder="Description"
//         className="w-full border p-2 rounded focus:outline-blue-400"
//         style={{
//           width: "100%",
//           padding: "8px",
//           border: "1px solid #ccc",
//           borderRadius: "6px",
//           minHeight: "80px",
//         }}
//       ></textarea>

//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
//         style={{
//           width: "100%",
//           backgroundColor: "#3b82f6",
//           color: "white",
//           padding: "10px",
//           border: "none",
//           borderRadius: "6px",
//           cursor: "pointer",
//         }}
//       >
//         Add Book
//       </button>
//     </form>
//   );
// }
