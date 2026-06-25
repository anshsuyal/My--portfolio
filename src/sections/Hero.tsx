import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { SITE } from "../constants/site";
import { HeroBackground } from "../components/ui/HeroBackground";
import { MagneticButton } from "../components/ui/MagneticButton";
import heroImage from "../assets/ansh2-optimized.jpg";

export function Hero() {
  const socialLinks = [
    { icon: FiGithub, href: SITE.social.github, label: "GitHub" },
    { icon: FiLinkedin, href: SITE.social.linkedin, label: "LinkedIn" },
    { icon: FiTwitter, href: "#", label: "Twitter" },
    { icon: FiMail, href: `mailto:${SITE.email}`, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center pt-20 overflow-hidden bg-black transition-colors duration-500"
    >
      <HeroBackground />

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Animated Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 mb-8 animate-float"
            >
              <span className="text-lg" aria-hidden="true">Hi</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50">
                Hello, I'm {SITE.name.split(" ")[0]}
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.92] text-white mb-6">
              Hi, I am <br />
              <span className="text-gradient">
                {" "}
                {SITE.name.split(" ")[0]} {SITE.name.split(" ")[1]}{" "}
              </span>
            </h1>

            {/* Animated Typewriter Text */}
            <div className="text-xl md:text-2xl lg:text-3xl font-display flex gap-3 items-center mb-8 h-12">
              <span className="text-white/50 font-semibold">
                I am a
              </span>
              Developer
            </div>

            {/* Professional Description */}
            <p className="text-base md:text-lg text-white/70 max-w-xl mb-12 leading-relaxed font-medium">
              {SITE.tagline}. Specializing in building high-performance,
              visually stunning web applications with modern tech stacks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <MagneticButton>
                <a
                  href="#projects"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-xl font-black uppercase tracking-widest text-xs shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-all hover:scale-105 active:scale-95 overflow-hidden group"
                >
                  <span className="relative z-10">Explore Projects</span>
                  <FiArrowRight
                    size={16}
                    className="relative z-10 group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={SITE.resumeUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-black uppercase tracking-widest text-xs shadow-[0_1px_2px_rgba(0,0,0,0.02),0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-all hover:scale-105 active:scale-95"
                >
                  Download Resume
                </a>
              </MagneticButton>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="text-[#737373] hover:text-[#6366f1] transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Visual Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[500px] aspect-square">
              {/* Profile Image Area */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 0.8, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.06),0_12px_48px_rgba(0,0,0,0.04)] group"
              >
                <div className="absolute inset-0 bg-[#6366f1]/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
                <img
                  src={heroImage}
                  alt={SITE.name}
                  width="500"
                  height="500"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />

                {/* Visual Depth Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-white font-display text-3xl font-black tracking-tighter leading-none mb-1">
                    {SITE.name.toUpperCase()}
                  </span>
                  <span className="text-[#818cf8] text-[10px] font-black uppercase tracking-[0.4em]">
                    Developer
                  </span>
                </div>
              </motion.div>

              {/* Floating Tech Cards */}
              <FloatingCard
                className="top-[8%] right-[-12%] [animation-delay:0s]"
                icon="⚛️"
                label="React Expert"
              />
              <FloatingCard
                className="bottom-[18%] left-[-16%] [animation-delay:1s]"
                icon="🎨"
                label="Backend"
              />
              <FloatingCard
                className="top-[48%] right-[-20%] [animation-delay:2s]"
                icon="⚡"
                label="Fast Delivery"
              />

              {/* Background Glows and Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#6366f1]/5 blur-[120px] rounded-full -z-10 animate-pulse" />
              <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] border border-white/5 rounded-full -z-10 opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/50">
          Discover
        </span>
        <div className="w-px h-14 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  label,
}: {
  className: string;
  icon: string;
  label: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute z-20 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hidden md:flex items-center gap-3 transition-transform hover:scale-110 cursor-pointer ${className}`}
    >
      <div className="text-lg">{icon}</div>
      <div className="flex flex-col">
        <span className="text-[8px] font-black uppercase tracking-widest text-white/40 mb-0.5">
          Focus
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">
          {label}
        </span>
      </div>
    </motion.div>
  );
}
