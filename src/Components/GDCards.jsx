export default function GDCards({ project, onClick }) {
    return (
        <div
            onClick={() => onClick(project)}
            className="w-[280px] flex-shrink-0 cursor-pointer rounded-lg p-3 hover:bg-gray-100 hover:dark:bg-gray-800 transition-colors"
        >
            <div className="h-[280px] w-full overflow-hidden rounded-lg mb-4">
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <h3 className="font-semibold mb-1">{project.title}</h3>
        </div>
    );
}