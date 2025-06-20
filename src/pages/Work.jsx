import Card from "../components/Card";
import img1 from "../assets/images/project1.png";
import realest from "../assets/images/realest.png";
import myouApp from "../assets/images/myou-app.png";
import twitterBack from "../assets/images/twitter-back.png";
import inbbox from "../assets/images/inbbox.png";

const Home = ({ colorMode }) => {
  return (
    <div className="flex flex-col items-center w-full md:max-w-[70%] mx-auto py-4 px-2 md:px-0">
      {/* Container for the greeting and work section */}
      <div className="flex flex-col w-full">
        {/* Greeting */}
        <div
          className={`${
            colorMode
              ? "bg-[#a3a1a1] text-[#161515]"
              : "bg-[#2c2a2a] text-[#ff4741]"
          } self-center w-fit px-4 py-2 my-4 rounded-lg font-semibold text-center`}
        >
          Hi, a full-stack developer based in Kenya
        </div>

        {/* Work Section */}
        <div className="p-2 md:p-0 mb-6">
          <h1
            className={`font-semibold text-2xl border-b-2 w-fit pb-1 ${
              colorMode
                ? "border-[#ff4741] text-[#161515]"
                : "border-[#ff4741] text-white"
            }`}
          >
            Work
          </h1>
          <p
            className={`mt-4 text-base leading-relaxed ${
              colorMode ? "text-[#161515]" : "text-gray-300"
            }`}
          >
            Anthony is a full-stack developer. I can work both remotely and
            in-office setup to ensure on-time commitment of the product in
            construction. The following are some of the projects I've been
            working on.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <Card
          colorMode={colorMode}
          description="Simple School Portal"
          img={img1}
          linkTo="https://simple-school-portal.netlify.app"
        />
        <Card
          colorMode={colorMode}
          description="Real Estate Web App"
          img={realest}
          linkTo="https://simple-real-estate-web-app.netlify.app"
        />

        <Card
          colorMode={colorMode}
          description="Myou App (Social Media)"
          img={myouApp}
          linkTo="https://myou-app.netlify.app"
        />
        <Card
          colorMode={colorMode}
          description="Twitter Clone (Backend)"
          img={twitterBack}
          linkTo="https://twitter-back.netlify.app"
        />
        <Card
          colorMode={colorMode}
          description="Inbbox (Chat Application)"
          img={inbbox}
          linkTo="https://inbbox.netlify.app"
        />
      </div>
    </div>
  );
};

export default Home;
