"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { CarDetails } from ".";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { year, make, model, transmission, fuel_type, power, price } = car;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="car-card group">
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car mode"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="car-card__content">
        <h2 className="car-card__content-model">{model}</h2>
        <h3 className="car-card__content-manufacturer">{make}</h3>
      </div>
      <p className="car-card__price">
        <span>100.000.000 сум</span>
      </p>

      <div className="relative flex w-full mt-2">
        <div className="car-card__icon-container">
          <div className="car-card__icon">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="коробка передач"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Автомат" : "Ручная"}
            </p>
          </div>
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{power} Л/С</p>
          </div>
          <div className="car-card__icon">
            <Image src="/gas.svg" width={20} height={20} alt="расход топлива" />
            <p className="text-[14px]">{fuel_type}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="Детали"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
// TODO: Добавить цену машины
export default CarCard;
