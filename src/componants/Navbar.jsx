export default function Navbar(){
    return(
        <>
        <nav className="bg-black mx-auto  text-white">
            <ul className="md:flex  p-4 font-semibold  justify-center md:gap-32 ">
                <li className="hover:text-fuchsia-600 hover:underline">Home</li>
                <li className="hover:text-fuchsia-600 hover:underline">Education</li>
                <li className="hover:text-fuchsia-600 hover:underline">Project</li>
                <li className="hover:text-fuchsia-600 hover:underline">Skill</li>
            </ul>
        </nav>
        
        </>
    )
}