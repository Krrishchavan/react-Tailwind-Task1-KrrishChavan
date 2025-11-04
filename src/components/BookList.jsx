// export default function BookList({ books }) {
//   return (
//     <div
//       className="max-w-3xl mx-auto mt-8 space-y-4"
//       style={{
//         maxWidth: "700px",
//         margin: "32px auto",
//         padding: "0 16px",
//       }}
//     >
//       <h2
//         className="text-2xl font-semibold text-center"
//         style={{
//           textAlign: "center",
//           fontSize: "24px",
//           fontWeight: "600",
//         }}
//       >
//         Book List
//       </h2>

//       {books.length === 0 ? (
//         <p
//           className="text-center text-gray-500"
//           style={{
//             textAlign: "center",
//             color: "#777",
//           }}
//         >
//           No books added yet.
//         </p>
//       ) : (
//         books.map((book, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition border border-gray-200"
//             style={{
//               backgroundColor: "white",
//               borderRadius: "10px",
//               padding: "16px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//               border: "1px solid #e5e7eb",
//               transition: "all 0.2s ease-in-out",
//             }}
//           >
//             <h3
//               className="text-lg font-bold text-blue-600"
//               style={{
//                 color: "#2563eb",
//                 fontSize: "18px",
//                 fontWeight: "700",
//               }}
//             >
//               {book.title}
//             </h3>

//             <p
//               className="text-sm text-gray-700"
//               style={{ color: "#555", fontSize: "14px" }}
//             >
//               Author: {book.author}
//             </p>

//             <p
//               className="text-sm text-gray-700"
//               style={{ color: "#555", fontSize: "14px" }}
//             >
//               Genre: {book.genre}
//             </p>

//             <p
//               className="text-gray-800 mt-1"
//               style={{ color: "#333", marginTop: "6px" }}
//             >
//               {book.description}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
