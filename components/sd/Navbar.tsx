"use client";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { CTAButton } from "./CTAButton";

export function Navbar({
    refs,
}: {
    refs?: {
        hero?: React.Ref<HTMLDivElement>;
        projects?: React.Ref<HTMLDivElement>;
        about?: React.Ref<HTMLDivElement>;
        cta?: React.Ref<HTMLDivElement>;
    };
}) {
    const scrollToSection = (ref: React.Ref<HTMLDivElement> | undefined) => {
        if (ref && "current" in ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <><div className="hidden sm:block fixed w-full top-0 p-4 z-50 ">
            <nav className="  w-full p-4 mt-4 px-6 rounded-full backdrop-blur-sm bg-white shadow-sm max-w-5xl mx-auto">
                <div className="flex justify-center items-center max-w-5xl mx-auto">
                    <div className="text-primary text-2xl font-bold select-none" onClick={() => scrollToSection((refs?.hero))}>✨</div>
                    <div className="grow flex justify-center items-center">
                        <DesktopMenu scrollToSection={scrollToSection} refs={refs} />
                    </div>
                    <CTAButton small />
                </div>
            </nav>
        </div><MobileNav /></>
    );
    function MobileNav() {
        const [isOpen, setIsOpen] = useState(false);
        return (<>
            <div className="fixed top-0 z-50 right-0  p-4 sm:hidden">
                <button className="p-2 rounded-full shadow-sm bg-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoClose size={24} /> : <BiMenu size={24} />}
                </button>
            </div>
            {isOpen && <Menu scrollToSection={scrollToSection} refs={refs} setIsOpen={setIsOpen} />}</>
        );
    }
}

function Menu({ scrollToSection, refs, setIsOpen }: {
    scrollToSection: (ref: React.Ref<HTMLDivElement> | undefined) => void;
    refs?: {
        hero?: React.Ref<HTMLDivElement>;
        projects?: React.Ref<HTMLDivElement>;
        about?: React.Ref<HTMLDivElement>;
        cta?: React.Ref<HTMLDivElement>;
    };
    setIsOpen: (isOpen: boolean) => void;
}) {
    const [isRendered, setIsRendered] = useState(false);
    useEffect(() => {
        setIsRendered(true);
    }, []);
    const handleClickSection = (section: React.Ref<HTMLDivElement> | undefined) => {
        setIsOpen(false);
        scrollToSection(section);
    }
    return (<nav className={`fixed top-0 left-0 w-full h-full bg-background p-4 z-40 transition-all duration-300 ${isRendered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-4 *:w-full">
            <button className={`btn btn-link`} onClick={() => handleClickSection((refs?.hero))}>
                Home
            </button>
            <button className={`btn btn-link`} onClick={() => handleClickSection((refs?.projects))}>
                Projects
            </button>
            <button className={`btn btn-link`} onClick={() => handleClickSection((refs?.about))}>
                About
            </button>
        </div>
    </nav>);
}

type SectionKey = "hero" | "projects" | "about" | "cta";

function DesktopMenu({ scrollToSection, refs }: {
    scrollToSection: (ref: React.Ref<HTMLDivElement> | undefined) => void;
    refs?: {
        hero?: React.Ref<HTMLDivElement>;
        projects?: React.Ref<HTMLDivElement>;
        about?: React.Ref<HTMLDivElement>;
        cta?: React.Ref<HTMLDivElement>;
    };
}) {
    const [currentSection, setCurrentSection] = useState<string>("Home");
    useEffect(() => {
        const handleScroll = () => {
            const sections: SectionKey[] = ["hero", "projects", "about", "cta"];
            let current = "Home";
            for (const section of sections) {
                const ref = refs?.[section];
                if (ref && "current" in ref && ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = section.charAt(0).toUpperCase() + section.slice(1);
                        break;
                    }
                }
            }
            setCurrentSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [refs]);
    return (<ul className="flex gap-4">
        <li>
            <button className={`btn btn-link transition-all duration-300 ${currentSection !== "Projects" ? "font-thin!" : ""}`} onClick={() => scrollToSection((refs?.projects))}>
                Projects
            </button>
        </li>
        <li>
            <button className={`btn btn-link transition-all duration-300 ${currentSection !== "About" ? "font-thin!" : ""}`} onClick={() => scrollToSection((refs?.about))}>
                About
            </button>
        </li>
    </ul>);
}
