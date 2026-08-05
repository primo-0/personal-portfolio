import {Code2, Lightbulb, Rocket, Users} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description: "I write clean and maintainable code that follows best practices and design patterns."
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description: "I enjoy solving complex problems and finding innovative solutions to challenges."
    },
    {
        icon: Rocket,
        title: "Fast Learner",
        description: "I am a fast learner and can quickly adapt to new technologies and frameworks."
    },
    {
        icon: Users,
        title: "Team Player",
        description: "I work well in a team environment and collaborate effectively with others."
    }   
]

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden ">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                    </div>
                        <h2 className="text-4xl md:text-5xl font-bold animate-fade-in animation-delay-100 text-secondary-foreground">
                            A developer driven by curiosity, 
                            <span className="font-serif italic font-normal text-white"> creativity, and continuous learning.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm an aspiring Web Developer and IT professional who enjoys turning ideas into practical digital solutions. 
                                After earning my degree in Information Technology with a specialization in Networking, 
                                I began focusing on software development, building personal projects to strengthen my programming skills.
                            </p>
                            <p>
                                I enjoy learning new technologies, experimenting with modern frameworks, and exploring artificial intelligence to create more intelligent applications. 
                                Whether it's designing responsive websites or developing full-stack projects, I'm passionate about improving my skills and creating meaningful work.
                            </p> 
                        </div>
                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                My mission is to embrace lifelong learning, continuously improve my technical skills, 
                                and develop innovative applications that make technology more accessible, efficient, and impactful. 
                                Every project is an opportunity to grow as a developer and create value for others.
                            </p>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{ animationDelay: `${(idx +1) * 100}ms `}}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary "/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};