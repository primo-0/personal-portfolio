import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const projects =[
    {
        title: "YouTube clone",
        description:"A responsive YouTube homepage clone built with HTML and CSS to replicate the layout and user interface of the original platform. This project focuses on creating a clean, responsive design using modern CSS techniques while improving front-end development skills.",
        image:"/project1.png",
        tags: ["HTML", "CSS"],
        link:"https://primo-0.github.io/YouTube-Clone/",
        github:"https://github.com/primo-0/YouTube-Clone",
    },
    {
        title: "Rock, Paper, Scissors",
        description:"An interactive Rock Paper Scissors game built with HTML, CSS, and JavaScript. Players compete against the computer while scores are tracked using Local Storage. The project demonstrates fundamental JavaScript concepts including DOM manipulation, event handling, conditional logic, and persistent data storage.",
        image:"/project3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link:"https://primo-0.github.io/rock-paper-scissors/",
        github:"https://github.com/primo-0/rock-paper-scissors",
    },
    {
        title: "ToDo List",
        description:" A task management application that allows users to create, organize, and remove daily tasks. The application dynamically updates the interface while storing task information locally, providing a simple and efficient way to manage personal to-do lists.",
        image:"/project2.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link:"https://primo-0.github.io/todo_list/",
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
                            {/* OVERLAYLINKS */}
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-primary-foreground transition-all">
                                    <ArrowUpRight className="w-5 h-5"/>
                                </a>
                                <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-primary-foreground transition-all">
                                    <FaGithub className="w-5 h-5"/>
                                </a>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                            <h3 className="text-xl font-semibold group-hover:text-primary transitions-colors">{project.title}</h3>
                            <ArrowUpRight 
                                className="w-5 h-5
                                text-muted-foreground group-hover:text-primary 
                                group-hover:translate-x-1
                                group-hover:-translate-y-1 transition-all"
                            />
                        </div>
                        <p className="text-muted-foreground text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">{project.tags.map((tag,tagIdx) =>(
                            <span 
                            key={tagIdx}
                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                {tag}
                                </span>
                        ))}</div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};