import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import TiltedCard from "./TiltedCard";
import GradientText from "./GradientText";
import VaishPhoto from "../assets/wall1.jpg";

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B497CF"]}
            className="text-4xl md:text-6xl lg:text-5xl font-semibold tracking-tight"
          >
            What I Know
          </GradientText>
        </div>

        {/* Premium Card */}
        <div className="flex justify-center">
          <TiltedCard>
            <div
              className="
              relative
              overflow-hidden
              rounded-[20px]
              border border-white/10
              bg-[#09090B]
              p-8
              w-full
              max-w-225
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_25px_80px_rgba(0,0,0,0.55)]
            "
            >

              {/* Interior Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-linear-to-br from-white/3 via-transparent to-white/2" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">

                {/* Left Side Photo */}
                <div className="w-full lg:w-1/2 rounded-[30px] border border-white/10 bg-white/3 p-4">
                  <img
                    src={VaishPhoto}
                    alt="Portfolio"
                    className="
                    h-95
                    w-full
                    object-cover
                    rounded-3xl
                    "
                  />
                </div>

                {/* Right Side Content */}
                <div className="w-full lg:w-1/2">

                  <h3 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                    Web Development
                  </h3>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 mt-8">

                    <Link
                      to="/project/service"
                      className="
                      px-6 py-3
                      rounded-2xl
                      border border-cyan-400/30
                      bg-white/2
                      text-white
                      transition-all duration-300
                      hover:border-cyan-400
                      hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
                      "
                    >
                      View Projects
                    </Link>

                    <a
                      href="https://github.com/vaishnavi-pm?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                      className="
                      w-12 h-12
                      rounded-2xl
                      border border-white/10
                      flex items-center justify-center
                      text-white
                      transition-all duration-300
                      hover:bg-white/5
                      "
                    >
                      <FaGithub size={20} />
                    </a>

                  </div>

                </div>

              </div>
            </div>
          </TiltedCard>
        </div>

      </div>
    </section>
  );
};

export default Skills;