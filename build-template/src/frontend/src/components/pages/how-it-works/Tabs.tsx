interface Props {
  active: string;
  setActive: (tab: string) => void;
}

const tabs = ["Join Quest", "Order Food", "Printouts", "Tutors", "Updates"];

export default function Tabs({ active, setActive }: Props) {
  return (
    <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-neon-green/20 flex justify-center gap-8 py-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`uppercase text-sm tracking-wider transition ${
            active === tab
              ? "text-neon-green border-b-2 border-neon-green"
              : "text-foreground/50 hover:text-neon-green"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}