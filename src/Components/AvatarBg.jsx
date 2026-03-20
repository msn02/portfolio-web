import ThemeToggle from '@/Components/ThemeToggle';

export default function AvatarBg({ isDark, toggle }) {
  return (
    <div className="w-full h-36 mb-8
        bg-gradient-to-tl from-orange-500 via-yellow-200 to-indigo-600
        dark:from-indigo-950 dark:via-indigo-700 dark:to-gray-900">
      <div className="relative z-10 flex justify-end p-4">
        <ThemeToggle isDark={isDark} toggle={toggle} />
      </div>
    </div>
  );
}