
import Header from "./Header"; // or "../components/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopulaeMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";

const Browse =()=>{
    useNowPlayingMovies()
    usePopularMovies()
    useTopRated()
    useUpComing()
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            
        
        </div>
        // MainContainer
            // -VideoBackground
            // -VideoTitle
        // SecondaryContainer
            // -MovieList * n
            //  -Cards * n
    )
}
export default Browse;