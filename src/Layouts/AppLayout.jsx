import { useDarkMode } from '@/hooks/useDarkMode';
import AvatarBg from '@/Components/AvatarBg';

export default function AppLayout({ children }) {
  const { isDark, toggle } = useDarkMode();
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <AvatarBg isDark={isDark} toggle={toggle} />
      <div>
        <main className="pb-6 max-w-5xl mx-auto">{children}</main>
      </div>
    </div>
  );
}