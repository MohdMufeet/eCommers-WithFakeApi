import HeroSection from "@/Components/HeroSection";
import Featured from "@/Components/Featured";



export default function Home() {
  return (
   <>
   <HeroSection />
   <Featured />
   
   </>
  );
}



// app/page.js
// async function getProducts() {
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store", // data hamesha fresh milega
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return res.json();
// }

// export default async function Home() {
//   const products = await getProducts();

//   return (
//     <main className="p-4">
//       <h1 className="text-2xl font-bold">Products</h1>
//       <ul className="mt-4 space-y-2">
//         {products.map((p) => (
//           <li key={p.id} className="border p-2 rounded">
//             {p.title} - ₹{p.price}
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }
