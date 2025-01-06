import React from "react";
import { Figma, Linkedin } from "lucide-react";
import medium from "../../assets/icons/medium.png";
import be from "../../assets/icons/be.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SubFooter from "../SubFooter/SubFooter";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full bg-light-to-dark justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1028px] gap-8 md:h-[144px]">
        <div className="flex gap-4 items-center">
          <div>
            <img src={logo} alt="logo" className="w-[22.86px] h-[48px]" />
          </div>
          <div>
            <p className="text-[16px]">Jitendra Kumar</p>
            <p className="text-white/80 text-[12px]">Product Designer</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex gap-4 justify-center">
            {footerLinks.map((link) => (
              <FooterIcon
                key={link.title}
                title={link.title}
                icon={link.icon}
                link={link.link}
              />
            ))}
          </div>
        </div>
      </div>
      <SubFooter />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ title, link, icon }: FooterLinksProps) => {
  return (
    <div
      className="h-[42px] w-[42px] flex justify-center items-center border border-[#404040] rounded-full"
      title={title}
    >
      <Link to={link}>{icon}</Link>
    </div>
  );
};

type FooterLinksProps = {
  title: string;
  link: string;
  icon: React.ReactNode;
};

const footerLinks: FooterLinksProps[] = [
  {
    title: "LinkedIn",
    link: "LinkedIn",
    icon: <Linkedin className="w-[18px] h-[18px]" />,
  },
  {
    title: "Behance",
    link: "Connect",
    icon: <img src={be} />,
  },
  {
    title: "Figma",
    link: "Connect",
    icon: <Figma className="w-[18px] h-[18px]" />,
  },
  {
    title: "Medium",
    link: "Connect",
    icon: <img src={medium} />,
  },
];
