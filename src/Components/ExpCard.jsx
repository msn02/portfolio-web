export default function ExpCard({ title, company, date, type, current = false }) {
    return (
        <div className={`py-3 px-4 rounded-lg transition-colors
            ${current
                ? 'bg-yellow-100 dark:bg-indigo-900 border-l-4 border-yellow-500 dark:border-indigo-400'
                : ''
            }`}
        >
            <div className="flex justify-between">
                <h1 className="font-bold">{title}</h1>
                <p className="text-xs text-right">{type}</p>
            </div>
            <p>{company}</p>
            <p className="text-xs mt-3">{date}</p>
        </div>
    );
}