import { useNavigate } from "react-router-dom";
function Fin(props) {

    const navigate = useNavigate();
    window.onpopstate = function () {
        navigate("/fin");
    }
    return (

        <div>

            <div className="pt-24 flex flex-col items-center gap-24">
                <h1 className="w-10/12  text-4xl xl:text-8xl font-black">Go and continue doing productive work.</h1>
                <div className="w-10/12 flex flex-col gap-8">
                    <div className="">
                        <p className="text-2xl  text-left font-light">this is not anti youtube, this is anti distraction.</p>
                    </div>
                    <div className="">
                        <p className="text-2xl text-left font-light">some tools to helps you avoid distraction and be more intentional with your use of Youtube:</p>
                        <ul className="text-2xl text-left font-bold">
                            <li>DF Youtube</li>
                            <li>Blocktube</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Fin;