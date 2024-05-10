import { manufacturers } from './../constants/index';
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}

export interface SeachManufacturerProps {
    manufacturer:string;
    setManufacturer: (manufacturer:string) => void
}