import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import VaishPhoto from "../assets/vaish2.png";

const About = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black overflow-hidden flex items-center py-24"
    >
      {/* Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <h1
          className="absolute top-0 left-0 whitespace-nowrap font-black uppercase"
          style={{
            fontSize: "16vw",
            color: "rgba(255,255,255,0.03)",
            lineHeight: 1,
          }}
        >
          ABOUT ABOUT ABOUT ABOUT
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-[42%_58%] gap-20 items-center"
        >
          {/* LEFT SIDE */}
          <div className="max-w-[520px]">
            <motion.p
              variants={itemVariants}
              className="uppercase tracking-[6px] text-gray-500 text-xs mb-8"
            >
              About Me
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-black uppercase text-white mb-10"
              style={{
                fontSize: "clamp(70px,8vw,120px)",
                lineHeight: "0.88",
                letterSpacing: "-0.04em",
              }}
            >
              BEHIND
              <br />
              THE CODE
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg leading-9 mb-8"
            >
              I'm Vaishnavi PM, a Full Stack Developer, AWS Cloud Practitioner, and IT student passionate about building modern web applications and cloud-driven solutions. I enjoy turning ideas into user-focused products that solve real-world problems. Beyond development, I actively participate in tech conferences and developer meetups to learn, network, and stay ahead of emerging technologies. My goal is to build impactful products while continuously growing as a developer.

            </motion.p>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating Dot */}
              <div
                className="absolute bg-white rounded-full z-10"
                style={{
                  width: "12px",
                  height: "12px",
                  left: "-35px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />

              {/* Image */}
              <div
                className="overflow-hidden rounded-md"
                style={{
                  width: "520px",
                  height: "600px",
                }}
              >
                <img
                  src={VaishPhoto}
                  alt="Vaishnavi PM"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;