import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects: FC = () => {
  return <section id="projects" className="py-24 md:py-32 lg:py-40">
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-8xl">Selected works</h2>
      <div className="mt-10 md:mt-16 lg:mt-20">
        {projects.map(project => (
          <a href="#" key={project.name}
            className="border-t last:border-b border-stone-400 border-dotted flex flex-col relative group/project">
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover/project:h-full transition-all duration-500 bg-stone-300"></div>
            <div className="py-6 md:py-8 relative">
              <div className="aspect-video md:hidden">
                <Image className="size-full object-cover"
                  src={project.image} alt={project.name} />
              </div>
              <div className="mt-8 md:mt-0 flex justify-between items-center md:grid md:[grid-template-columns:1fr_300px_max-content] md:gap-8">
                <div className="lg:group-hover/project:pl-4 transition-all duration-500">
                  <h3 className="text-2xl md:text-3xl">
                    {project.name}
                  </h3>
                </div>
                <div className="relative">
                  <div className="absolute aspect-video w-full top-1/2 -translate-y-1/2 show opacity-0 scale-90 group-hover/project:opacity-100 group-hover/project:scale-100 z-10 transition-all duration-500">
                    <Image className="size-full object-cover"
                      src={project.image} alt={project.name}
                    />
                  </div>
                </div>
                <div className="size-6 overflow-hidden">
                  <div className="h-6 w-12 flex group-hover/project:-translate-x-1/2 transition-all duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor"
                      className="size-6">
                      <path strokeLinecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor"
                      className="size-6">
                      <path strokeLinecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
