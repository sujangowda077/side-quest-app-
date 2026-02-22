import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BackgroundWrapper({ children }: Props) {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}