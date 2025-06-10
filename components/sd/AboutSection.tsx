"use client";
import { Modal } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaArrowRight, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { LiaPaintBrushSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { Tooltip } from "antd";

export function AboutSection({ ref }: { ref?: React.Ref<HTMLDivElement> }) {
    const router = useRouter()
    const [certificatesVisible, setCertificatesVisible] = useState(false);
    return (<section ref={ref} className="p-4 min-h-screen flex flex-col items-center py-20 space-y-20 justify-center bg-gray-700" id="About">
        <div className="w-full max-w-5xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-2">About</h2>
            <h4 className="text-muted">Here’s a bit about who I am, what I do, and how you can connect with me.
            </h4>
        </div>
        <div className="w-full p-4 max-w-5xl mx-auto text-center bg-gray-800/50 border-gray-800 rounded-3xl grid sm:flex gap-8">
            <Tooltip title="github avatar" placement="bottom">
            <Image
                className="rounded-xl sm:h-full object-cover w-full aspect-video sm:aspect-auto sm:w-1/3"
                src="https://github.com/rizalalfadlil.png"
                alt="github profile"
                width={200}
                height={300}
            />
                </Tooltip>
            <div className="text-start text-white grid content-center sm:w-2/3">
                <p className="text-xl mb-2 font-bold">Hafidz Rizal Al-Fadlil</p>
                <p className="text-sm text-muted">Hi, I’m Hafidz Rizal Al-Fadill. I love turning complex ideas into simple, intuitive digital experiences. I’m always eager to learn, explore new technologies, and work on meaningful projects that create impact.</p>
            </div>
            <div className="text-white sm:w-1/3 h-full flex flex-col gap-2">
                <p className="text-start">actions</p>
                <ExternalLinkButton
                    icon={<TbCertificate size={24} />}
                    label="Certificates"
                    action={() => setCertificatesVisible(!certificatesVisible)}
                />
                <ExternalLinkButton
                    icon={<CiMail size={24} />}
                    label="Download CV"
                    action={() => {
                        const link = document.createElement("a");
                        link.href = "/files/cv.pdf";
                        link.download = "cv.pdf";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }}
                />
                <ExternalLinkButton
                    icon={<LiaPaintBrushSolid size={24} />}
                    label="Visit Designer portfolio"
                    action={() => router.push("/designer")}
                />
            </div>
            <Modal
                title="Certificates"
                open={certificatesVisible}
                onCancel={() => setCertificatesVisible(false)}
                footer={null}
                centered
                width={800}
            >
                <CertificatesBlock />
            </Modal>

        </div>
        <div className="flex gap-4 max-w-5xl mx-auto flex-wrap justify-center *:grow sm:*:grow-0">
            <Social
                icon={<FaGithub size={24} />}
                name="Hafidz Rizal Al-Fadlil"
                id="github.com/rizalalfadlil"
                color="#333"
                url="https://github.com/rizalalfadlil"
            />
            <Social
                icon={<FaFacebook size={24} />}
                name="Hafidz Rizal Al-Fadlil"
                id="facebook.com/ismeaningsmile"
                color="#3b5998"
                url="https://www.facebook.com/ismeaningsmile"
            />
            <Social
                icon={<FaInstagram size={24} />}
                name="Hafidz Rizal Al-Fadlil"
                id="@ismeaningsmile"
                color="#E1306C"
                url="https://www.instagram.com/@ismeaningsmile"
            />
            <Social
                icon={<MdEmail size={24} />}
                name="Hafidz Rizal Al-Fadlil"
                id="rizalalfadlil@gmail.com"
                color="#D44638"
                url="mailto:rizalalfadlil@gmail.com"
            />
            <Social
                icon={<RiWhatsappLine size={24} />}
                name="Hafidz Rizal Al-Fadlil"
                id="+62 895-3607-28429"
                color="#25D366"
                url="https://wa.me/62895360728429"
            />
        </div>
    </section>);
}

function ExternalLinkButton({ icon, label, action }: { icon: React.ReactNode, label: string, action?: () => void }) {
    return (<div onClick={action} className="flex items-center gap-4 text-start bg-gray-800 p-4 rounded-xl select-none cursor-pointer hover:bg-gray-900 transition-colors">
        {icon}
        <p className="grow text-sm">{label}</p>
        <FaArrowRight size={24} />
    </div>);
}

function findContrastColor(color: string): string {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
}
function Social({ icon, name, id, url, color }: { icon: React.ReactNode, name: string, id: string, url: string, color: string }) {
    return (<div className="rounded-xl p-3 flex font-medium hover:outline items-center gap-2 select-none cursor-pointer transition-all " onClick={() => { window.open(url || "#", "_blank") }}
        id={id}
        style={{ backgroundColor: color, color: findContrastColor(color) }}>
        {icon}
        <div className="flex flex-col text-sm">
            <span>{name}</span>
            <span className="text-xs opacity-50 font-thin">{id}</span>
        </div>
    </div>);
}

function CertificatesBlock() {
    const certificates = [
        {
            title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Belajar Dasar Visualisasi Data",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Belajar Dasar Pemrograman JavaScript",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Belajar Dasar Cloud dan Gen AI di AWS",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Belajar Dasar Structured Query Language (SQL)",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Belajar Dasar Git dengan GitHub",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Pengenalan Data pada Pemrograman (Data 101)",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },
        {
            title: "Meniti Karier sebagai Software Developer",
            issuedBy: "Dicoding Academy",
            url: "https://www.dicoding.com/users/rizalalfadlil/academies"
        },

    ];
    return (
        <div className=" max-h-80 overflow-y-scroll">
            {certificates.map((cert, index) => (
                <div key={index} className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
                    <p className="">{cert.title}</p>
                    <p className="text-xs text-muted">{cert.issuedBy}</p>
                </div>))}
        </div>
    );
}
