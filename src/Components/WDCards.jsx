export default function WDCards({ project, onClick }) {
    return (
        <div
            onClick={() => onClick(project)}
            className="w-[280px] flex-shrink-0 cursor-pointer rounded-lg p-3 hover:bg-gray-100 hover:dark:bg-gray-800 transition-colors"
        >
            <img
                src={project.images[0]}
                alt={project.title}
                className="aspect-video mb-4 rounded-lg object-cover"
            />
            <h3 className="font-semibold mb-1">{project.title}</h3>
            <p className="text-xs mb-2 line-clamp-3">{project.description}</p>
            {/* <div className="flex flex-wrap gap-1">
                {project.tags.map(tag => (
                    <span
                        key={tag}
                        className="border border-gray-400 px-3 py-1 text-xs rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div> */}
        </div>
    );
}