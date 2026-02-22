interface ScreenshotPlaceholderProps {
  label: string;
}

export default function ScreenshotPlaceholder({ label }: ScreenshotPlaceholderProps) {
  return (
    <div className="border border-[#39FF14]/30 rounded-xl h-64 flex items-center justify-center text-center text-[#39FF14]/60 hover:shadow-[0_0_20px_#39FF14] transition duration-300">
      {label}
    </div>
  );
}