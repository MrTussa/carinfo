"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { CarouselProps } from "@/types";
import Autoplay from "embla-carousel-autoplay";

interface ThumbProps {
  selected: boolean;
  image: string;
  onClick: () => void;
}

const Thumb = ({ selected, image, onClick }: ThumbProps) => {
  return (
    <div className="embla-thumbs__slide">
      <button
        onClick={onClick}
        type="button"
        className={"embla-thumbs__slide__number relative".concat(
          selected ? " embla-thumbs__slide--selected" : ""
        )}
      >
        <Image src={image} alt="car" fill className="object-contain" />
      </button>
    </div>
  );
};

const Carousel = ({ images }: CarouselProps) => {
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
          {images.map((image, i) => (
            <div className="embla__slide relative" key={i}>
              <Image
                src={image}
                alt="car"
                key={i}
                fill
                priority
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {images.map((image, i) => (
              <Thumb
                key={i}
                onClick={() => onThumbClick(i)}
                selected={i === selectedIndex}
                image={image}
              />
            ))}
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
