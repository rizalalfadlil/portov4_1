import type React from "react";
import { CTAButton } from "./CTAButton";

export function CTASection({ ref, refs }: { ref?: React.Ref<HTMLDivElement>; refs?: { about?: React.Ref<HTMLDivElement> } }) {

    const scrollToSection = (section: React.Ref<HTMLDivElement> | undefined) => {
        if (section && "current" in section && section.current) {
            section.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (<section ref={ref} className="p-4 flex flex-col items-center py-20 space-y-10 justify-center" id="Cta">
        <div className="w-full max-w-5xl mx-auto text-center prose">
            <h2 className="text-2xl font-bold text-primary">Let’s Build Something Together</h2>
            <h4 className="text-secondary">Whether you need a new website, want to collaborate, or just have a question — feel free to reach out. I’m happy to help and usually reply within a day.</h4>
        </div>
        <div className="flex items-center gap-4">
            <CTAButton />
            <button className="btn btn-secondary rounded-full! btn-lg" onClick={() => scrollToSection(refs?.about)}>
                Let&apos;s Talk
            </button>
        </div>
    </section>);
}


