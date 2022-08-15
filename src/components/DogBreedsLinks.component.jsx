import {useState, useEffect} from "react"
import useHttp from "../hooks/use-http"
import SingleDogLink from "./SingleDogLink.component"

const DogBreedsLinks = () => {
  const {isLoading, error, sendRequest:fetchDogBreeds,}  = useHttp()
  const [dogBreeds, setDogBreeds] = useState([])
  useEffect(()=>{

      const applyData = (data) =>{
        const dogBreedsObj = data.message
        const dogBreedsArr = Object.entries(dogBreedsObj).map(breed => breed[0])
        setDogBreeds(dogBreedsArr.slice(0, 10))
      }

      fetchDogBreeds('https://dog.ceo/api/breeds/list/all', applyData)

  },[fetchDogBreeds])
  return (
    <ul>
      {!isLoading && !error && dogBreeds.map(breed=><SingleDogLink breed={breed} key={breed}/>)}
      {isLoading && <li>Loading...</li>}
      {!isLoading && error && <li>{error}</li>}
    </ul>
  )
}

export default DogBreedsLinks