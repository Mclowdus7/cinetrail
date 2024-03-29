import React from 'react'
import './TopMovies.css'
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';

function TopMovies() {

    const apiKey = process.env.REACT_APP_API_KEY;
    const baseUrl = process.env.REACT_APP_BASE_URL;
    // const imageBase = process.env.REACT_APP_IMAGE_BASE;

    // https://api.themoviedb.org/3/movie/top_rated?api_key=a0fefc795663bf28827e25b186cb7b61&language=en-US&page=1

    const [topRatedMovies, setTopRatedMovies] = React.useState([])
    // https://api.themoviedb.org/3/movie/popular?api_key=a0fefc795663bf28827e25b186cb7b61&page=1
   
    React.useEffect(
        ()=>{
            axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`)
            .then(res =>{
                console.log(res.data.results)
                setTopRatedMovies(res.data.results.slice(0, 10))
            })
            .catch(err => console.log(err))
            //eslint-disable-next-line
        },[]
    )

  return (
    <div className='top-rated-container'>
      <h3>Top Rated Movies</h3>
      <div className='top-rated-wrapper'>
        {
            topRatedMovies.map(item =><MovieCard 
                   key={item.id}
                   movie={item} 
                   imageUrl={item.backdrop_path}
                   imgHeight="100px"
                   radius="8px"
                   cardStyle="top-rated-card"/>)
        }
      </div>
    </div>
  )
}

export default TopMovies
