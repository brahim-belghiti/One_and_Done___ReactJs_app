import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';

function Video(props) {

    const [isItDone, setisItDone] = useState(false);
    const [haveError, sethaveError] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const pathName = location.pathname;
    let videoId = pathName.replace("/video/", "");

    const opts = {
        height: '640',
        width: '1032',
        playerVars: {
            autoplay: 1,
        },
    };

    function onVideoError(e) {
        alert('make sure to past the correct link');
        sethaveError(true);
    }

    function onVideoOnEnd(e) {
        // access to player in all event handlers via event.target
        setisItDone(true);
    }
    return (

        <div >
            {haveError ? <div className="flex flex-col items-center w-full pt-4 pb-16">
                <Link to="/">  <button className="z-80 bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-full">back to home</button>
                </Link> </div> : ""}

            <div className="flex items-center justify-center h-screen">
                <YouTube videoId={videoId} opts={opts} className={"youtubeContainer"} onEnd={onVideoOnEnd} onError={onVideoError} />
            </div>
            {isItDone ? navigate("/fin") : console.log("false")}
        </div>
    );

}


export default Video;