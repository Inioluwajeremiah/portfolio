import { useEffect } from "react";
import Typewriter from "./Typewriter";
import profilePicture from "../assets/inioluwapassport.jpg";

const HeroSection = () => {
  useEffect(() => {});
  return (
    <div
      id="portfolio"
      className="container mx-auto mt-20 w-[80%] lg:w-full lg:h-screen flex flex-row items-center justify-center "
    >
      <div className="w-1/2">
        <p className="text-5xl leading-[60px] font-bold">
          Hi, I am <br /> Inioluwa Adewara
        </p>
        <p className="text-2xl mt-4">
          I am a{" "}
          <Typewriter
            textArray={["Full Stack developer", "Mobile App Developer"]}
          />
        </p>
        <p className="w-[70%] mt-4">
          A creative and innovative Full stack engineer, passionate about
          building attractive, dynamic and innovative web and mobile
          applications that provide cutting-edge technological solutions to the
          world.
        </p>
        <button className="bg-green-800 text-white px-6 py-4 rounded-2xl mt-10">
          Download CV
        </button>
      </div>
      {/* img div */}
      <div className="w-1/2 flex flex-col justify-center items-center">
        <img
          src={profilePicture}
          alt="Inioluwa profile picture"
          className="w-[80%] object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
