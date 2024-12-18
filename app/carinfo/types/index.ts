import { manufacturers } from '../constants/index';
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean;
}

export interface SeachManufacturerProps {
    manufacturer:string;
    setManufacturer: (manufacturer:string) => void
}

export interface CarProps { 
    class?:string | null | undefined;
    engineSpecifications?:{
        engineType?: string | null | undefined;
        horsePower?: number | null | undefined;
        torque?: number | null | undefined;
        cylinders?: number | null | undefined; 
    } | undefined; 
    fuelType:string | null | undefined;
    manufacturer:object | null | undefined;
    model:string | null | undefined;
    transmission:string | null | undefined;
    year:number | null | undefined;
    price: number | null | undefined;
    id:number | null | undefined;
}
export interface FilterProps {
    manufacturer?: string
    year?: number
    fuel?: string
    limit?: number
    model?: string
}

export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[]
}

export interface ShowMoreProps {
    pageNumber:number;
    isNext:boolean;
}

export interface CarouselProps {
    images: string[]
}

export interface SearchParamsProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}