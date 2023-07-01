import { useState, useEffect } from "react";
import { Button, ButtonType } from "../ui/Button";
import Logo from "../ui/Logo";
import { BsGithub, BsList } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { MobileMenuModal } from "../utilities/MobileMenuModal";
import { Link } from "react-router-dom";

//icon imports
import { MdHome } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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

  const btnStyles = "flex items-center text-5xl md:text-4xl md:text-sm";
  const navItems = (
    <>
      <li>
        <Link to="/">
          <Button type={ButtonType.Link} animate={false}>
            <div className={btnStyles}>
              <MdHome className="mr-1" />
              Home
            </div>
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/projects">
          <Button href="/" type={ButtonType.Link} animate={false}>
            <div className={btnStyles}>
              <FaProjectDiagram className="mr-1" />
              Projects
            </div>
          </Button>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <Button href="/" type={ButtonType.Link} animate={false}>
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
      <nav className="px-4 md:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center">
          {/* left header (logo) */}
          {/* <Link to="/" className="flex items-center">
            <Logo />
            <span
              className="font-primary text-white font-bold self-center text-4xl md:text-xl ml-2
             hover:text-transparent bg-clip-text bg-gradient-to-l from-white via-purple-300 to-pink-700
             transition-background duration-500"
            >
              Russ <span className="hidden sm:inline">Koprulu</span>
            </span>
          </Link> */}
          <div className="block md:hidden"></div>

          {/* middle header (nav links) */}
          <div className="hidden md:flex items-center">
            <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0">
              {navItems}
            </ul>
          </div>

          {/* right header (github / gmail link + mobile menu) */}
          <div className="flex items-center">
            <div className="tooltip tooltip-bottom" data-tip="GitHub Profile">
              <Button
                type={ButtonType.Link}
                animate={false}
                className="hover:text-gray-300"
              >
                <Link target="_blank" to="https://github.com/ruskpr">
                  <BsGithub className="text-4xl md:text-lg" />
                </Link>
              </Button>
            </div>

            <div
              className="tooltip tooltip-bottom"
              data-tip="Email me"
            >
              <Button
                type={ButtonType.Link}
                animate={false}
                className="hover:text-red-500"
              >
                <Link target="_blank" to="mailto:russ.koprulu@gmail.com">
                  <SiGmail className="text-4xl md:text-lg ml-1" />
                </Link>
              </Button>
            </div>

            {/* mobile menu button */}
            <div className="block md:order-3 md:hidden">
              <Button
                type={ButtonType.Link}
                animate={false}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <BsList className="text-5xl md:text-lg" />
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
