import styles from './movie.module.css';

import MovieImage from './movieImage';



function Movie(props) {
    const yearstyling = {backgroundColor:'yellow', color: 'white'}

    return (
        <div className={styles.movieList}>
           <MovieImage poster={props.moviedata.Poster} posterstyle={styles.moviePoster}/>
            <div style={ {backgroundColor:'red', color: 'white'} }> {props.moviedata.Title} </div>
            <div style={yearstyling} > {props.moviedata.Year} </div>
            <div> description </div>
        </div>
    );
}
export default Movie;