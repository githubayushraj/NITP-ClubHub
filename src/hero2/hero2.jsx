import Boxy from "./boxy.jsx";
import Learn from "./learn_button.jsx"

function Hero2(){
    return(
        <div className="flex bg-black md:px-24 px-16 pt-16 pb-20 space-x-2 h-fit w-full text-white">
            <div className="h-auto md:w-9/12 w-full space-y-9">
                <p>Experience</p>
                <p className="text-6xl font-bold">LOREM IPSUM</p>
                <p className="pt-16 pb-12">Lorem ipsum</p>
                <div className="bg-gray-200 w-64 h-64 visible md:hidden">
                </div>
                <div className="flex space-x-2">
                <Boxy>
                    <p className="font-bold text-xl">Technical</p>
                    <p>Experience the latest advancements in
                        technology through workshops,
                        competitions, and exhibitions.</p>
                </Boxy>
                <Boxy>
                    <p className="font-bold text-xl">Cultural</p>
                    <p>Immerse yourself in the vibrant cultural
                        performances, art exhibitions, and music
                        concerts.</p>
                </Boxy>
                </div>
                <Learn />
            </div>

            <div className="bg-gray-200 md:w-6/12 md:h-auto md:visible">
            </div>
        </div>
    )
}

export default Hero2