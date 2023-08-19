import { CarProps, searchCarProps } from "@/types";
export async function fetchCars({manufacturer,year,fuel,limit,model}:searchCarProps) {
  try{const headers = {
    "X-RapidAPI-Key": "074abcf7d2msh1efa8209fd72868p16732djsn1ffea7f1fcd8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response= await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&limit=${limit}&fuel=${fuel}&model=${model}`,{headers:headers}
)
const result = await response.json()
return result;}
catch (error) {
    console.error(error);
  }
  
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export const generateCarImageUrl=(car: CarProps,angle?:string)=>{
const url= new URL('https://cdn.imagin.studio/getimage')
const {make, year,model}=car;
url.searchParams.append('customer','hrjavascript-mastery')
url.searchParams.append('make',make);
url.searchParams.append('modelFamily',model.split(' ')[0]);
url.searchParams.append('zoomType','fullscreen')
url.searchParams.append('modelYear',`${year}`)
url.searchParams.append('angle',`${angle}`)
return `${url}`

}
export const updateSearchParams=(type:string,value:string)=>{
  const urlParams= new URLSearchParams(window.location.search)
  // if(type){
    urlParams.set(type,value)
  // }
  // if(value){
    // urlParams.set("value",value)
  // }
  const newPathName=`${window.location.pathname}?${urlParams.toString()}`
return newPathName
}