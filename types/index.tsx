import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'submit'| 'button'
    textStyles?:string
    rightIcon?:string
    isDisabled?:boolean
}
export interface ManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void
}

export interface CarProps{
    city_mpg: number,
    class: string,    
    combination_mpg: number,
    cylinders: number,
    displacement: number,
    drive: string,
    fuel_type: string,
    highway_mpg: number,
    make: string,
    model: string,
    transmission: string,
    year: number
}
export interface searchCarProps{
    manufacturer:string;
    year:number;
    fuel:string;
    limit:number;
    model:string
}

interface optionsProps{
    title:string;
    value:string
}
export interface carOptionsProps{
    title:string;
    options:optionsProps[]
}