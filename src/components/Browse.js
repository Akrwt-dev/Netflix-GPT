
import Header from "./Header"; // or "../components/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryConatiner";

const Browse =()=>{
    useNowPlayingMovies()
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