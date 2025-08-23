import Header from "./Header"; // or "../components/Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryConatiner";
import usePopularMovies from "../hooks/usePopulaeMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUpComing";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComing();
  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
        // wraped inside <></> because it take only one value and we wraped it inside <> in other words we ceated a parent
      }
    </div>
    // MainContainer
    // -VideoBackground
    // -VideoTitle
    // SecondaryContainer
    // -MovieList * n
    //  -Cards * n
  );
};
export default Browse;
