export default function Navbar(){
    return(
        <>
        <nav className="bg-black mx-auto  text-white text-2xl">
            <ul className="md:flex  p-4   justify-center md:gap-32 ">
                <li className="hover:text-fuchsia-400 hover:underline">Home</li>
                <li className="hover:text-fuchsia-400 hover:underline">Education</li>
                <li className="hover:text-fuchsia-400 hover:underline"><a href="">Project</a></li>
                <li className="hover:text-fuchsia-400 hover:underline">Skill</li>
            </ul>
        </nav>
        
        </>
    )
}