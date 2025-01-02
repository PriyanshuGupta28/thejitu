import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { Menu } from "lucide-react";
import figma from "../../assets/icons/figma.png";
import ld from "../../assets/icons/ld.png";
import medium from "../../assets/icons/medium.png";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = document.querySelector(".navbar")?.clientHeight || 0;
      setScrolled(window.scrollY > navHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-center items-center">
      <div
        className={`hidden transition-all duration-300 ease-in-out navbar w-[1028px] h-[72px] text-white md:flex items-center justify-between px-[48px] top-[20px] fixed border rounded-[20px] ${
          scrolled
            ? " bg-black/40 border-zinc-800 backdrop-blur-[20px]"
            : "bg-transparent border-transparent"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex-col hidden md:flex">
          <p className="text-[16px]">Jitendra Kumar</p>
          <p className="text-[11px] text-white/80">Product Designer</p>
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
              {/* {link.title}{" "}
              {navLinks.length - 1 === navLinks.indexOf(link) ? "" : "/"} */}
              <img src={link.icon} alt="alt" />
            </Link>
          ))}
        </div>
        <div className="flex md:hidden">
          <Menu className="w-[24px] h-[24px] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const navLinks = [
  {
    title: "LinkedIn",
    icon: ld,
    link: "https://www.linkedin.com/in/jitkrgupta",
  },
  {
    title: "Figma",
    icon: figma,
    link: "https://www.figma.com/@jitkrgupta",
  },
  {
    title: "Medium",
    icon: medium,
    link: "https://jitkrgupta.medium.com",
  },
];
