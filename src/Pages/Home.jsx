import AppLayout from '@/Layouts/AppLayout';
import AboutMe from '@/Components/AboutMe';
import Experience from '@/Components/Experience';
import Avatar from '@/Components/Avatar';
import TechSkills from '@/Components/TechSkills';
import ProjectGallery from '@/Components/ProjectGallery';
import Button from '@/Components/Button';
import SocialLinks from '@/Components/SocialLinks';
import ContactMe from '@/Components/ContactMe';


import { MapPin, ArrowDownToLine } from 'lucide-react';

export default function Home() {
    return (
        <AppLayout>
        <div className="px-4 grid grid-cols-1 gap-y-5">
            <div className="mb-12 md:px-4">
                <Avatar />                
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-x-4 gap-y-6 items-start justify-between md:px-4">
                <div className="col-span-2 text-center lg:text-left">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-sans">Misty Shaine Niones</h1>
                        <p className="text-xl text-gray-700 dark:text-gray-300">UI/UX Designer / Frontend Developer</p>
                        <p className="text-gray-700 dark:text-gray-300 flex items-center gap-2 justify-center lg:justify-start"><MapPin size={16}/>Albay, Philippines</p>
                    </div>
                    <div className="flex mt-4 gap-2 justify-center lg:justify-start">
                        <Button
                            state="default"
                            color="primary"
                            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        >
                            View my Work
                        </Button>
                        <Button
                            color="secondary"
                            state="outlined"
                            icon={<ArrowDownToLine size={16} />}
                            // href="/portfolio-web/files/NionesCV_2026.pdf"
                            href={`${import.meta.env.BASE_URL}files/NionesCV_2026.pdf`}
                            download="MSNiones_CV"
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
                <div className="col-span-1 grid gap-2">
                <SocialLinks />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-6 md:px-3">
                <div className="col-span-2 grid gap-4 mt-4">
                    <AboutMe />
                    <div className="block md:hidden">
                        <Experience />
                    </div>
                    <div>
                        <TechSkills />
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="hidden md:block">
                        <Experience />
                    </div>
                </div>
                <div className="col-span-3" id='projects'>
                    <ProjectGallery />
                </div>
            </div>
            <div className="md:px-4 lg:text-center lg:mt-10 ">
                <ContactMe />
            </div>
            <div className="text-center mt-6 mb-2 text-gray-900 dark:text-gray-100">
                <p className="text-xs">Copyright © 2026 · <span className="font-bold">Misty Shaine Niones</span>. All Rights Reserved.</p>
            </div>
        </div>
        </AppLayout>
    );
}