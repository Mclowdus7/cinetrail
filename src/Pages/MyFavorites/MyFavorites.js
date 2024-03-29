import React from 'react'
import './MyFavorites.css'
import {UserContext} from '../../contexts/UserContext';
import axios from 'axios';
import MovieCard from '../../Components/MovieCard/MovieCard';

function MyFavorites() {
    const serverUrl = process.env.REACT_APP_SERVER_URL;

    //show all favorite movies for a particular user
    //favoriteMovies/user/:userid
    const {user, token} = React.useContext(UserContext);

    const [movies, setMovies] = React.useState([])

    React.useEffect(
        ()=>{
            //make api call to get favorites for this user
            axios.get(`${serverUrl}/favoriteMovies/user/${user?._id}`)
            .then(res =>{
                console.log(res.data.favorites)
                setMovies(res.data.favorites)
            })
            .catch(err => console.log(err))
            //eslint-disable-next-line
        }, [user]

    )


  return (
    <div className='favorites-container'>
        {
            token?
            // movies.map(item=><p>{item?.movie[0].title}</p>)

            movies.map(item =><MovieCard 
                key={item?.movie[0]._id}    
                movie={item?.movie[0]} 
                imageUrl={item?.movie[0].poster_path}
                imgHeight="300px" 
                radius="16px"
                cardStyle="popular-card" />)
            :
            <p>Sign in to save movies</p>
        }
    </div>
  )
}

export default MyFavorites
