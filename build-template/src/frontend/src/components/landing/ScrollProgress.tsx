import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const calculated =
        documentHeight > 0 ? (scrollY / documentHeight) * 100 : 0;

      setProgress(Math.min(calculated, 100));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-background/20">
      <div
        className="h-full bg-neon-green transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}