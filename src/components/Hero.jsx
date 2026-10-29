import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function ShimmerButton({ children, href, onClick, colors, ...props }) {
  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      onClick={onClick}
      className="shimmer-btn"
      style={{
        "--primary-color": colors.primary,
        "--bg-color": colors.background,
      }}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      <span className="shimmer-btn__border" />
      <span className="shimmer-btn__bg" />
      <span className="shimmer-btn__label">{children}</span>
    </Tag>
  );
}

export default function Hero() {
  return (
    <section className="hero relative isolate min-h-screen overflow-hidden bg-transparent text-white">

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] items-center justify-center px-6 py-24 sm:px-8 lg:px-16">

        <div className="flex flex-col items-center justify-center text-center">

          {/* Available Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/15 bg-green-500/5 px-4 py-2 backdrop-blur-md mb-6">

            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>

            <span className="text-sm font-medium text-green-100/80">
              Available for Internships
            </span>

          </div>

          {/* Role */}

          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-cyan-400">
            Front-end Developer
          </p>

          {/* Heading */}

          <h1 className="text-5xl font-black leading-tight tracking-[-0.03em] sm:text-6xl lg:text-7xl">

            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">
              Hi, I'm
            </span>

            <br />

            <span className="text-white drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
              VAISHNAVI
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/85 sm:text-xl">

            I build polished interfaces, interactive landing pages,
            and elegant product demos using React, modern CSS,
            and animation-driven design.

          </p>

          {/* Button */}

          <div className="mt-10 hidden md:flex items-center justify-center">

            <ShimmerButton
              href="#contact"
              colors={{
                primary: "#FFFFFF",
                background: "#111111",
              }}
            >
              Let's Connect
            </ShimmerButton>

          </div>

          {/* Social Icons */}

          <div className="mt-10 flex items-center justify-center gap-4">

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/vaishnavi-pm-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
              p-3
              rounded-full
              bg-black/80
              backdrop-blur-md
              border
              border-white/20
              hover:border-white/40
              hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
              hover:scale-110
              transition-all
              duration-300
              "
            >

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#FFFFFF"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>

            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/_.vai.shu.__/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
              p-3
              rounded-full
              bg-black/80
              backdrop-blur-md
              border
              border-white/20
              hover:border-white/40
              hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
              hover:scale-110
              transition-all
              duration-300
              "
            >

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#FFFFFF"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.675 1.088 4.92 4.92 0 011.088 1.675c.163.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.088 1.675 4.92 4.92 0 01-1.675 1.088c-.457.163-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 01-1.675-1.088 4.92 4.92 0 01-1.088-1.675c-.163-.457-.349-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 011.088-1.675A4.92 4.92 0 015.4 2.566c.457-.163 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163z" />
              </svg>

            </a>

            {/* Github */}

            <a
              href="https://github.com/vaishnavi-pm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="
              p-3
              rounded-full
              bg-black/80
              backdrop-blur-md
              border
              border-white/20
              hover:border-white/40
              hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
              hover:scale-110
              transition-all
              duration-300
              "
            >

              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#FFFFFF"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.53-1.36-1.28-1.72-1.28-1.72-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 012.89-.39c.98 0 1.97.13 2.89.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.4-5.25 5.68z" />
              </svg>

            </a>

            {/* Mail */}

            <a
              href="mailto:vaishpm15@gmail.com"
              aria-label="Email"
              className="
              p-3
              rounded-full
              bg-black/80
              backdrop-blur-md
              border
              border-white/20
              hover:border-white/40
              hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]
              hover:scale-110
              transition-all
              duration-300
              "
            >

              <Mail size={18} color="#FFFFFF" />

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}