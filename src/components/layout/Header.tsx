import { useState, useEffect } from "react";
import { Button, ButtonType, ButtonSize } from "../ui/Button";
import Logo from "../ui/Logo";
import { BsGithub, BsList } from "react-icons/bs";
import { MobileMenuModal } from "../utilities/MobileMenuModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMenuOpen(false);
    });

    return () =>
      window.removeEventListener("resize", () => {
        setIsMenuOpen(false);
      });
  });

  return (
    <header className="container mx-auto">
      <nav className="px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          {/* left header (logo) */}
          <a href="/" className="flex items-center">
            <Logo />
            <span className="font-primary text-white font-bold self-center text-xl ml-2">
              Russ
            </span>
          </a>

          {/* middle header (nav links) */}
          <div className="hidden justify-between lg:flex items-center">
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Button href="/" type={ButtonType.Link}>
                  Home
                </Button>
              </li>
              <li>
                <Button href="/" type={ButtonType.Link}>
                  Projects
                </Button>
              </li>
              <li>
                <Button href="/" type={ButtonType.Link}>
                  About Me
                </Button>
              </li>
              <li>
                <Button href="/" type={ButtonType.Link}>
                  Contact
                </Button>
              </li>
            </ul>
          </div>

          {/* right header (github link + mobile menu) */}
          <div className="flex items-center lg:order-2">
            <Button href="https://github.com/ruskpr" type={ButtonType.Link}>
              <span className="hidden lg:block">Github Profile</span>
              <BsGithub className="text-md ml-1" />
            </Button>

            {/* mobile menu button */}
            <div className="block lg:order-3 lg:hidden">
              <Button
                type={ButtonType.Link}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <BsList className="text-lg" />
              </Button>

              <MobileMenuModal show={isMenuOpen} setShow={setIsMenuOpen}>
                text
              </MobileMenuModal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
