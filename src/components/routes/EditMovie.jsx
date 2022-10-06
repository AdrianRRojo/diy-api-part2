import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function EditMovie(){
    //! Creates a form to edit a movies title and summary
    const [editMovieForm, setEditMovieForm] = useState({
        title: '',
        summary: ''
    })
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const findMovie = async () => {
            try{
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/movie/${id}`)
                setEditMovieForm(response.data)
            }catch(err){
                console.warn(err)
            }
        }
        findMovie()
    }, []) //! lol took me so long to remember the []

    const handleChanges = async e => {
        try{
            e.preventDefault()
            const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/movie/${id}`,editMovieForm)
            navigate(`/movies/${id}`)
        }catch(err){
            console.warn(err)
        }
    }

    return(
        <div>Fix this movie: 

            <form onSubmit={handleChanges}>
                <div>
                    <label htmlFor="title">Film Title: </label>
                    <input 
                        type = 'text'
                        id = 'title'
                        value={editMovieForm.title}
                        placeholder='Film title'
                        onChange={e => setEditMovieForm({...editMovieForm, title: e.target.value})}
                    />

                </div>
                <div>
                    <label htmlFor="summary">Summary: </label>
                    <input 
                        type = 'text'
                        id = 'summary'
                        value={editMovieForm.summary}
                        placeholder='Film summary'
                        onChange={e => setEditMovieForm({...editMovieForm, summary: e.target.value})}
                    />
                    
                </div>
                <button type = "submit">Submit changes</button>
            </form>
            <Link to = {`/movies/${id}`}>Cancel</Link>

        </div>
    )
}
