import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'submit'| 'button'
}
export interface ManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void
}