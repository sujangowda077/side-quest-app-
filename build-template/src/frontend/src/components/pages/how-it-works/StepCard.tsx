interface Props {
  number: number;
  title: string;
  description: string;
}

export default function StepCard({ number, title, description }: Props) {
  return (
    <div className="border border-neon-green/30 bg-card/40 backdrop-blur-md rounded-xl p-6 hover:shadow-[0_0_25px_#39FF14] transition duration-300">

      <div className="w-12 h-12 flex items-center justify-center rounded-full border border-neon-green text-neon-green mb-4 font-bold">
        {number}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>

      <p className="text-foreground/70 text-sm">
        {description}
      </p>
    </div>
  );
}