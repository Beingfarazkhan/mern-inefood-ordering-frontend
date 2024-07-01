import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link, LinkProps } from 'react-router-dom';

interface ScrollLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
}

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-6 items-center">
        <Link to="/" className="font-bold hover:text-green-500">
            Home
          </Link>
        <ScrollLink to="about" className="font-bold hover:text-green-500">
            About
          </ScrollLink>
        <ScrollLink to="contact" className="font-bold hover:text-green-500">
            Contact
          </ScrollLink>
        {isAuthenticated ? (
        <>
          <Link to="/order-status" className="font-bold hover:text-green-500">
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-green-500 hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;


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