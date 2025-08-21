const VideoTitle = (title,overview) =>{
    return(
        <div>
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py9 text-lg w-1/4">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-16 text-lg w-10 rounded-lg">▶️ Play</button>
                <button className="bg-gray-500 text-white p-4 px-16 text-lg w-10 rounded-lg opacity-65">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;