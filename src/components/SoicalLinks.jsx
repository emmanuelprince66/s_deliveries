import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SoicalLinks = () => {
  const links = [
    {
      id: "1",
      child: (
        <>
          LinkedIn <FaLinkedin size={23} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: "2",
      child: (
        <>
          GitHub <FaGithub size={23} />
        </>
      ),
      href: "https://github.com/emmaprince66",
    },
    {
      id: "3",
      child: (
        <>
          Mail <HiOutlineMail size={23} />
        </>
      ),
      href: "mailto:emmanuelochigbo60@gmail.com",
    },
    {
      id: "4",
      child: (
        <>
          Resume <BsFillPersonLinesFill size={23} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden  lg:flex flex-col top-[35%] left-0 fixed   ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "duration-500 flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] " +
              "" +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              className="flex justify-between items-center w-full text-white "
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoicalLinks;
