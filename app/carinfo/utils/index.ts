import { FilterProps } from '@/app/carinfo/types';
import axios from 'axios';



// export async function fetchCars(filters: FilterProps) {
//   const {manufacturer, year, model, limit, fuel} = filters
//       const responce = await axios.request(
//         {
//             method: 'GET',
//             url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
//             params: {model: model, make:manufacturer, year: year, limit: limit, fuel: fuel},
//             headers: {
//               'X-RapidAPI-Key': 'e6fcb91f62msh00399125f4d9165p18917fjsn45cd1ef84581',
//               'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//             }
//         }
//       )
//       console.log(manufacturer);
      
//       // console.log(responce.data);
      
//       return responce.data
// }

// export async function fetchCars(filters: FilterProps) {
//   const {manufacturer, year, model, limit, fuel} = filters
//   console.log({model: model, manufacturer_name:manufacturer, year: year, limit: limit, fuel: fuel});
//       const responce = await axios.request(
//         {
//             method: 'GET',
//             url: 'https://fastapi-app-xlrf.onrender.com/car',
//             params: {model: model, make:manufacturer, year: year, limit: limit, fuel: fuel},
//             headers: {
//                             'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4ifQ.mJWfi2FbihqfbbJPsrsajuhHXTr7cegNKWvkUfIhjbevrrXvDOcPtK9t9zKUPJP3ajzwafCdZl2DmDesN_ZYBMahA5JSDZUcoE_qdrleKA4-oXqslQAAPbvA0UejE6H8shQwFJ1bvE-8MX_lucAKO6TC89bYkaVM9X5GVyJ-Knajpgjt6CbMEHJB11i5BiJwgQHaB7KpvgCHyVfjEHXGGIbWY_ziCoYT9SGFhfzHM5zE_z2K8pMMToaabQGAxKUm7OZ6YTI4mOIBsfUqWSmCvEyNDfliocaJuQ9LDb9W8yHAQ1fvN6-EDwBsi6rNWqwlCYMP_7-Lq-dbOtzSycVzNQ',
//                           },
//         }
//       )
      
//       console.log(responce.data);
      
//       return responce.data
// }

// export async function fetchCarById(id:number) {
//       const responce = await axios.request(
  //         {
    //             method: 'GET',
//             url: `https://fastapi-app-xlrf.onrender.com/car/${id}`,
//             headers: {
  //               'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4ifQ.mJWfi2FbihqfbbJPsrsajuhHXTr7cegNKWvkUfIhjbevrrXvDOcPtK9t9zKUPJP3ajzwafCdZl2DmDesN_ZYBMahA5JSDZUcoE_qdrleKA4-oXqslQAAPbvA0UejE6H8shQwFJ1bvE-8MX_lucAKO6TC89bYkaVM9X5GVyJ-Knajpgjt6CbMEHJB11i5BiJwgQHaB7KpvgCHyVfjEHXGGIbWY_ziCoYT9SGFhfzHM5zE_z2K8pMMToaabQGAxKUm7OZ6YTI4mOIBsfUqWSmCvEyNDfliocaJuQ9LDb9W8yHAQ1fvN6-EDwBsi6rNWqwlCYMP_7-Lq-dbOtzSycVzNQ',
//             },
//         }
//       )
//       console.log(responce.data);

//       return responce.data
// }

export const updateSearchParams = (type:string, value:string) => {
  const seachParams = new URLSearchParams(window.location.search);
  
  seachParams.set(type, value);
  const newPathname = `${window.location.pathname}?${seachParams.toString()}`;
  return newPathname
}