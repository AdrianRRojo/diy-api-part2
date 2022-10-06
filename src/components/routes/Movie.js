import { useParams, Link, useNavigate, useLinkClickHandler } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Movie(){
    const [movie, setMovie] = useState({})

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getMovie = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movie/${id}`)
                setMovie(response.data)
            }catch(err){
                console.warn(err)
            }
        }
    }, [])

    const handleDelete = async () => {
        try{
            await axios.delete(`${process.env.REACT_APP_SERVER_URL}/movie/${id}`)
            navigate('/movies')
        }catch(err){
            console.warn(err)
        }
    }
    return(
        <div>
            <h1>Movie details: </h1>

            <div>
                <Link to = {`/movies/${id}/edit`}>
                    <button>Edit this film</button>
                </Link>
                <button
                    onClick={handleDelete}>
                DELETE    
                </button>
            </div>
            <div>
                <h1>{movie.title}</h1>
                <p> {movie.summary}</p>
            </div>
        </div>
    )
}