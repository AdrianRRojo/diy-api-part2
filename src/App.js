import './App.css';

import Home from './components/routes/Home'
import Movie from './components/routes/Movie'
import Movies from './components/routes/Movies'
import NewMovie from './components/routes/NewMovie'
import EditMovie from './components/routes/EditMovie'
import NavBar from './components/partials/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route 
            path = '/'
            element = {<Home />}
          />
           <Route 
            path = '/movies'
            element = {<Movies />}
          />
           <Route 
            path = '/movies/new'
            element = {<NewMovie />}
          />
           <Route 
            path = '/movies/:id'
            element = {<Movie />}
          />
           <Route 
            path = '/movies/:id/edit'
            element = {<EditMovie />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
