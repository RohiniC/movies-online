import { useState } from 'react';



function NewMovie(props) {
    const [newMovie, setNewmovie] = useState({
        Title: "",
        Year: "",
        Poster: "",
        description: ""
    });

    const inputHandler = (e) => {
        // setNewmovie({[e.target.name]: e.target.value})
        setNewmovie((previousState) => {
            return { ...previousState, ...{ [e.target.name]: e.target.value } }

        });
    }
    const newMovieHandler = (e) => {
        e.preventDefault();
        // console.log(newMovie);
        props.addMovie({ ...newMovie, "imdbID": new Date().getTime() });
        // lifting state up
    };

    return (<div className="login">
        <form onSubmit={newMovieHandler}>
            <label>Enter name:
                <input type="text" placeholder="name" name="Title" value={newMovie.Title} onChange={inputHandler} />

            </label>

            <label>Enter year:
                <input type="text" placeholder="year" name="Year" value={newMovie.Year} onChange={inputHandler} />
            </label>
            <label>Enter poster:
                <input type="text" placeholder="text" name="Poster" value={newMovie.Poster} onChange={inputHandler} />
            </label>
            <label>Enter description:
                <input type="text" placeholder="text" name="description" value={newMovie.description} onChange={inputHandler} />
            </label>
            <button>Submit</button>
        </form>
    </div>);
}

export default NewMovie;