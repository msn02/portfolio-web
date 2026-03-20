import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GDModal({ project, onClose }) {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(i => (i === 0 ? project.images.length - 1 : i - 1));
    const next = () => setCurrent(i => (i === project.images.length - 1 ? 0 : i + 1));

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-3xl mx-4 overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Carousel */}
                <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800">
                    <img
                        src={project.images[current]}
                        alt={project.title}
                        className="w-full h-full object-contain"
                    />
                    <button
                        onClick={prev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        <ChevronRight size={16} />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                        {project.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    i === current ? 'bg-white' : 'bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {project.title}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className="border border-gray-400 px-3 py-1 text-xs rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}