import { Button1 } from "@/components/Button1";
import { Button2 } from "@/components/Button2";
import {
  ArrowRight,
  Linkedin,
  Github,
  Download,
  ChevronDown,
  Network,
  Globe,
  Server,
  Code2,
  Database,
  Cpu,
  Shield,
} from "lucide-react";

export const Hero = () => {
  const skills = [
    "Javascript",
    "React",
    "Vite",
    "Node.js",
    "Netlify",
    "Tailwind CSS",
    "Python",
    "Git",
    "GitHub",
    "Cisco",
    "Huawei",
    "GNS3",
    "Linux",
    "pfSsense",
    "Docker",
    "Kaggle",
  ];

  const floatingIcons = [
    { Icon: Network, top: "10%", left: "15%", size: 42 },
    { Icon: Globe, top: "20%", right: "10%", size: 48 },
    { Icon: Server, bottom: "25%", left: "5%", size: 44 },
    { Icon: Code2, bottom: "10%", right: "20%", size: 46 },
    { Icon: Database, top: "45%", left: "45%", size: 52 },
    { Icon: Cpu, top: "65%", right: "35%", size: 40 },
    { Icon: Shield, top: "35%", left: "70%", size: 44 },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/vect.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Network Engineer • Web Developer
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Connect{" "}
                <span className="text-primary glow-text">the world</span>
                <br />
                Weave
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  the web
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Wassim Bakir — a networks engineer and a web developer.
                I build computer networks, and I create scalable web
                applications that benefits people.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact" className="m-0 p-0">
                <Button1 size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button1>
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1ZXrK1exdKqvvPv5ZhxPvoGHinU-Qv0re"
                className="m-0 p-0"
              >
                <Button2>
                  <Download className="w-5 h-5" />
                  Download CV
                </Button2>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                Follow me on :{" "}
              </span>
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/wassim-bakir-617480339/",
                  label: "Linkedin",
                },
                {
                  icon: Github,
                  href: "https://github.com/WasssBak",
                  label: "Github",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative anime-fade-in anime-d-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0
                rounded-3xl bg-linear-to-br
                from-primary/30 via-transparent
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden">
                {floatingIcons.map((item, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      top: item.top,
                      bottom: item.bottom,
                      left: item.left,
                      right: item.right,
                      animationDuration: `${12 + i * 2}s`,
                      animationDelay: `${Math.random() * 4}s`,
                    }}
                  >
                    <item.Icon
                      size={item.size}
                      className={`
                        ${item.rotate}
                        text-primary/80
                        drop-shadow-lg
                        transition-transform
                      `}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Tools and Technologies I worked with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
                       bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
                       bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-mar">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
           animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
