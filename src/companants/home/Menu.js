import { faHome,faBriefcase,faCircleInfo, faAddressBook, faCode, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

export const Menu = [
    {
        title: "Home",
        url: "/",
        cname: "nav-links",
        icon: faHome 
    },
    {
        title: "About",
        url: "/about",
        cname: "nav-links",
        icon: faCircleInfo 
    },
    {
        title: "Contact",
        url: "/contact",
        cname: "nav-links",
        icon: faAddressBook 
    },
    {
        title: "Skills",
        url: "/skills",
        cname: "nav-links",
        icon: faCode 
    },
    {
        title: "Project",
        url: "/project",
        cname: "nav-links",
        icon: faProjectDiagram 
    },
    {
        title: "Experience",
        url: "/experience",
        cname: "nav-links",
        icon: faBriefcase 
    },
];
