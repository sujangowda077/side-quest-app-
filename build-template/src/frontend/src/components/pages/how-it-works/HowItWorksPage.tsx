import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "@/components/layout/BackgroundWrapper";
import { ArrowLeft } from "lucide-react";
import signup from "@/assets/screenshots/signup.jpeg";
import verify from "@/assets/screenshots/verify.png";
import upi from "@/assets/screenshots/upi.jpeg";
import menu from "@/assets/screenshots/menu.jpeg";
import qr from "@/assets/screenshots/qr.jpeg";
import order from "@/assets/screenshots/order.jpeg";
import upload from "@/assets/screenshots/upload.png";
import settings from "@/assets/screenshots/settings.png";
import tutor from "@/assets/screenshots/tutors.jpeg";
import update from "@/assets/screenshots/update.jpeg";
import print from "@/assets/screenshots/print-shop.jpeg";
import verification from "@/assets/screenshots/verification.jpeg";
import setting from "@/assets/screenshots/print-setting.jpeg";
type Tab =
  | "Join Quest"
  | "Order Food"
  | "Printouts"
  | "Tutors"
  | "Updates";

interface Step {
  number: number;
  title: string;
  description: string;
  screenshot?: string;
}

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const stepsRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<Tab>("Join Quest");

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);

    // Auto scroll to steps
    setTimeout(() => {
      stepsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Auto center active tab
  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeBtn = container?.querySelector(
      `[data-tab="${activeTab}"]`
    ) as HTMLElement;

    if (container && activeBtn) {
      const offset =
        activeBtn.offsetLeft -
        container.offsetWidth / 2 +
        activeBtn.offsetWidth / 2;

      container.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  const stepsData: Record<Tab, Step[]> = {
    "Join Quest": [
      {
        number: 1,
        title: "Create Account",
        description: "Sign up using email & password.",
        screenshot: signup,
      },
      {
        number: 2,
        title: "Verify Email",
        description: "Confirm your email.",
        screenshot: verification,
      },
      {
        number: 3,
        title: "Upload ID & UPI",
        description: "Add college ID and payment details.",
        screenshot: upi,
      },
    ],
    "Order Food": [
      {
        number: 1,
        title: "Browse Menu",
        description: "Choose your food.",
        screenshot: menu,
      },
      {
        number: 2,
        title: "Scan QR & Pay",
        description: "Pay using UPI app.",
        screenshot: order,
      },
      {
        number: 3,
        title: "Enter UTR",
        description: "Paste last 4 digits.",
        screenshot: qr,
      },
    ],
    Printouts: [
      {
        number: 1,
        title: "Upload File",
        description: "Upload PDF or image.",
        screenshot: print,
      },
      {
        number: 2,
        title: "Choose Settings",
        description: "Select size & copies.",
        screenshot: setting,
      },
    ],
    Tutors: [
      {
        number: 1,
        title: "Post Request",
        description: "Select help type & set bounty.",
        screenshot: tutor,
      },
    ],
    Updates: [
      {
        number: 1,
        title: "Home Screen Updates",
        description: "View new offers & announcements.",
        screenshot: update,
      },
    ],
  };

  const steps = stepsData[activeTab];

  return (
    <BackgroundWrapper>
      <div className="px-4 py-10 max-w-md mx-auto text-white">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-neon-green mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          BACK
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-neon-green neon-text-glow mb-2">
          How SideQuest Works
        </h1>

        <p className="text-white/60 mb-6 text-sm">
          Simple. Fast. Gamified.
        </p>

        {/* PREMIUM MOBILE TABS */}
        <div className="relative mb-8">

          {/* Fade Left */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-black to-transparent z-10" />

          {/* Fade Right */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-black to-transparent z-10" />

          <div
            ref={tabsContainerRef}
            className="flex overflow-x-auto gap-3 pb-3 scrollbar-hide scroll-smooth"
          >
            {Object.keys(stepsData).map((tab) => (
              <button
                key={tab}
                data-tab={tab}
                onClick={() => handleTabClick(tab as Tab)}
                className={`px-4 py-2 whitespace-nowrap rounded-full text-sm transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-neon-green text-black font-semibold shadow-[0_0_20px_#39FF14]"
                    : "bg-black/40 border border-neon-green/30 text-white/70"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* STEPS */}
        <div ref={stepsRef} className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-black/50 border border-neon-green/30 backdrop-blur-md rounded-2xl p-5"
            >
              {/* Step Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neon-green text-black flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold">
                  {step.title}
                </h3>
              </div>

              <p className="text-white/60 text-sm mb-6">
                {step.description}
              </p>

              {/* MOBILE SCREENSHOT FRAME */}
              {step.screenshot && (
                <div className="flex justify-center">
                  <div className="relative w-52 h-[420px] bg-black rounded-[2.5rem] border-4 border-neon-green shadow-[0_0_25px_#39FF14] overflow-hidden">

                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-10" />

                    <img
                      src={step.screenshot}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </BackgroundWrapper>
  );
}