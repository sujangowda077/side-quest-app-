interface StepCardProps {
  stepNumber: number;
  title: string;
  description?: string;
  className?: string;
}

export function StepCard({ stepNumber, title, description, className = '' }: StepCardProps) {
  return (
    <div className={`flex items-start space-x-4 step-card-hover ${className}`}>
      <div className="step-circle flex-shrink-0">
        {stepNumber}
      </div>
      <div className="flex-1 space-y-1">
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        {description && <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>}
      </div>
    </div>
  );
}
