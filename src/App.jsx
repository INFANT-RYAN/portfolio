import Hero from "./componants/Hero";
import Navbar from "./componants/Navbar";
import Project from "./componants/Project";
import bot from "./assets/bot.png";

export default function App() {
  return (
    <div className="bg-black">
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="flex justify-center gap-4 p-20">
        <Project name="hello" ></Project>
        <Project name="hello"></Project>
        <Project name="hello" ></Project>
      </div>
    </div>
  );
}
