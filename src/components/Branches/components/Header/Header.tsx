import "./Header.css";

export default function Header () {
    return (

    <div className="flex flex-col items-center m-5 gap-15 text-gray-100 justify-center h-75  " >


        <div className="first bg-[#141A33] px-4 py-2 rounded-full border-transparent text-xl"> 
            <div className="title">
                <header>
                    Branches
                </header>
            </div>
        </div>

        <div className="second text-9xl">
            <h1>
                We're EveryWhere
            </h1>
        </div>

        <div className="third text-center  text-base">
            <p>
                8 cities across India and a growing global footprint - always close to where you need us most.
            </p>
        </div>


    </div>

    );
}