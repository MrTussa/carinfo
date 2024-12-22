"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Car } from "@payload-types";

interface ThumbProps {
  selected: boolean;
  image: { url: string; width: number; height: number };
  onClick: () => void;
}

interface SlideProps {
  image: { url: string; alt: string; width: number; height: number };
  id: string;
}

const Thumb = ({ selected, image, onClick }: ThumbProps) => {
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
          sizes={`${image!.width}px ${image!.height}px`}
          className={"object-cover embla-thumbs__slide__image".concat(
            selected ? " embla-thumbs__slide--selected" : ""
          )}
        />
      </button>
    </div>
  );
};

const Carousel = (data: Car["gallery"]) => {
  const { images } = data;

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
            images.map(({ image, id }: SlideProps) => (
              <div className="embla__slide relative" key={id}>
                <Image
                  src={image!.url}
                  alt={image!.alt}
                  fill
                  sizes={`${image!.width}px ${image!.height}px`}
                  priority
                  className="object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images &&
              images.map(
                (
                  {
                    image,
                  }: {
                    image: {
                      sizes: {
                        squere: { width: number; height: number; url: string };
                      };
                    };
                  },
                  i: number
                ) => (
                  <Thumb
                    key={i}
                    onClick={() => onThumbClick(i)}
                    selected={i === selectedIndex}
                    image={image!.sizes.squere}
                  />
                )
              )}
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
