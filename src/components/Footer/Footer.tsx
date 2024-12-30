import React from "react";
import { Figma, Mail } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SubFooter from "../SubFooter/SubFooter";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full bg-gradient-to-b from-[#101010] to-[#000000]">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 p-6 md:h-[144px]">
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
          <div className="flex justify-center items-center h-[42px] w-[190px] border border-zinc-700 rounded-full p-3 px-4 gap-2">
            <div>
              <Mail className="w-[18px] h-[18px]" />
            </div>
            <Link
              to="mailto:jitofficial@icloud.com"
              className="text-[14px] underline"
            >
              jitofficial@icloud.com
            </Link>
          </div>
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
      className="h-[42px] w-[42px] flex justify-center items-center border border-zinc-700 rounded-full"
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
    title: "Connect",
    link: "Connect",
    icon: <Figma className="w-[18px] h-[18px]" />,
  },
  {
    title: "Connect",
    link: "Connect",
    icon: <Figma className="w-[18px] h-[18px]" />,
  },
  {
    title: "Connect",
    link: "Connect",
    icon: <Figma className="w-[18px] h-[18px]" />,
  },
  {
    title: "Connect",
    link: "Connect",
    icon: <Figma className="w-[18px] h-[18px]" />,
  },
];
