interface HowItWorksPreviewCardProps {
  icon: string;
  title: string;
  description: string;
}

export function HowItWorksPreviewCard({ icon, title, description }: HowItWorksPreviewCardProps) {
  return (
    <div className="preview-card group animate-fade-up">
      <div className="flex flex-col items-center text-center space-y-4 p-6">
        <div className="w-20 h-20 flex items-center justify-center">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl font-bold text-neon-green">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
