const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py9 text-lg w-1/4 mt-4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black py-1 px-3  md:py-4 md:px-12 text-lg w-13 rounded-lg hover:bg-opacity-80">
          {" "}
          Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 text-lg w-13 rounded-lg opacity-50 hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
