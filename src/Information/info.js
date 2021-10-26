import { useCallback, useEffect,  useState } from "react"
import { useParams } from "react-router"
import Infoshow from "./Infoshow"
import images from '../Imges/CS-GO-image.jpg'


const Info = (props) => {
    const [View, setView] = useState([] )
    const {id}= useParams()
 const fetchProducts = useCallback(async () => {
        const response = await fetch(` https://api.tvmaze.com/shows/${id}?embed=cast`)
    const responseData = await response.json();
  setView(responseData)
  console.log(responseData)
},[id])

useEffect(() => {
    fetchProducts()
}, [fetchProducts])


if (!View) {
    return false;
}

    return (
        <div>
        <Infoshow  name={View.name}  Image={View.image? View.image.original : images} 
        Rating={View.rating?View.rating.average:null}
        summary={View.summary}
        />
        </div>
    )
}

export default Info
