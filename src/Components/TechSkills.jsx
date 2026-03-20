const skillGroups = [
    {
        category: 'Design',
        skills: ['Figma', 'Canva', 'Adobe Photoshop', 'Penpot']
    },
    {
        category: 'Languages and Frameworks',
        skills: ['HTML/CSS', 'Java', 'Javascript', 'C', 'Bootstrap', 'Tailwind CSS', 'React JS', 'Laravel']
    },
    {
        category: 'Dev Tools',
        skills: ['Visual Studio Code', 'GitHub', 'Git', 'Notion', 'Google Workspace', 'Discord', 'ClickUp', 'MS Teams'],
    },
];

export default function TechSkills() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Tech</h1>

            {skillGroups.map((group) => (
                <div key={group.category}>
                    <h3 className="font-semibold mt-4">{group.category}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {group.skills.map((skill) => (
                            <div
                                key={skill}
                                className="border border-gray-500 rounded-full px-3 py-1 text-sm"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}