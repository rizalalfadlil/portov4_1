import type React from "react";
import { BsArrowDown } from "react-icons/bs";

import { League_Spartan } from "next/font/google";
import { CTAButton } from "./CTAButton";
import { getRandomProjectThumbnails } from "./data";

const leagueSpartan = League_Spartan({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-league-spartan',
});

export function HeroSection({ ref, refs }: { ref?: React.Ref<HTMLDivElement>; refs?: { about?: React.Ref<HTMLDivElement> } }) {
    const scrollToabout = () => {
        if (refs?.about && "current" in refs.about && refs.about.current) {
            refs.about.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const randomThumbnails = getRandomProjectThumbnails();
    return (<section ref={ref} id="Hero" className="relative min-h-dvh p-4 flex flex-col items-center  justify-center overflow-hidden" style={{ backgroundColor: "#fff3ea" }}>
        <div className="grow" />
        <div className="grow py-20 grid place-content-center max-w-5xl mx-auto text-center space-y-4">
            <div><span className="badge badge-accent w-fit">Hi i&apos;m <strong>RizalAlfadlil</strong></span></div>
            <h1 className={`text-gray-600 font-bold text-2xl sm:text-4xl capitalize *:mx-2 ${leagueSpartan.className}`}>
                A Fullstack <span className="text-accent">Software Developer</span> with a passion for <span className={`text-accent`} >cloud-based </span>solutions and <span className="text-accent">user-centered </span>design
            </h1>
            <h3 className="text-secondary font-medium transition-all duration-300 text-xs sm:text-base">Curious about my design work? Feel free to explore my <a href="/designer" className="hover:border-b-2 text-accent">design portfolio</a>.</h3>
            <div className="grid sm:flex gap-4 mt-4 sm:justify-center">
                <CTAButton />
                <button className="btn btn-secondary sm:btn-lg" onClick={scrollToabout}>Let&apos;s Talk</button>
            </div>

        </div>
        <div className="flex flex-col items-center text-muted py-4">
            <p>scroll down to explore</p>
            <BsArrowDown className=" animate-bounce mt-2" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full relative">
            <div className="bg-muted bg-cover bg-center w-full max-w-72 aspect-video translate-y-10 md:hover:-translate-y-10 smooth rounded-md z-0" style={{ backgroundImage: `url(${randomThumbnails[0]})` }} />
            <div className="bg-muted hidden sm:block bg-cover bg-center w-full max-w-72 aspect-video translate-y-10 md:hover:-translate-y-10 smooth rounded-md z-0" style={{ backgroundImage: `url(${randomThumbnails[1]})` }} />
            <div className="bg-muted hidden sm:block bg-cover bg-center w-full max-w-72 aspect-video translate-y-10 md:hover:-translate-y-10 smooth rounded-md z-0" style={{ backgroundImage: `url(${randomThumbnails[2]})` }} />
        </div>
    </section>);
}


