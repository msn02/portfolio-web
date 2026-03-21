import { useState, useRef } from 'react';
import WDModal from '@/Components/WDModal';
import WDCards from '@/Components/WDCards';
import GDModal from '@/Components/GDModal';
import GDCards from '@/Components/GDCards';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const webdevProjects = [
    {
        title: 'E-Receipt System v.2',
        description: 'Payment tracking and management of electronic receipts.',
        fullDescription: 'One of Quarta BU\'s core projects. Assessed the previous system and identified the issues faced by students and finance officers. Improved the user flow and design consistency.',
        images: [
            'images/webdev/quarta_1.png',
            'images/webdev/quarta_2.png',
            'images/webdev/quarta_3.png',
            'images/webdev/quarta_4.png',
            'images/webdev/quarta_6.png',
            'images/webdev/quarta_7.png',
            'images/webdev/quarta_8.png',
            'images/webdev/quarta_5.png',
            'images/webdev/quarta_9.png',
        ],
        tags: ['UI/UX Design', 'Finance', 'Figma'],
    },
    {
        title: 'USC Website',
        description: 'Content Management System for information dissemination.',
        fullDescription: 'The University Council\'s project. Identified the needs of students and officers. Designed web and mobile version and coordinated with client to ensure the system features align with the project goals and expectations.',
        images: [
            'images/webdev/usc_1.png',
            'images/webdev/usc_2.png',
            'images/webdev/usc_3.png',
            'images/webdev/usc_4.png',
            'images/webdev/usc_5.png',
            'images/webdev/usc_6.png',
            'images/webdev/usc_7.png',
            'images/webdev/usc_8.png',
        ],
        tags: ['UI/UX Design', 'Content Management System', 'Figma'],
    },
    {
        title: 'Online Voting System',
        description: 'E-voting platform for university-wide and college-level elections.',
        fullDescription: 'One of the major tasks during internship. Redesigned previous online voting system. Ensured consistency in design elements and visual presentation across platforms.',
        images: [
            'images/webdev/evoting_1.png',
            'images/webdev/evoting_2.png',
            'images/webdev/evoting_4.png',
            'images/webdev/evoting_3.png',
        ],
        tags: ['UI/UX Design', 'E-Voting', 'Figma', 'Internship'],
    },
    {
        title: 'Inventory and Sales Invoice Application',
        description: 'Inventory Management and Invoice Generation for a business.',
        fullDescription: 'An academic project developed in Java with a classmate. Handled asset creation and implemented application features.',
        images: [
            'images/webdev/inv_1.png',
            'images/webdev/inv_2.png',
        ],
        tags: ['User Interface Design', 'Java', 'Photoshop', 'CRUD'],
    },
];

const graphicDesProjects = [
    {
        title: 'Denso Job Fair',
        description: 'Event poster for a virtual Job Fair in partnership with Denso Techno Philippines Inc.',
        images: [
            'images/gd/denso_22.jpg',
        ],
        tags: ['Social Media', 'Poster Design','Event', 'Photoshop', 'Organization',],
    },
    {
        title: 'Sir Kits Merchandise',
        description: 'Social Media materials for promotion of the organization\'s merchandise.',
        images: [
            'images/gd/sirkits_23.jpg',
            'images/gd/sirkits2_23.jpg',
            'images/gd/sirkits3_23.jpg',
            'images/gd/sirkits4_23.jpg',
            'images/gd/sirkits5_23.jpg',
            'images/gd/sirkits6_23.jpg',
        ],
        tags: ['Social Media', 'Merch', 'Photoshop', 'Organization'],
    },
    {
        title: 'CSIT Days',
        description: 'Designed publication materials for CSIT Days for two consecutive years.',
        images: [
            'images/gd/csit_22.jpg',
            'images/gd/csit2_22.jpg',
            'images/gd/csit3_22.jpg',

            'images/gd/csit_23.png',
            'images/gd/csit2_23.png',
            'images/gd/csit3_23.jpg',
        ],
        tags: ['Social Media', 'Poster Design', 'Event', 'Photoshop',],
    },
    {
        title: 'Online Voting',
        description: 'Designed publication materials during internship for user testing and voting announcements.',
        images: [
            'images/gd/ovs3.png',
            'images/gd/ovs2.png',
            'images/gd/ovs1.png',

        ],
        tags: ['Social Media', 'Announcement', 'Canva'],
    },
        {
        title: 'EduRoam',
        description: 'An publication material made during internship for launching announcement of EduRoam.',
        images: [
            'images/gd/eduroam_25.jpg',
        ],
        tags: ['Social Media', 'Announcement', 'Photoshop'],
    },
    {
        title: 'Webinar',
        description: 'A webinar prepared by the class block for an academic requirement. In-charge for the creation of event poster.',
        images: [
            'images/gd/webinar_23.jpg',

        ],
        tags: ['Social Media', 'Poster Design', 'Event', 'Photoshop' ],
    },
    {
        title: 'Merch Design Contest 2023',
        description: 'Social Media materials for 2023 merch design contest.',
        images: [
            'images/gd/contest_23.png',
            'images/gd/contest3_23.jpg',
            'images/gd/contest2_23.jpg',
            'images/gd/contest4_23.png',
        ],
        tags: ['Social Media', 'Merch', 'Photoshop', 'Organization'],
    },
];

export default function ProjectGallery() {
    const [selectedWDProject, setSelectedWDProject] = useState(null);
    const [selectedGDProject, setSelectedGDProject] = useState(null);

    const wdScrollRef = useRef(null);
    const gdScrollRef = useRef(null);

    const scroll = (ref, direction) => {
        ref.current.scrollBy({
            left: direction === 'left' ? -300 : 300,
            behavior: 'smooth',
        });
    };

    return (
        <div className="grid gap-y-4">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>

            {/* Web Dev Section */}
            <div className="grid gap-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">UI/UX Design and Web Development</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll(wdScrollRef, 'left')}
                            className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => scroll(wdScrollRef, 'right')}
                            className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
                <div
                    ref={wdScrollRef}
                    className="flex flex-nowrap h-fit w-full overflow-x-auto scroll-smooth no-scrollbar"
                >
                    {webdevProjects.map((project) => (
                        <WDCards
                            key={project.title}
                            project={project}
                            onClick={setSelectedWDProject}
                        />
                    ))}
                </div>
            </div>

            {/* Graphic Design Section */}
            <div className="grid gap-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Graphic Design</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll(gdScrollRef, 'left')}
                            className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <button
                            onClick={() => scroll(gdScrollRef, 'right')}
                            className="w-8 h-8 rounded-full border border-gray-400 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
                <div
                    ref={gdScrollRef}
                    className="flex flex-nowrap h-fit w-full overflow-x-auto scroll-smooth no-scrollbar"
                >
                    {graphicDesProjects.map((project) => (
                        <GDCards
                            key={project.title}
                            project={project}
                            onClick={setSelectedGDProject}
                        />
                    ))}
                </div>
            </div>

            {/* Modals — now tied to separate state, never both open at once */}
            {selectedWDProject && (
                <WDModal
                    project={selectedWDProject}
                    onClose={() => setSelectedWDProject(null)}
                />
            )}
            {selectedGDProject && (
                <GDModal
                    project={selectedGDProject}
                    onClose={() => setSelectedGDProject(null)}
                />
            )}
        </div>
    );
}