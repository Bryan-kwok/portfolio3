import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";

export const SideBarData = [
    {
        title: "Home",
        path: "#landing",
        icon: <AiIcons.AiFillHome/>,
        cName: "navbar__text"
    },
    {
        title: "About",
        path: "#about",
        icon: <FcIcons.FcAbout/>,
        cName: "navbar__text"
    },
    {
        title: "Skillset",
        path: "#skillset",
        icon: <AiIcons.AiFillContacts/>,
        cName: "navbar__text"
    },
    {
        title: "Projects",
        path: "#projects",
        icon: <AiIcons.AiFillContacts/>,
        cName: "navbar__text"
    },
    {
        title: "Contact Me",
        path: "#contact",
        icon: <AiIcons.AiFillContacts/>,
        cName: "navbar__text"
    },
]