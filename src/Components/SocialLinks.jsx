import { FaGithub, FaLinkedin} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const links = [
    {
        name: 'GitHub',
        icon: <FaGithub size={20} />,
        href: 'https://github.com/msn02',
    },
    {
        name: 'LinkedIn',
        icon: <FaLinkedin size={20} />,
        href: 'https://www.linkedin.com/in/msniones02/',
    },
    {
        name: 'Email',
        icon: <MdEmail size={20} />,
        href: 'mailto:mshainen02@gmail.com',
    },
];

export default function SocialLinks() {
    return (
        <div className="flex flex-row gap-2 justify-center lg:justify-end">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.name}
                    className="px-4 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full flex flex-nowrap items-center transition-colors"
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
}