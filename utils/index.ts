
export async function fetchCars() {
  try{const headers = {
    "X-RapidAPI-Key": "074abcf7d2msh1efa8209fd72868p16732djsn1ffea7f1fcd8",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response= await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers:headers}
)
const result = await response.json()
return result;}
catch (error) {
    console.error(error);
  }
  
}
