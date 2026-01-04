import { ArrowUpRight, Github } from "lucide-react";
import { Button2 } from "@/components/Button2";

const projects = [
  {
    title: "Showcase website for Scena Club (University of Bejaia)",
    description:
      "A modern and responsive website designed to present the activities and projects of the scientific club. It highlights the club's focus on electronics, networking, and automation, and serves as a central platform for communication, events, and project showcases.",
    image: "/showcase.png",
    tags: ["React", "Tailindcss", "Netlify"],
    link: "https://scenaclub.netlify.app/",
    github: "https://github.com/Scena-Club/Scena-Club-Web-Site",
  },
  {
    title: "Taedraw - Tournament draw generator",
    description:
      "A web-based tool that automatically generates fair and randomized tournament brackets. It simplifies the organization of competitions by handling team placement, match scheduling, and bracket creation with ease.",
    image: "/taedraw.png",
    tags: ["React", "Tailindcss", "Netlify"],
    link: "https://taedraw.netlify.app/",
    github: "https://github.com/WasssBak/Taedraw",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="conainer mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-300">
            A glint of my recent work in web development, from modern web
            applications to well-designed tools that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold group-hover:text-primary">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surfaces text-xs font-medium border-border/50
                      text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            className="m-0 p-0"
            href="https://github.com/WasssBak?tab=repositories"
          >
            <Button2 className="w-5 h-5">View all projects</Button2>
          </a>
        </div>
      </div>
    </section>
  );
};
