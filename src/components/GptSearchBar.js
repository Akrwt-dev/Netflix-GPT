import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import ai from "../utils/gemini";
import { API_OPTION } from "../utils/constants";
import { addGeminiMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie.trim() +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGeminiSearchClick = async () => {
    console.log(searchText.current.value);

    const geminiQuery =
      "Act as a Movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      " . Only give name of five movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const geminiResult = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: geminiQuery,
    });

    // ✅ Depending on SDK, extract correctly
    const textResponse =
      geminiResult?.response?.candidates?.[0]?.content?.parts?.[0]?.text ||
      geminiResult?.text ||
      "";

    if (!textResponse) {
      console.error("No response from Gemini");
      return;
    }

    console.log("Gemini Output:", textResponse);

    // split into movies
    const geminiMovies = textResponse.split(",").map((m) => m.trim());
    console.log("Movies:", geminiMovies);

    // fetch TMDB results
    const promiseArray = geminiMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log("TMDB Results:", tmdbResults);

    // dispatch to redux
    dispatch(
      addGeminiMovieResult({
        movieNames: geminiMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          type="button"
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGeminiSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
