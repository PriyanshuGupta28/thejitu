import React from "react";
import { Figma, Mail } from "lucide-react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import SubFooter from "../SubFooter/SubFooter";

const Footer: React.FC = () => {
  return (
    <footer className="w-[100%] h-[186px] bg-gradient-to-b from-[#101010] to-[#000000]">
      <div className="flex items-center justify-between w-[100%] h-[144px] p-[48px]">
        <div className="flex gap-[16px] items-center">
          <div>
            <img src={logo} alt="logo" className="w-[22.86px] h-[48px]" />
          </div>
          <div>
            <p className="text-[16px]">Jitendra Kumar</p>
            <p className="text-white/80 text-[12px]">Product Designer</p>
          </div>
        </div>
        <div className="flex gap-[8px] ">
          <div className="flex justify-center items-center h-[42px] w-[190px] border border-zinc-700 rounded-[100px] p-[12px] px-[16px] gap-[8px]">
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
      <SubFooter />
    </footer>
  );
};

export default Footer;

const FooterIcon = ({ title, link, icon }: FooterLinksProps) => {
  return (
    <div
      className="h-[42px] w-[42px] flex justify-center items-center border border-zinc-700 rounded-[100px]"
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
