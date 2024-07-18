import { manufacturers } from './../constants/index';
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
    class:string;
    cylinders:number;
    fuel_types:string;
    make:string;
    model:string;
    transmission:string;
    power:number
    year:number;
    price: number;
    id:number;
}
export interface FilterProps {
    manufacturer: string
    year: number
    fuel: string
    limit: number
    model: string
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