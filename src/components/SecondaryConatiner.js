import { useSelector } from "react-redux"
import MovieList from "./MovieList"

// consist of movie list 
// MovieList - Popular
//   MoviesCards*n
// MovieList - Now Playing
// MovieList - Trending
// MovieList - Horror

const SecondaryContainer = ()=>{

    const movies = useSelector(store => store.movies)
    return(
        movies.nowPlayingMovies && (
        <div className=" z-20 bg-black ">
            <div className="-mt-36 pl-12 relative">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies }/>
                <MovieList title={"Top Rated"} movies={movies.topRated}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming Movies"} movies={movies.upComing}/>
            </div>
        </div>
    ))
}
export default SecondaryContainer