import logo from "@/assets/screenshots/hero-bg.png";
export function FixedWatermark() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      <img
        src={logo}
        alt=""
        className="w-[600px] h-[600px] object-contain opacity-[0.06]"
        aria-hidden="true"
      />
    </div>
  );
}
