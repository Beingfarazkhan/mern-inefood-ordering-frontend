import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";
import { Link, LinkProps } from 'react-router-dom';

interface ScrollLinkProps extends Omit<LinkProps, 'to'> {
  to: string;
  children: React.ReactNode;
}

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-green-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-green-500" />
              {user?.given_name } { user?.family_name}
            </span>
          ) : (
            <span> Welcome to INEFood!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
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
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold bg-green-500"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

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