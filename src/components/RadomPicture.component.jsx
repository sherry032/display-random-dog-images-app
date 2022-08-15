import {useEffect, useState} from 'react'
import useHttp from '../hooks/use-http'

const RadomPicture = () => {
    const {isLoading, error, sendRequest:fetchRadomImage,}  = useHttp()
    const [imageUrl, setImageUrl] = useState("")
    useEffect(()=>{
      const applyData = (data) =>{
        const image = data.message
        setImageUrl(image)
    }

      fetchRadomImage('https://dog.ceo/api/breeds/image/random', applyData)

  },[fetchRadomImage])
  return (
    <section>
    {!isLoading && !error && <img src={imageUrl} alt="A radom dog"/>}
    {isLoading && <p>Loading...</p>}
    {!isLoading && error && <p>{error}</p>}
    </section>
  )
}

export default RadomPicture