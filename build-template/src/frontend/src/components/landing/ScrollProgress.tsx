import { useScrollY } from '@/hooks/useScrollY';

export function ScrollProgress() {
  const scrollY = useScrollY();
  const documentHeight = typeof document !== 'undefined' 
    ? document.documentElement.scrollHeight - document.documentElement.clientHeight 
    : 1;
  const progress = Math.min((scrollY / documentHeight) * 100, 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/20">
      <div
        className="h-full bg-neon-green transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
