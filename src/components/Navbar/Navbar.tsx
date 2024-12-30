import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav
      className="w-full h-[72px] bg-zinc-950/40 text-white flex items-center justify-between px-[48px] top-0 fixed  backdrop-blur-[10px] border-b border-zinc-800 rounded-b-[20px]"
      style={{ zIndex: 1000 }}
    >
      <div className="flex-col hidden md:flex">
        <p className="text-[16px]">Jitendra Kumar</p>
        <p className="text-[11px] text-white">Product Designer</p>
      </div>
      <div>
        <img src={logo} alt="logo" className="w-[22.86px] h-[48px]" />
      </div>
      <div className="hidden flex-row gap-[10px] md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            to={link.link}
            target="_blank"
            rel="noreferrer"
            className="text-[12px] underline"
          >
            {link.title}{" "}
            {navLinks.length - 1 === navLinks.indexOf(link) ? "" : "/"}
          </Link>
        ))}
      </div>
      <div className="flex md:hidden">
        <Menu className="w-[24px] h-[24px] cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    title: "Figma",
    link: "https://www.figma.com/@jitkrgupta",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jitkrgupta",
  },
  {
    title: "Medium",
    link: "https://jitkrgupta.medium.com",
  },
];
