"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Photography Website",
    description: "Frontend website",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/photography_website.png",
    live: "",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Nike Shoe Store",
    description: "Ecommerce website for Shoe Sales",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Sanity CMS" }],
    image: "/assets/work/nike_Page.png",
    live: "",
  },
  {
    num: "03",
    category: "FullStack",
    title: "Fullstack Website",
    description: "Fullstack Website",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
  },
];

const Work = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [hovering, setHovering] = useState(false);
  const revealRef = useRef(null);

  const handleMouseMove = (e) => {
    if (revealRef.current && currentProject !== null) {
      const mousePos = { x: e.clientX, y: e.clientY };
      const revealEl = revealRef.current;
      const revealWidth = revealEl.offsetWidth;
      const revealHeight = revealEl.offsetHeight;

      // Calculate offset to center the image around the cursor
      const offsetX = mousePos.x - revealWidth / 3;
      const offsetY = mousePos.y - revealHeight / 3;

      gsap.to(revealRef.current, {
        x: offsetX,
        y: offsetY,
        opacity: hovering ? 1 : 0,
        ease: "power3.out",
        duration: 0.3,
      });
    }
  };

  const onMouseEnter = (index) => {
    setCurrentProject(index);
    setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentProject(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="relative px-4 py-10 md:px-6 md:py-14 lg:py-16"
      onMouseMove={handleMouseMove}
    >
      <h1 className="font-bold leading-tight -tracking-wider dark:text-accent text-accentLight text-7xl md:text-9xl mb-8">
        Projects
      </h1>
      <p className="text-xl md:text-2xl dark:text-white text-black mb-10">
        The tech projects I've created
      </p>

      <div>
        <ul className="grid border-b dark:border-white border-black mb-10">
          {projects.map((p, index) => (
            <li
              key={index}
              className="list-item relative translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100"
              onMouseEnter={() => onMouseEnter(index)}
              onMouseLeave={onMouseLeave}
            >
              <a
                className="flex flex-col justify-between border-t dark:border-t-white border-t-black py-10 dark:text-white text-black md:flex-row"
                aria-label={p.title}
                href={p.live || "#"}
              >
                <div className="flex flex-col">
                  <span className="text-3xl font-bold">{p.title}</span>
                  <div className="flex gap-3 text-lg font-bold dark:text-accent text-accentLight">
                    {p.stack.map((tech, idx) => (
                      <span key={idx}>{tech.name}</span>
                    ))}
                  </div>
                </div>
                <span
                  className="ml-auto flex items-center gap-2 text-base font-medium md:ml-0 md:text-lg lg:text-xl hover:text-blue-500 transition duration-300"
                >
                  View Project
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path>
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hover Reveal */}
        <div
          ref={revealRef}
          className={`absolute top-0 left-0 pointer-events-none opacity-0 visibility-hidden 
             w-64 h-52 bg-cover bg-center rounded-lg ${hovering ? 'shadow-lg' : ''}`}
          style={{
            backgroundImage:
              currentProject !== null
                ? `url(${projects[currentProject].image})`
                : "",
          }}
        >
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
