import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import YouTube from 'react-youtube';

function Video(props) {

    const [isItDone, setisItDone] = useState(false);
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

    function onVideoOnEnd(e) {
        // access to player in all event handlers via event.target
        console.log(e.target);
        setisItDone(true);
    }
    return (

        <div >
            <div className="flex items-center justify-center h-screen">
                <YouTube videoId={videoId} opts={opts} onEnd={onVideoOnEnd} />
            </div>
            {isItDone ? navigate("/fin") : console.log("false")}
        </div>
    );

}


export default Video;