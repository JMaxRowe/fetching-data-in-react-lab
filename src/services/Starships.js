import axios from "axios"

export const starshipIndex = async () =>{
  
  const {data} = await axios.get('https://swapi.info/api/starships')
  return data
}
