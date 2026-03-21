export default function Button({
    children,
    color = 'primary',
    state = 'default',
    icon = null,
    href = null,
    onClick = null,
    download = false,
}) {
    const base = 'px-3 py-1 rounded-full flex flex-nowrap gap-2 items-center cursor-pointer transition-colors';
    const styles = {
        primary: {
            default:  'bg-yellow-500 dark:bg-indigo-600 hover:bg-yellow-600 dark:hover:bg-indigo-700 text-white',
            outlined: 'border border-yellow-500 dark:border-indigo-500 text-yellow-500 dark:text-indigo-600 hover:bg-yellow-600 hover:border-yellow-600 dark:hover:bg-indigo-700 dark:hover:border-indigo-700 hover:text-white dark:hover:text-white',
            disabled: 'bg-gray-300 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed',
        },
        secondary: {
            default:  'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100',
            outlined: 'border border-gray-400 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
            disabled: 'bg-gray-300 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed',
        },
    };
    const classes = `${base} ${styles[color][state]}`;
    const content = (
        <>
            {children}
            {icon && <span className="flex items-center">{icon}</span>}
        </>
    );
    if (state === 'disabled') {
        return <div className={classes} aria-disabled="true">{content}</div>;
    }
    if (href) {
        const handleDownload = async () => {
            if (download) {
                const response = await fetch(href);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = typeof download === 'string' ? download + '.pdf' : 'download.pdf';
                a.click();
                window.URL.revokeObjectURL(url);
                return;
            }
            window.location.href = href;
        };

        return (
            <a
                href={href}
                className={classes}
                onClick={download ? (e) => { e.preventDefault(); handleDownload(); } : undefined}
                download={download || undefined}
            >
                {content}
            </a>
        );
    }
    return (
        <button onClick={onClick} className={classes}>
            {content}
        </button>
    );
}