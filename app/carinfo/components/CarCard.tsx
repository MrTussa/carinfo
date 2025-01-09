"use client";

import Image from "next/image";

import { Car } from "@payload-types";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  const {
    year,
    model,
    manufacturer,
    transmission,
    fuelType,
    engineSpecifications,
    id,
    featuredImage,
  } = car;
  const router = useRouter();

  const makeAbbr = (transmission: string) =>
    transmission
      .split(" ")
      .map((word) => word[0])
      .join("");
  console.log(featuredImage);

  return (
    <div className="bg-primary-blue-100 transition-all hover:bg-white hover:shadow-md rounded-3xl group">
      <div className="relative w-full h-40 mb-3">
        {featuredImage &&
          typeof featuredImage === "object" &&
          "sizes" in featuredImage &&
          featuredImage.sizes &&
          featuredImage.sizes.thumbnail &&
          model && (
            <Image
              src={featuredImage.sizes.thumbnail.url || "/car-placeholder"}
              alt={model}
              fill
              sizes="300px 160px"
              className="rounded-t-3xl object-cover object-center"
            />
          )}
      </div>
      <div className="car-card">
        <div className="car-card__content">
          <h2 className="car-card__content-model">{model}</h2>
          <h3 className="car-card__content-manufacturer">
            {manufacturer && manufacturer.title}
          </h3>
        </div>

        <div className="relative flex w-full mt-2">
          <div className="car-card__icon-container">
            {transmission && (
              <div className="car-card__icon">
                <Image
                  src="/steering-wheel.svg"
                  width={20}
                  height={20}
                  alt="Transmission"
                />
                <p className="text-[14px]">{makeAbbr(transmission)}</p>
              </div>
            )}
            <div className="car-card__icon">
              <Image src="/tire.svg" width={20} height={20} alt="Horsepower" />
              <p className="text-[14px]">
                {engineSpecifications!.horsePower} H/P
              </p>
            </div>
            <div className="car-card__icon">
              <Image
                src="/gas.svg"
                width={18}
                height={20}
                className="w-auto"
                alt="Fuel consomption"
              />
              <p className="text-[14px]">{fuelType}</p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomButton
              title="Details"
              containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon="/right-arrow.svg"
              handleClick={() => router.push(`/carinfo/car/${id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
