export function NeonGridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Base dark background */}
      <div className="absolute inset-0 bg-black" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-20 animate-grid-move"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,136,0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,136,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(0,255,136,0.15), transparent 70%)"
        }}
      />

    </div>
  );
}