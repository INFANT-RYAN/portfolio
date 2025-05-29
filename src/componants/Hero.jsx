import ClickSpark from "./ClickSpark";



export default function Hero() {
  return (
    <div className="bg-gray-900 h-screen  flex justify-center items-center">
      <div className=" text-white w-[60%] leading-10">
        <h1 className="md:text-6xl text-4xl font-extrabold py-4">hello, I'm Infant Ryan J</h1>
        <p className="text-2xl">
          an aspiring web developer and recent graduate with a love for
          learning, building, and creating impactful solutions
        </p>
        <ClickSpark
          sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={30}
          sparkCount={8}
          duration={800}
        >
          <div className="flex gap-5 mt-5">
            <button className="bg-fuchsia-700 p-2 rounded-xl font-semibold">
              {" "}
              View My Profile{" "}
            </button>
            <button className="bg-fuchsia-700 p-2 rounded-xl font-semibold">
              {" "}
              Download Resume
            </button>
          </div>
        </ClickSpark>
      </div>
    </div>
  );
}
