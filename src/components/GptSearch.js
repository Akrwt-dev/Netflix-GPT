import { BG_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptrMovieSuggestion";

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="background-img"></img>
    </div>
    <div className="">
      <div className="fixed -z-10">
        <img src={BG_URL} alt="background-img"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  );
};

export default GptSearch;
