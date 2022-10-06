import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


export default function Home(){
    const [movies,setMovies] = useState([])
    
    useEffect(() => {
        const getMovies = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movie`)
                setMovies(response.data)
            }catch(err){
                console.warn(err)
            }
        }
        getMovies()
    },[])

    const groovyMovieLinks = movies.map(movie => {
        return(
            <div key = {`${movie._id}`}>
                <Link to = {`/movies/${movie._id}`}>
                    {movie.title}
                </Link>
            </div>
        )
    })
    return(
        <div>
            <h1>DIY API MOVIES!</h1>
            <h2>IMDB but worse! </h2>
            {groovyMovieLinks}
        </div>
    )
}