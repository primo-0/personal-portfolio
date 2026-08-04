import {Button} from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButtons";
import { ArrowRight, Download, ChevronDown} from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const skills =[
    "HTML", 
    "CSS", 
    "JavaScript",
    "Basic Routing & Switching", 
    "WLAN Configuration",
    "Visual Studio Code", 
    "GitHub", 
    "Cisco Packet Tracer", 
    "WordPress", 
    "Git Bash",
    "Claude code",
    "ChatGPT",
    "Cursor"

]

export const Hero = () => {
    const socials = [
                        { icon: FaGithub, href: "https://github.com/primo-0" },
                    ];
    return <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}
        <div className="absolute inset-0">
            <img 
            src="/hero-bg.jpg"
            alt="Hero image" 
            className= "w-full h-full object-cover opacity-40"/>
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
        </div>
        {/* Green dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, index) => (
                 <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
                backgroundColor:"#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${15 + Math.random() * 20 }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
            }}
            />
            ))}     
        </div>

        {/* Content */}
        <div className= "container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className= "grid lg:grid-cols-2 gap-12 items-center">
                {/* Left column- Text content */}
                <div className=" space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />Web Developer
                        </span>
                    </div>
                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Designing, <span className="text-primary glow-text">Developing </span>
                            <br /> and Continuously 
                            <br /> 
                            <span className="font-serif italic font-nirmal text-white">
                                Learning
                            </span>
                        </h1>
                        <p
                        className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            I am a Bachelor of Science in Information Technology graduate
                            with a specialization in Networking. I am continuously expanding my programming skills through self-study,
                            personal projects, and exploring artificial intelligence for development. 
                            Passionate about technology, I enjoy building practical solutions, learning new technologies, and continuously growing as an IT professional.
                        </p>
                    </div>
                    {/* CTA Button */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="lg">
                            Contact Me <ArrowRight className="w-5 h-5"/>
                        </Button>
                        <AnimatedBorderButton />
                    </div>
                    {/* Social Links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                        <span className="text-sm text-muted-foreground">Follow: </span>
                       {socials.map((social, index) => {
                            const Icon = social.icon;

                            return (
                            <a
                                key={index}
                                href={social.href}
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Icon size={22} />
                            </a>
                            );
                        })}
                    </div>
                </div>
                {/* Right Column - Profile Image */}
                <div className="relative animate-fade-in animation-delay-300">
                    {/* Profile Image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="absolute inset-0
                        rounded-3xl bg-gradient-to-br
                        from-primary/30 via-transparent
                        to-primary/10 blur-2xl animate-pulse-glow" 
                        />
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/profile-photo.jpg" 
                            alt="Justin Augustus Macaraeg"
                            className="w-full aspect-[4/5] object-cover rounded-2xl"
                            />
                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float"> 
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                                    <span className="text-sm font-medium">Available for work</span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            <div className="absolute -top-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                                <div className="text-2xl font-bold text-primary">2</div>
                                <div className="text-xs text-muted-foreground">
                                    Months Exp
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
                <p className="text-sm text-muted-foreground mb-6 text-center">Technologies & Tools</p>
                <div className="relative overflow-hidden">
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                    {skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
            <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-5 animate-bounce" />

            </a>
        </div>
    </section>;
};