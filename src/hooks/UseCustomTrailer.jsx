import { useDispatch } from "react-redux"
import { options } from "../Utils/Constant"
import { AddTrailerVideos } from "../Utils/MoviesSlices"
import { useEffect } from "react"

const MovieTrailer = () => {
    const dispatch = useDispatch()
    const GetApi = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/1075794/videos?language=en-US", options)
        const myData = await data.json()
        console.log(myData.results)
        const FilterData = myData.results.filter((video) => video.type === "Trailer")
        const trailer = FilterData ? FilterData[0] : myData.results[0]
        console.log(trailer)
        dispatch(AddTrailerVideos(trailer))
    }
    useEffect(() => {
        GetApi()
    }, [])
}
export default MovieTrailer;