const experiences = [
    
    {
        period: " January – May 2025 ",
        role: " Junior Website Administrator ",
        company: " MGHS Services ",
        description: " Optimized website content through SEO strategies such as keyword research, meta tag optimization, and internal linking. Managed and updated WordPress content while improving website visibility, search performance, and user engagement.",
        technologies: ["Wordpress",],
        current: false,   
    }, 
]


export const Experience = () => {
    return (
    <section
    id="experience"
    className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96
        h-96 bg-primary/5 rounded-full blur-3xl -translatae-y-1/2"/>
        <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm
                font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold
                mt-4 mb-6 animate-fade-in animation-delay-100
                text-secondary-foreground"
                >
                    Experience that {" "}
                    <span className="font-serif italic font-normal text-white"> 
                        {""}
                        Builds my Journey.
                    </span>
                </h2>
                
            </div>
            {/* Timeline */}
            <div className="relative">
                <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/7- via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
                           {/* Experience */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx}>

                                {/* Timeline Dot */}
                                <div></div>
                                {/* content */}
                                <div>
                                    <div>
                                        <span>{exp.period}</span>
                                        <h3>{exp.role}</h3>
                                        <p>{exp.company}</p>
                                        <p>{exp.description}</p>
                                        <div>{exp.technologies.map((tech, techIdx) => (
                                            <span>{tech}</span>
                                        ))}</div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
            </div>
        </div>
    </section>
    );

    
};