import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/movies'>All Movies</Link>
                </li>
                <li>
                <Link to='/movies/new'>Add a movie</Link>
            </li>
            </ul>
        </nav>
    )
}