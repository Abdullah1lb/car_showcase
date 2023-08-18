import { CarProps } from "@/types";
const api_key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnRlcnByaXNlSWQiOiIyM2RlM2Y5NzIiLCJ0ZWFtSWQiOiJiMzAyZDgxYWMzIiwidXNlcklkIjoiYTc0YzYyMWUiLCJzZWNyZXRLZXkiOiJhYjg3MzdmNDE5MDY0M2JhYWJjMWE0ZTQxNzJmOWUyYSIsImlhdCI6MTY5MjMzNDgzOSwiZXhwIjoxNjk0OTI2ODM5fQ.2eTZ9ygOgHBjJa_OCE_Ox8Huw3E10EZwiufBIvlUqJo'
export async function fetchCars() {
  try{const headers = {
    "X-RapidAPI-Key": "074abcf7d2msh1efa8209fd72868p16732djsn1ffea7f1fcd8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=toyota&year=2018',{headers:headers}
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

  }