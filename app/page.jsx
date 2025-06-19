"use client";

import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

//components
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"

const Home = () => {
  const handleResumeDownload = () => {
    window.open("/myResume/myResume.pdf", "_blank");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack Developer</span>
            <h1 className="h2 mb-2 xl:h1 xl:mb-6">Hello I'm <br/> <span className="dark:text-accent text-accentLight">Gaurav Bhakuni</span></h1>
            <p className="max-w-[500px] mb-9 fade-in opacity-80">I am a passionate fullstack web developer and I am proficient in various programming languages and technologies.</p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={handleResumeDownload}>
                <span>Download Resume</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-4 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border dark:border-accent border-accentLight rounded-full flex justify-center items-center dark:text-accent text-accentLight text-base dark:hover:hover:bg-accent hover:bg-accentLight dark:hover:text-primary hover:text-primaryLight hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
