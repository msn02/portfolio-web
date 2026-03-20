import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ArrowUpRight } from 'lucide-react';

const contacts = [
    {
        name: 'msn02',
        label: 'GitHub',
        icon: <FaGithub size={20} />,
        href: 'https://github.com/msn02',
        compWidth: '150px',
    },
    {
        name: 'msniones02',
        label: 'LinkedIn',
        icon: <FaLinkedin size={20} />,
        href: 'https://www.linkedin.com/in/msniones02/',
        compWidth: '180px',
    },
    {
        name: 'mshainen02@gmail.com',
        label: 'Email',
        icon: <MdEmail size={20} />,
        href: 'mailto:mshainen02@gmail.com',
        compWidth: '280px',
    },
];

export default function ContactMe() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Connect with Me
            </h1>
            <p className="text-sm mt-1 mb-4">
                Interested in working together or simply want to chat about design and development? I'd be happy to hear from you!
            </p>

            <div className="flex flex-wrap gap-3 lg:justify-center">
                {contacts.map((contact) => (
                    <div
                        key={contact.label}
                        style={{ width: contact.compWidth }}
                        className="rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-3 py-1.5"
                    >
                        <a
                            href={contact.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                {contact.icon}
                                <div className="text-left">
                                    <h3 className="text-sm font-bold">{contact.name}</h3>
                                    <p className="text-xs">{contact.label}</p>
                                </div>
                            </div>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}