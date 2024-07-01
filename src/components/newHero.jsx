import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export default function NewHero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Green Salad",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826659/9_p7ftz4.png",
  },
  {
    title: "Haka Noodles",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826659/8_osezz5.png",
  },
  {
    title: "Pizza",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826363/7_i1wuif.png",
  },

  {
    title: "Biryani",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826324/6_b4xx0t.png",
  },
  {
    title: "Bhel Puri",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826323/5_girtda.png",
  },
  {
    title: "Samosas",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826322/4_ya6rif.png",
  },

  {
    title: "The Great Indian Thali",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826320/2_wvnktu.png",
  },
  {
    title: "Dumplings",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826319/10_yqx5y8.png",
  },
  {
    title: "South Indian",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826320/3_u9hbac.png",
  },
  {
    title: "Mango Slushies",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826319/11_wgn5xd.png",
  },
  {
    title: "Street Food",
    link: "searchcomp",
    thumbnail:
      "https://res.cloudinary.com/dmewomnoy/image/upload/v1719826318/1_wezva8.png",
  },
];






// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from "@/components/ui/button"
// import Pizza from '../assets/pizza.png';

// const dishes = [
//   Pizza,
//   Pizza,
//   Pizza,
//   // Add more dish images
// ];

// export default function NewHero() {
//   const [currentDish, setCurrentDish] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentDish((prev) => (prev + 1) % dishes.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-orange-50">
//       <main className="flex-1 flex">
//         <LeftSection />
//         <RightSection currentDish={dishes[currentDish]} />
//       </main>
//     </div>
//   );
// }

//   function LeftSection() {
//     return (
//       <div className="flex-1 flex flex-col justify-center p-12">
//         <h1 className="text-6xl font-bold mb-6">
//           Flavor that wows<br />the palate
//         </h1>
//         <Button variant="outline" className="w-40">View Menu</Button>
//         <div className="mt-8 flex items-center">
//           <svg /* Add your delivery icon SVG here */ />
//           <span className="ml-2">Delivery And Pickup Info</span>
//         </div>
//       </div>
//     );
//   }

//   function RightSection({ currentDish }) {
//     return (
//       <div className="flex-1 flex items-center justify-center">
//         <AnimatePresence mode="wait">
//           <motion.img
//             key={currentDish}
//             src={currentDish}
//             alt="Featured Dish"
//             className="w-4/5 h-4/5 object-cover rounded-full"
//             initial={{ opacity: 0, rotateY: -180 }}
//             animate={{ opacity: 1, rotateY: 0 }}
//             exit={{ opacity: 0, rotateY: 180 }}
//             transition={{ duration: 0.5 }}
//           />
//         </AnimatePresence>
//       </div>
//     );
//   }