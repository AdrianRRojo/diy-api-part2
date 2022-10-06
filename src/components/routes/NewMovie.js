import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function NewMovie(){
    const [form, setForm] =useState({
        title: '',
        summary: ''
    })
    const navigate = useNavigate()

    const handleSumbit = async e => {
        try{
            e.preventDefault()
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/movie`, form)
            navigate('/movies')
        }catch(err){
            console.warn(err)
        }
    }

    return(
        <div>
            <form onSubmit={handleSumbit}>
                <div>
                    <label htmlFor="title">Film Title: </label>
                    <input 
                        type = 'text'
                        id = 'title'
                        value={form.title}
                        placeholder='Film title'
                        onChange={e => setForm({...form, title: e.target.value})}
                    />

                </div>
                <div>
                    <label htmlFor="summary">Summary: </label>
                    <input 
                        type = 'text'
                        id = 'summary'
                        value={form.summary}
                        placeholder='Film summary'
                        onChange={e => setForm({...form, summary: e.target.value})}
                    />
                    
                </div>
                <button type = "submit">Submit changes</button>
            </form>
        </div>
    )
}