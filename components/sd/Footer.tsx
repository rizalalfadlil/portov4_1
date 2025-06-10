"use client";
import { Popover } from "antd";
import React from "react";

export function Footer({ }) {
    const oldVersions = [
        { version: "v3", url: "https://www.ism-smile.web.id/" },
        { version: "v2", url: "https://rizalalfadlil.vercel.app/" }
    ]
    return (<footer className="bg-gray-900 text-muted">
        <div className="w-full max-w-5xl mx-auto p-4 grdi sm:flex items-center justify-between gap-8">
            <p>&copy; {new Date().getFullYear()} RizalAlfadlil</p>
            <Popover title="history" content={
                <div className="flex flex-col gap-2">
                    {oldVersions.map((version) => (
                        <a key={version.version} href={version.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                            Portfolio {version.version}
                        </a>
                    ))}
                </div>

            }>
                <div className="w-fit mt-8 sm:mt-0">Portfolio v4. <br /> <span className="font-thin select-none text-xs">see old versions</span></div>
            </Popover>
        </div>
    </footer>);
}
