const projects =[
    {
        title: "YouTube clone",
        description:"",
        image:"/public/project1.png",
        tags: ["HTML", "CSS"],
        link:"#",
        github:"https://github.com/primo-0/YouTube-Clone",
    },
    {
        title: "Rock, Paper, Scissors",
        description:"",
        image:"/public/project3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link:"#",
        github:"https://github.com/primo-0/rock-paper-scissors",
    },
    {
        title: "ToDo List",
        description:"",
        image:"/public/project2.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link:"#",
        github:"https://github.com/primo-0/todo_list",
    },
]

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden ">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highloght/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10"></div>
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
                <span className="text-secondary-foreground text-sm font-medium trackin-wider uppercase animate-fade-in">Featured Work</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Personal 
                    <span className="font-serif italic font-normal text-white"> Projects</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of projects I've built throughout my web development journey. 
                    Each project represents a step in my learning process, 
                    helping me strengthen my skills in programming, problem-solving, and creating practical web applications.
                </p>
            </div>
            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project,idx) => (
                    <div 
                    key={idx} 
                    className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                    style={{ animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div 
                            className="absolute inset-0
                            bg-gradient-to-t from-card via-card/50
                            to-transparent opacity-60"
                            />
                            </div>
                        </div>
                ))}
            </div>
        </section>
    );
};