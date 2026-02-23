import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import signup from "@/assets/screenshots/signup.jpeg";
import profile from "@/assets/screenshots/profile.jpeg";
import menu from "@/assets/screenshots/menu.jpeg";
import print from "@/assets/screenshots/print-shop.jpeg";
import tutor from "@/assets/screenshots/tutors.jpeg";
import profile2 from "@/assets/screenshots/profile.png";
import home from "@/assets/screenshots/home.jpeg";
import quest from "@/assets/screenshots/runner.jpeg";
const screenshots = [
  signup,
  profile,
  profile2,
  tutor,
  print,
  menu,
  quest,
  home

  
];

export function AppShowcase() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section className="relative py-32 text-center">

      <h2 className="text-5xl font-bold text-neon-green neon-text-glow mb-20">
        Real App Experience
      </h2>

      <div className="relative flex items-center justify-center">

        {/* Phone Frame */}
        <div className="relative w-72 h-[600px] bg-black rounded-[40px] border border-neon-green shadow-[0_0_40px_#39FF14] overflow-hidden">

          <img
            src={screenshots[index]}
            alt="App Screen"
            className="w-full h-full object-cover"
          />

          {/* Neon Reflection */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neon-green/20 to-transparent pointer-events-none" />

        </div>

      </div>

      {/* Controls */}
      <div className="flex justify-center gap-8 mt-10">
        <button
          onClick={prev}
          className="px-6 py-2 border border-neon-green text-neon-green rounded-lg hover:shadow-[0_0_20px_#39FF14]"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-6 py-2 border border-neon-green text-neon-green rounded-lg hover:shadow-[0_0_20px_#39FF14]"
        >
          Next
        </button>
      </div>

    </section>
  );
}