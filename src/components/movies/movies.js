
import './movie.css';
import Movie from './movie';
import NewMovie from './newMovie'
import { useState, useEffect } from 'react';

function Movies() {
    // JSON - Javascript Object Notation
    const [movies, setMovie] = useState([]);

    const getMovies = () => {
        fetch('http://localhost:3000/movies').then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            return false
        }).then((formattedResponse) => {
            if (formattedResponse) {
                setMovie(formattedResponse);
            }
        });
    }

    useEffect(() => {
        getMovies();
    }, []);

    const addNewMovieHandler = (movie) => {
        // console.log(movie);

        fetch('http://localhost:3000/movies', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movie)
        }).then((response) => {
            if (response.status === 201) {
                return response.json();
            }
            return false
        }).then((formattedResponse) => {
            if (formattedResponse) {
                getMovies();
                // setMovie(formattedResponse);
            }
        });
        // setMovie((previousMovies) => {
        //     return [...[movie], ...previousMovies];
        // });
    };
    return (
        <div>
            <div className="new-movie-container">
                <NewMovie addMovie={addNewMovieHandler} />
            </div>
            <div className="movie-list-container">
                {
                    movies.map((movie) => {
                        return <Movie key={movie.imdbID} moviedata={movie} />
                    })
                }

            </div>
        </div>
    );
}
export default Movies;