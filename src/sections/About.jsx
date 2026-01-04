import {
  Code,
  BrainCircuit,
  UsersRound,
  ChartColumnIncreasing,
} from "lucide-react";
const highlights = [
  {
    icon: Code,
    title: "Clean Architecture & Code",
    description:
      "Designing robust and maintainable solutions by combining solid web development practices with reliable network architectures",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Performance & Reliability",
    description:
      "Optimizing application and network performance to deliver fast, stable, and highly available systems",
  },
  {
    icon: UsersRound,
    title: "Technical Collaboration",
    description:
      "Working closely with development, infrastructure, and security teams to build and deploy efficient solutions",
  },
  {
    icon: BrainCircuit,
    title: "Innovation & Technology Watch",
    description:
      "Adopting modern web and networking technologies with a strong focus on security, automation, and best practices",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold animate-fade-in leading-tight animation-delay-100 text-secondary-foreground">
              Leading the future <br />
              <span className="font-serif italic font-normal text-white">
                {" "}
                step-by-step
              </span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              <p>
                I am a developer and a networks engineer driven by the
                intersection of <strong>high-performance software</strong> and
                <strong> scalable network infrastructure</strong>. My journey
                started with a deep curiosity for how digital ecosystems work,
                then how packets move, how servers scale, and how code interacts
                with the very iron it runs on.
              </p>
              <p>
                With a background that spans modern web technologies and complex
                systems networking, I specialize in bridging the gap between
                front-end delivery and back-end efficiency. I thrive on solving
                technical puzzles—whether that's optimizing an application's
                core performance or streamlining deployment pipelines through
                automation.
              </p>
              <p>
                Beyond the technical stack, I am a firm believer in the power of{" "}
                <strong>collaboration</strong>. And when I'm not working, you'll
                see me exploring new technologies, or sharing my knowledge with
                others, always driven by my own passion.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-500">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to bridge the gap between code and connectivity,
                creating resilient, automated systems that remain fast and
                secure under any circumstance."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
