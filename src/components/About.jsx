import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20 pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl md:mt-20">
          I am a passionate and dedicated Frontend Web Developer, driven by a
          curiosity to create immersive digital experiences. With a foundation
          in Industrial Chemistry, I ventured into the world of web development,
          merging my analytical mindset with a creative flair for crafting
          visually captivating and user-centric interfaces. My journey began
          four years ago, diving into the intricate world of CSS, HTML, and
          JavaScript. Since then, I've honed my expertise in frontend
          technologies like SASS, Material UI, and Tailwind CSS, specializing in
          frameworks like React JS and Next JS.
        </p>
        <br />
        <p className="text-xl">
          While my journey includes a touch of PHP in the backend realm, I'm
          continually expanding my horizons, delving deeper into the world of
          technology. What fuels my passion? The thrill of transforming concepts
          into tangible, interactive web solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
