import { useState } from "react";
import { Link } from "react-router-dom";
import instruction from "../assets/capture.png";

function Home(props) {

    const [inputValue, setInputValue] = useState('');
    // const [buttonDisabled, setbuttonDisabled] = useState(false);

    function handleChangeInput(e) {
        const userInput = e.target.value;
        let videoLink = "";
        switch (userInput[0]) {
            case "h":
                if (userInput[8] === "m") {
                    const videoLink = userInput.substr(30);
                    setInputValue(videoLink);
                } else {
                    const videoLink = userInput.substr(32);
                    setInputValue(videoLink);
                }
                break;
            case "w":
                videoLink = userInput.substr(24);
                setInputValue(videoLink);
                break;
            case "y":
                videoLink = userInput.substr(20);
                setInputValue(videoLink);
                break;
            default:
        }
    }



    return (

        <div>
            <div className="pl-8 pt-16 xl:pl-24 xl:pt-24 flex flex-col justify-center gap-8">
                <div>
                    <h3 className="text-3xl xl:text-6xl text-left font-light">Escape</h3>
                    <h3 className="text-3xl xl:text-6xl text-lef font-light" >the rabbit hole. </h3>
                    <h3 className="text-3xl xl:text-6xl text-lef font-black" >be focused</h3>
                </div>
                <div className="flex flex-col justify-around gap-4">
                    <img className="w-10/12" src={instruction} alt="link format instructions" />
                    <input className="mt-1 block py-2 px-3 border border-orange-400 bg-white rounded-full shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 w-10/12 font-light text-1xl xl:text-2xl h-16"
                        placeholder="past your Youtube video link here: https://www.youtube.com/watch?v=D55ctBYF3AY" value={inputValue} onChange={handleChangeInput} />
                    {!inputValue ? "" : <Link to={{ pathname: `/video/${inputValue}`, state: `${inputValue}` }}>  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-10/12 xl:w-4/12">Play video</button>
                    </Link>}
                </div>
                <div className="columns-2 w-4/5">
                    <p className="text-1xl xl:text-1xl text-lef font-light">Sometimes a friend or a coworker sends you a YouTube video to watch,
                        while working. And you tell yourself, I'm going to watch it and comeback to work. But before you know it,
                        you find yourself have spent more than 30 minutes on YouTube (The average mobile YouTube session is now 40 minutes).
                    </p>
                    <p className="text-1xl xl:text-1xl text-lef font-light"> So  If you have  to watch that video, then watch it here, and go about your work. This could  apply to watching a YouTube
                     tutorial to get some quick  information and then immediatly leave, once the video is completed.</p>
                </div>
            </div>
        </div>

    );
}


export default Home;