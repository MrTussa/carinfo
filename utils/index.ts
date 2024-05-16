import { FilterProps } from '@/types';
import axios from 'axios';

export async function fetchCars(filters: FilterProps) {
  const {manufacturer, year, model, limit, fuel} = filters
      const responce = await axios.request(
        {
            method: 'GET',
            url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
            params: {model: model, make:manufacturer, year: year, limit: limit, fuel: fuel},
            headers: {
              'X-RapidAPI-Key': 'e6fcb91f62msh00399125f4d9165p18917fjsn45cd1ef84581',
              'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
            }
        }
      )
      console.log(manufacturer);
      
      // console.log(responce.data);
      
      return responce.data
}