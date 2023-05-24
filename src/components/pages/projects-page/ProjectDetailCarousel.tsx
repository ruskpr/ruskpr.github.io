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
        <div key={index} id={`item${index}`} className="carousel-item w-full">
          <img style={{ objectFit: "contain" }} src={img} className="w-full" />
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
              style={{ objectFit: "contain" }}
              className="w-32 h-20 rounded-xl bg-gray-200"
              src={img}
              alt={(index + 1).toString()}
            />
          </div>
        );
      } else {
        return (
          <div
            key={index + 1}
            onMouseEnter={() => handleScroll(index)}
            onClick={() => handleScroll(index)}
            className="cursor-pointer"
          >
            <Spinner size={4} />
          </div>
        );
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

  return (
    <div>
      <div
        ref={carouselRef}
        className="carousel rounded-3xl w-full lg:w-8/12 bg-gray-300"
      >
        {renderedCarouselImages.length > 0 ? renderedCarouselImages : <></>}
      </div>
      <div className="flex rounded-3xl mt-3 justify-center w-full lg:w-8/12 py-2 gap-2">
        {renderedCarouselButtons.length > 0 ? renderedCarouselButtons : <></>}
      </div>
    </div>
  );
}
