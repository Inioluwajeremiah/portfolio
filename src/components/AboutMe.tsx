const AboutMe = () => {
  return (
    <div id="about" className="container mx-auto py-20  ">
      <div className="w-full flex flex-col justify-center items-center">
        <p className="text-center text-3xl font-bold">AboutMe</p>
        <div className="flex flex-row items-center gap-x-4 text-center mt-2">
          <div className="h-2 w-14 rounded-md bg-green-800"></div>
          <div className="h-2 w-4 rounded-md bg-green-800"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
