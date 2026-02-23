interface Props {
  active: string;
  setActive: (tab: string) => void;
}

const tabs = ["Join Quest", "Order Food", "Printouts", "Tutors", "Updates"];

export default function Tabs({ active, setActive }: Props) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-neon-green/20">

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10 py-5 px-4">

        {tabs.map((tab) => {
          const isActive = active === tab;

          return (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`
                relative uppercase text-xs md:text-sm tracking-widest font-semibold
                transition-all duration-300
                ${
                  isActive
                    ? "text-neon-green"
                    : "text-foreground/50 hover:text-neon-green"
                }
              `}
            >
              {tab}

              {/* Neon Underline */}
              <span
                className={`
                  absolute left-0 -bottom-2 h-[2px] w-full
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-neon-green shadow-[0_0_12px_#39FF14]"
                      : "bg-transparent"
                  }
                `}
              />

              {/* Glow Pulse for Active */}
              {isActive && (
                <span className="absolute inset-0 rounded-md blur-xl opacity-30 bg-neon-green animate-pulse -z-10" />
              )}
            </button>
          );
        })}

      </div>
    </div>
  );
}