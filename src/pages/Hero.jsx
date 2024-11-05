import HeroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-7xl items-center justify-between gap-16"
    >
      <div className="flex-1 text-white">
        <h1 className="mb-2 mt-0 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-6xl font-bold leading-tight text-transparent">
          Build Your Own
        </h1>
        <p className="mb-8 text-2xl">
          A web app to help you on your entrepreneurial journey.
        </p>
        <p className="mb-12 max-w-[500px]">
          Are you tired of feeling overwhelmed by the business startup process?
          Do you wish there was a roadmap to guide you through all the different
          steps?
          <br />
          <br />
          Build Your Own is here to help. Our app will walk you through every
          step of the startup process, from initial idea generation to launch
          and beyond.
        </p>
        <a
          href="/main"
          className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Get Started
        </a>
      </div>
      <div className="hidden md:block">
        <img
          src={HeroImg}
          alt="Build Your Own"
          className="h-[600px] w-[400px]"
        />
      </div>
    </section>
  );
};

export default Hero;
