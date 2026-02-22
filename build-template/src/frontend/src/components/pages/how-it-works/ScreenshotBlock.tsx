interface Props {
  label: string;
  image?: string;
}

export default function ScreenshotBlock({ label, image }: Props) {
  return (
    <div className="border border-neon-green/30 rounded-xl p-4 bg-card/30 backdrop-blur-md hover:shadow-[0_0_20px_#39FF14] transition duration-300">

      {image ? (
        <img
          src={image}
          alt={label}
          className="rounded-lg"
        />
      ) : (
        <div className="h-56 flex items-center justify-center text-neon-green/60">
          {label}
        </div>
      )}

    </div>
  );
}