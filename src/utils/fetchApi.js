// import { useState } from "react";
// import { useEffect } from "react";

// export default function Shop() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("../api/storeData.json");
//       const data = await response.json();
//       setItems(data.items);
//     }
//     fetchData();
//   }, []);
//   //   return (
//   //     <>
//   //       <h1>Shop</h1>
//   //       {items.map((item) => (
//   //         <div key={item.id}>
//   //           <h2>{item.name}</h2>
//   //           <p>{item.cost}</p>
//   //         </div>
//   //       ))}
//   //     </>
//   // );
// }
