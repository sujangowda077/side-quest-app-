interface Props {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: Props) {
  return (
    <div className="relative group">

      {/* Neon Glow Border */}
      <div className="absolute inset-0 rounded-xl bg-neon-green/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="
        relative
        border border-neon-green
        bg-black/40
        backdrop-blur-md
        rounded-xl
        px-6 py-5
        flex items-center gap-6
        transition-all duration-300
        group-hover:shadow-[0_0_30px_#39FF14]
      ">

        {/* Step Number */}
        <div className="
          w-12 h-12
          flex items-center justify-center
          border-2 border-neon-green
          text-neon-green
          font-bold
          text-lg
          rounded-md
          shadow-[0_0_10px_#39FF14]
        ">
          {number}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">
            {title}
          </h3>
          <p className="text-sm text-white/60">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}