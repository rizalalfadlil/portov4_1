import React from "react";
import { FaArrowRight, FaDiscord, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

interface SocialProps {
  platform: string;
  id: string;
  icon: React.ReactNode;
  url: string;
}
const socialLists = [
    {
        platform: "github",
        id: "github.com/rizalalfadlil",
        icon: <FaGithub size={24} />,
        url: "https://github.com/rizalalfadlil",
        color: "#333"
    },
    {
        platform: "instagram",
        id: "@ismeaningsmile",
        icon: <FaInstagram size={24} />,
        url: "https://instagram.com/ismeaningsmile",
        color: "#E1306C"
    },
    {
        platform: "facebook",
        id: "ismeaningsmile",
        icon: <FaFacebook size={24} />,
        url: "https://facebook.com/ismeaningsmile",
        color: "#3b5998"
    },
    {
        platform: "whatsapp",
        id: "62895360728429",
        icon: <FaWhatsapp size={24} />,
        url: "https://wa.me/62895360728429",
        color: "#25D366"
    },
    {
        platform: "discord",
        id: "rizalalfadlil",
        icon: <FaDiscord size={24} />,
        url: "https://discord.com/users/rizalalfadlil",
        color: "#7289DA"
    }
]
const SocialBlock = ({ platform, id, icon, url }: SocialProps) => {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:bg-gray-800 duration-200 transition-all rounded-md p-2"
      >
        <div className="bg-gray-800 rounded-full p-2">{icon}</div>
        <div>
          <p>{platform}</p>
          <p className="text-xs text-muted">{id}</p>
        </div>
        <div className="grow flex justify-end">
            <FaArrowRight size={24} />
        </div>
      </a>
    );
}
export const SocialSection = () => {
  return (
    <section id="social">
      <div className="w-full max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Social</h2>
        <h4 className="text-muted">
          Stay connected with me on social media or reach out for
          collaborations.
        </h4>
      </div>
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4 justify-center h-full mt-[calc(50vh-12rem)]">
        {socialLists.map((social) => (
          <SocialBlock
            key={social.platform}
            platform={social.platform}
            id={social.id}
            icon={social.icon}
            url={social.url}
          />
        ))}
      </div>
    </section>
  );
};
