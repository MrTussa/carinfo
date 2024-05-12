import axios from 'axios';

export async function fetchCars() {
      const responce = await axios.request(
        {
            method: 'GET',
            url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
            params: {model: 'corolla'},
            headers: {
              'X-RapidAPI-Key': 'e6fcb91f62msh00399125f4d9165p18917fjsn45cd1ef84581',
              'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }
        }
      )
      return responce.data
}