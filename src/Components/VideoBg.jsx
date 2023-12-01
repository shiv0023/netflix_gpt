
import { useSelector } from 'react-redux';
import MovieTrailer from '../hooks/UseCustomTrailer';



const VideoBg = () => {
    MovieTrailer()
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

    return (
        <div className='w-screen cursor-pointer'>
            <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"} ></iframe>
        </div>
    )
}

export default VideoBg