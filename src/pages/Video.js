import { useLocation } from "react-router-dom";

function Video(props) {


    const location = useLocation();
    console.log(location.pathname);
    const pathName = location.pathname;
    let result = pathName.replace("/video/", "");



    return (

        <div >
            <div className="flex items-center justify-center h-screen">

                <iframe
                    className="w-10/12 h-[612px]"
                    src={`https://www.youtube.com/embed/${result}`}
                    frameBorder="0"
                    allowFullScreen
                    title="Embedded youtube"
                />

            </div>
        </div>

    );

}


export default Video;