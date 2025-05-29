import { div } from "three/tsl"
import python from "../assets/python.png"
import html from "../assets/html.png"
import tailwind from "../assets/tailwind.png"
export default function Skill(){
    return(
        <div className="bg-gray-900 p-20 text-white">
        <h3 className="text-6xl font-bold pb-10 ">Proficient Skill</h3>
        <div className="flex gap-6 justify-center">
            <img src={python} className="w-28" alt="" />
        <img src={html} className="w-28" alt="" />
        <img src={tailwind} className="w-28" alt="" />
        </div>
        </div>
    )
} 
