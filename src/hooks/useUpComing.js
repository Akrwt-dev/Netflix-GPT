import { useDispatch } from "react-redux";
import {  addPopularMovies, addTopRated, addUpComing } from "../utils/movieSlice";
import { API_OPTION } from "../utils/constants";
import { useEffect } from "react";



const useUpComing = ()=>{
    // Featching Data from TMDB API and updating the store
    const dispatch = useDispatch()
    const getNowPlayingMovies = async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTION)
        const json = await data.json();
        dispatch(addUpComing(json.results))

    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])
}

export default useUpComing;