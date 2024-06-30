import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import pizza from '@/assets/pizza.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r  min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side with catchy line */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
              Satisfy Your Cravings,<br />One Click Away!
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Discover local flavors, order with ease, and indulge in culinary delights.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Order Now
            </Button>
          </div>

          {/* Right side with rotating pizza */}
          <div className="md:w-1/2 flex justify-center">
            <motion.img
              src={pizza} // Replace with your pizza image
              alt="Rotating Pizza"
              className="w-64 h-64 md:w-96 md:h-96"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import hero from "../assets/hero.png";

// const Hero = () => {
//   return (
//     <div>
//       <img src={hero} className="w-full max-h-[600px] object-cover" />
//     </div>
//   );
// };

// export default Hero;
