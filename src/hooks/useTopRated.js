import { useDispatch } from "react-redux";
import { addPopularMovies, addTopRated } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";

const useTopRated = () => {
  // Featching Data from TMDB API and updating the store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useTopRated;
