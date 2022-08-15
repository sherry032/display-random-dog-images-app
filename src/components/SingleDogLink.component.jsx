import {useEffect, useState} from 'react'
import useHttp from '../hooks/use-http'


const SingleDogLink= ({breed}) => {
  const {isLoading, error, sendRequest:fetchImageUrl,}  = useHttp()
  const [imageUrl, setImageUrl] = useState([])
  useEffect(()=>{
      const applyData = (data) =>{
        setImageUrl(data.message)
      }
      fetchImageUrl(`https://dog.ceo/api/breed/${breed}/images/random`, applyData)

  },[fetchImageUrl, breed])
  return (
    <li>
        {!isLoading && !error && <a href={imageUrl}>{`${breed[0].toUpperCase()}${breed.slice(1)}`}</a>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
    </li>
  )
}

export default SingleDogLink
