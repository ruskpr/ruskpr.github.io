import { useRef } from "react";
import Spinner from "../../ui/Spinner";

export default function ProjectDetailCarousel(props: {
  projectImages: string[] | undefined;
}) {
  const projectImages = props.projectImages as string[];
  const carouselRef = useRef<HTMLDivElement>(null);

  let renderedCarouselImages: JSX.Element[] = [];

  if (projectImages?.length > 0) {
    renderedCarouselImages = projectImages.map((img, index) => {
      return (
        <div
          key={index}
          id={`item${index}`}
          className="carousel-item w-full bg-zinc-800 border border-zinc-600"
        >
          <img
            onDragStart={(e) => e.preventDefault()}
            src={img}
            className="object-contain w-full"
          />
        </div>
      );
    });
  }

  let renderedCarouselButtons: JSX.Element[] = [];

  if (projectImages) {
    renderedCarouselButtons = projectImages.map((img, index) => {
      if (img) {
        return (
          <div
            key={index + 1}
            onMouseEnter={() => handleScroll(index)}
            onClick={() => handleScroll(index)}
            className="cursor-pointer"
          >
            <img
              onDragStart={(e) => e.preventDefault()}
              className="border border-zinc-600 object-contain w-32 lg:w-40 h-24 rounded-xl bg-zinc-800"
              src={img}
              alt={(index + 1).toString()}
            />
          </div>
        );
      } else {
        return <></>;
      }
    });
  }

  const handleScroll = (index: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft =
        carousel.scrollWidth * (index / projectImages!.length);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    // // zoom in when mouse is over carousel
    if (carousel) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const carouselX = carousel.getBoundingClientRect().x;
      const carouselY = carousel.getBoundingClientRect().y;
      const carouselWidth = carousel.getBoundingClientRect().width;
      const carouselHeight = carousel.getBoundingClientRect().height;

      const x = (mouseX - carouselX) / carouselWidth;
      const y = (mouseY - carouselY) / carouselHeight;

      const scale = 1.6;
      const translateX = (x - 0.5) * (scale - 1) * 100 * -1;
      const translateY = (y - 0.5) * (scale - 1) * 100 * -1;

      carousel.style.transform = `scale(${scale}) translate(${translateX}%, ${translateY}%)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transform = `scale(1) translate(0%, 0%)`;
    }
  };

  return (
    <div>
      <div
        className="overflow-hidden rounded-3xl w-full lg:w-2/3 bg-gray-300"
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <div
          ref={carouselRef}
          onMouseMove={(e) => handleMouseMove(e)}
          className="carousel"
        >
          {renderedCarouselImages.length > 0 ? renderedCarouselImages : <></>}
        </div>
      </div>
      <div className="flex mt-2 justify-center lg:justify-start w-full lg:w-2/3 py-2 gap-2 overflow-x-auto">
        {renderedCarouselButtons.length > 0 ? renderedCarouselButtons : <></>}
      </div>
    </div>
  );
}
