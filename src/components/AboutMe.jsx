import React from "react";

function AboutMe() {
  return (
    <>
      <div className={`pt-20 bg-background`}>
        <div className="px-4 lg:px-20">
          <h1 className="text-heading text-5xl lg:text-6xl md:text-6xl text-center font-semibold mb-4">
            About Me
          </h1>
          <p className="text-text text-xl lg:text-2xl md:text-2xl mb-4 text-justify">
            Hi, I’m Sushil Kumar, a passionate Graphic Designer with over 2
            Years of experience in creating impactful visuals for events,
            campaigns, and digital platforms. Recently, I’ve ventured into the
            dynamic world of UI/UX design, combining my creative expertise with
            user-centered approaches to craft seamless digital experiences. From
            designing award-winning posters to developing interactive
            dashboards, my journey is fueled by a love for storytelling and
            problem-solving through design.
            <br />
            When I’m not designing, I enjoy exploring new tools, mentoring
            peers, and turning ideas into reality.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
