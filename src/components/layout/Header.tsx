import { useState, useEffect } from "react";
import { Button, ButtonType } from "../ui/Button";
import Logo from "../ui/Logo";
import { BsGithub, BsList } from "react-icons/bs";
import { MobileMenuModal } from "../utilities/MobileMenuModal";
import { Link } from "react-router-dom";

//icon imports
import { MdHome } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      //setIsMenuOpen(false);
    });

    return () =>
      window.removeEventListener("resize", () => {
        //setIsMenuOpen(false);
      });
  });

  const btnStyles = "flex text-5xl md:text-4xl lg:text-sm";
  const navItems = (
    <>
      <li>
        <Link to="/">
          <Button type={ButtonType.Link}>
            <div className={btnStyles}>
              <MdHome className="mr-1" />
              Home
            </div>
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <Button href="/" type={ButtonType.Link}>
            <div className={btnStyles}>
              <FaProjectDiagram className="mr-1" />
              Projects
            </div>
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <Button href="/" type={ButtonType.Link}>
            <div className={btnStyles}>
              <MdPerson className="mr-1" />
              About Me
            </div>
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Button href="/" type={ButtonType.Link}>
            <div className={btnStyles}>
              <MdEmail className="mr-1" />
              Contact
            </div>
          </Button>
        </Link>
      </li>
    </>
  );

  return (
    <header className="container mx-auto">
      <nav className="px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          {/* left header (logo) */}
          <a href="/" className="flex items-center">
            <Logo />
            <span
              className="font-primary text-white font-bold self-center text-4xl lg:text-xl ml-2
             hover:text-transparent bg-clip-text bg-gradient-to-l from-white via-purple-300 to-pink-700
             transition-all"
            >
              Russ <span className="hidden sm:inline">Koprulu</span>
            </span>
          </a>

          {/* middle header (nav links) */}
          <div className="hidden justify-between lg:flex items-center">
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems}
            </ul>
          </div>

          {/* right header (github link + mobile menu) */}
          <div className="flex items-center lg:order-2">
            <Button href="https://github.com/ruskpr" type={ButtonType.Link}>
              <a href="https://github.com/ruskpr" className="hidden lg:block">
                Github Profile
              </a>
              <BsGithub className="text-4xl lg:text-lg ml-1" />
            </Button>

            {/* mobile menu button */}
            <div className="block lg:order-3 lg:hidden">
              <Button
                type={ButtonType.Link}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <BsList className="text-5xl lg:text-lg" />
              </Button>

              <MobileMenuModal show={isMenuOpen} setShow={setIsMenuOpen}>
                <ul className="flex flex-col gap-10">{navItems}</ul>
              </MobileMenuModal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
