import { Button, ButtonType, ButtonSize } from "../ui/Button";
import Logo from "../home-page/Logo";
import { BsGithub } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center ">
          {/* logo */}
          <a href="/" className="flex items-center">
            <Logo />
            <span className="font-primary font-bold self-center text-xl ml-2 whitespace-nowrap dark:text-white">
              Russ
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <Button
              href="https://github.com/ruskpr"
              type={ButtonType.Link}
              animate={false}
            >
              Github Profile
              <BsGithub className="text-md ml-1" />
            </Button>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          {/* middle nav */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
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
        </div>
      </nav>
    </header>
  );
}
