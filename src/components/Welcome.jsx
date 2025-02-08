import Lottie from "lottie-react";
import hhhh from "../assets/14.json";

function Welcome(){

    return(

        <div className="h-screen flex items-center justify-center">

            <div className="w-[80%]">

                <Lottie animationData={hhhh}></Lottie>

            </div>

        </div>

    )

}

export default Welcome