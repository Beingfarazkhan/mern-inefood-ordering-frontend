import { Player } from '@lottiefiles/react-lottie-player';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



interface FeatureProps {
  title: string;
  description: string;
  src: string;
}

const features: FeatureProps[] = [
  {
    title: "30-Minute Cravings Crushed",
    description:
      "We don't mess around. Order your favorite food and get it lightning fast, straight to your doorstep.",
    src: "https://lottie.host/53b8aaf9-b7b6-4f80-8e26-2eb101f914f0/r7L8YlKnCT.json",
  },
  {
    title: "Foodie Paradise: Endless Choices",
    description:
      "From classic comfort food to exotic global flavors, explore a world of culinary delights. There's something to satisfy every taste bud.",
    src: "https://lottie.host/a19fe4e3-b982-4e68-a723-c794506a0be1/Txa7Xr2nZr.json",
  },
  {
    title: "Dietary Ninja: We Get Your Needs",
    description:
      "We understand everyone has unique needs. Our filters make it easy to find delicious meals that fit your preferences, allergies, or dietary goals.",
    src: "https://lottie.host/5bc41afc-2978-41be-bbf4-a79d05133d82/4Md9hIkBm2.json",
  },
];

 const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 space-y-8 "
    >
      <h2 className="text-3xl lg:text-5xl font-bold md:text-center">
      Your Hunger, {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        Our Responsibility
        </span>
      </h2>

      

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, src }: FeatureProps) => (
          <Card key={title}>
            <CardHeader className='text-xl'>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
            <Player
  src={src}
  className="player "
  loop
  autoplay
  
/>
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;