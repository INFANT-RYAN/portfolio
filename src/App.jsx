import Hero from "./componants/Hero";
import Navbar from "./componants/Navbar";
import Project from "./componants/Project";
import Skill from "./componants/skill";

export default function App() {
  return (
    <div className="bg-black mx-auto">
      <Navbar></Navbar>
      <Hero></Hero>
      <h2 className="text-6xl text-white pt-20 px-20 font-bold">Projects</h2>
      <div className="grid grid-cols-2 items-center justify-center h-screen gap-4 p-20">
        <Project name="hello" ></Project>
        <Project name="hello"></Project>
        <Project name="hello" ></Project>
      </div>
      <Skill></Skill>
    </div>
  );
}
