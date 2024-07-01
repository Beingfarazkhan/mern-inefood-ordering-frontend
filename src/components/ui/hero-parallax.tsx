import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

import { TypeAnimation } from 'react-type-animation';

import { Link, LinkProps } from 'react-router-dom';

interface ScrollLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
}

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-15 md:py-32 px-4 w-full  left-0 top-0 -mb-16">
      <h1 className="supercharge text-3xl md:text-8xl font-bold dark:text-white">
        Craving For Food? <br />
      </h1>
      <h1 className="super-normal md:py-5 text-2xl md:text-6xl font-bold dark:text-white">
      We Deliver {" "}
      <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'Indian', // initially rendered starting point
      1000,
      'Chinese',
      1000,
      'American',
      1000,
      'Happiness',
      500,
    ]}
    speed={50}
    repeat={Infinity}
  />
      </h1>
      <p className="max-w-2xl font-bold text-base md:text-xl mt-3 md:mt-8 dark:text-neutral-200">
      INEFood is your one-stop shop for culinary adventures, delivering happiness straight to your door. 
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <ScrollLink 
        to={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </ScrollLink>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};

const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, ...props }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <Link to={`#${to}`} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  };
  
