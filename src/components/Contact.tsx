import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
// import { Player } from '@lordicon/react';
import { Player } from '@lottiefiles/react-lottie-player';
// import ICON from '../assets/email.json';

interface ServiceProps {
  title: string;
  description: string;
  icon:  string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Email",
    description:
      "Reach out to us via email",
    icon: 'https://lottie.host/517eabd5-910e-4862-a1b3-f9e1a95b00c1/Ul1BDRY2Vj.json',
  },
  {
    title: "Location",
    description:
      "Here is our location on the map",
    icon: 'https://lottie.host/f6d974d0-b6b2-4e3c-ab79-50b1c178f437/70XoIqhUcL.json',
  },
  
];

 const Contact = () => {
    
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Get In{" "}
            </span>
            Touch
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
          We're here to answer any questions you have and make your food delivery experience amazing.  <br/>Feel free to reach out using the options below:
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                  <Player

              src={icon}
              className="player "
              loop
              autoplay
              style={{ height: '50px', width: '50px' }}
      />
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <Player

src={"https://lottie.host/efe95633-1355-44dd-bd1c-89419fa2b526/Ei7L9bnirA.json"}
className="player "
loop
autoplay
style={{ height: '100%', width: '100%' }}
/>
      </div>
    </section>
  );
};

export default Contact
