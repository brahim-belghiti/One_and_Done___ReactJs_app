

function Home() {

    return (

        <div>
            <div className="pl-24 pt-24 flex flex-col justify-center gap-24">
                <div>
                    <h1 className="text-8xl text-left font-black">Escape</h1>
                    <h1 className="text-8xl text-lef font-black" >the rabbit hole</h1>
                </div>
                <div className="flex flex-col justify-around gap-4">
                    <input className="mt-1 block py-2 px-3 border border-orange-400 bg-white rounded-full shadow-sm focus:outline-none focus:ring-orange-600 focus:border-orange-600 w-8/12 placeholder:font-light placeholder:text-2xl text-2xl sm:text-sm h-16" placeholder="Insert your Youtube video link here:" />
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl py-2 px-4 rounded-full h-16 w-4/12">Play video</button>
                </div>
            </div>
        </div>

    );
}


export default Home;