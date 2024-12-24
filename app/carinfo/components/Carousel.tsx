"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Car, Media } from "@payload-types";

interface ThumbProps {
  image: {
    url: string;
    width: number;
    height: number;
  };
  selected: boolean;
  onClick: () => void;
}
const Thumb = ({ selected, image, onClick }: ThumbProps) => {
  if (!image.url || !image.width || !image.height) {
    return null; // Пропустить, если данные некорректны.
  }

  return (
    <div className={"embla-thumbs__slide"}>
      <button
        onClick={onClick}
        type="button"
        className={"embla-thumbs__slide__number relative"}
      >
        <Image
          src={image.url}
          alt="car"
          fill
          sizes={`${image.width}px ${image.height}px`}
          className={"object-cover embla-thumbs__slide__image".concat(
            selected ? " embla-thumbs__slide--selected" : ""
          )}
        />
      </button>
    </div>
  );
};

const Carousel = ({ gallery }: { gallery: Car["gallery"] }) => {
  const images = gallery ?? [];
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ stopOnMouseEnter: true }),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla ">
      <div className="embla__viewport relative" ref={emblaMainRef}>
        <div className="embla__container h-96">
          {images &&
            images.map(({ image, id }) => {
              if (typeof image === "object" && image?.url) {
                return (
                  <div className="embla__slide relative" key={id}>
                    <Image
                      src={image.url}
                      alt={image.alt || "Default alt text"}
                      fill
                      sizes={`${image.width || 100}px ${image.height || 100}px`}
                      priority
                      className="object-cover"
                    />
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images &&
              images.map(({ image, id }, i) => {
                if (typeof image === "object" && image?.sizes?.squere) {
                  const square = image.sizes.squere;
                  return (
                    <Thumb
                      key={i}
                      onClick={() => onThumbClick(i)}
                      selected={i === selectedIndex}
                      image={{
                        url: square.url || "/hero.png",
                        width: square.width || 100,
                        height: square.height || 100,
                      }}
                    />
                  );
                }
                return null;
              })}
          </div>
        </div>
      </div>
    </div>
    // <div ref={emblaRef} className="w-full h-96 relative">
    //   {images.map((image, i) => (
    //     <Image
    //       src={image}
    //       alt="car"
    //       key={i}
    //       fill
    //       priority
    //       className="object-contain"
    //     />
    //   ))}
    // </div>
  );
};

export default Carousel;
