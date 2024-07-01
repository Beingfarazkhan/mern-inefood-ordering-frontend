import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Hero from "@/components/Hero";
import NewHero from "../components/newHero";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";


type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <ScrollToHashElement behavior="smooth"  />
      <Header />
      {showHero && <NewHero />}

      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
