import { useState } from "react";
import BackgroundWrapper from "@/components/layout/BackgroundWrapper";
import Tabs from "./Tabs";
import StepCard from "./StepCard";
import ScreenshotBlock from "./ScreenshotBlock";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function HowItWorksPage() {
  const [active, setActive] = useState("Join Quest");
  const navigate = useNavigate();

  return (
    <BackgroundWrapper>

      <div className="px-6 py-20 max-w-7xl mx-auto text-white">
          {/* Back Button */}
          <div className="mb-10">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-neon-green hover:gap-3 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </button>
          </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-center text-neon-green neon-text-glow mb-4">
          HOW SIDEQUEST WORKS
        </h1>

        <p className="text-center text-foreground/60 mb-12">
          Order. Print. Learn. Earn.
        </p>

        <Tabs active={active} setActive={setActive} />

        <div className="mt-16">

          {/* JOIN QUEST */}
          {active === "Join Quest" && (
            <div className="grid lg:grid-cols-2 gap-12">

              <div className="space-y-6">
                <StepCard number={1} title="Tap Join Quest" description="Create account using email & password." />
                <StepCard number={2} title="Verify Email" description="Confirm your account via email." />
                <StepCard number={3} title="Upload ID & UPI" description="Add college ID, UPI, phone number & name." />
              </div>

              <div className="space-y-6">
                <ScreenshotBlock label="Signup screen screenshot" />
                <ScreenshotBlock label="Email confirmation screenshot" />
                <ScreenshotBlock label="Profile verification screenshot" />
              </div>

            </div>
          )}

          {/* ORDER FOOD */}
          {active === "Order Food" && (
            <div className="grid lg:grid-cols-2 gap-12">

              <div className="space-y-6">
                <StepCard number={1} title="Browse Menu" description="Select food item from menu." />
                <StepCard number={2} title="Scan QR & Pay" description="Screenshot QR and pay using UPI app." />
                <StepCard number={3} title="Enter UTR" description="Paste last 4 digits of UTR." />
                <StepCard number={4} title="Get Notified" description="Vendor accepts & order ready notification." />
              </div>

              <div className="space-y-6">
                <ScreenshotBlock label="Menu page screenshot" />
                <ScreenshotBlock label="QR code screenshot" />
                <ScreenshotBlock label="UTR entry screenshot" />
                <ScreenshotBlock label="Order accepted notification screenshot" />
              </div>

            </div>
          )}

          {/* PRINTOUTS */}
          {active === "Printouts" && (
            <div className="grid lg:grid-cols-2 gap-12">

              <div className="space-y-6">
                <StepCard number={1} title="Upload File" description="Upload photos or PDF." />
                <StepCard number={2} title="Choose Settings" description="Select page size & copies." />
                <StepCard number={3} title="Make Payment" description="Pay via QR and paste UTR." />
              </div>

              <div className="space-y-6">
                <ScreenshotBlock label="Upload page screenshot" />
                <ScreenshotBlock label="Print settings screenshot" />
                <ScreenshotBlock label="Print confirmation screenshot" />
              </div>

            </div>
          )}

          {/* TUTORS */}
          {active === "Tutors" && (
            <div className="grid lg:grid-cols-2 gap-12">

              <div className="space-y-6">
                <StepCard number={1} title="Post Request" description="Select help type & set bounty." />
                <StepCard number={2} title="Tutor Accepts" description="Tutor calls & fixes location." />
                <StepCard number={3} title="Session + OTP" description="Give OTP after session." />
              </div>

              <div className="space-y-6">
                <ScreenshotBlock label="Tutor request form screenshot" />
                <ScreenshotBlock label="Select help type screenshot" />
                <ScreenshotBlock label="OTP confirmation screenshot" />
              </div>

            </div>
          )}

          {/* UPDATES */}
          {active === "Updates" && (
            <div className="grid lg:grid-cols-2 gap-12">

              <div>
                <StepCard number={1} title="Stay Updated" description="New food items, discounts & vendor announcements appear on home screen." />
              </div>

              <div>
                <ScreenshotBlock label="Home screen offers screenshot" />
              </div>

            </div>
          )}

        </div>

        {/* Final Statement */}
        <div className="text-center mt-24 text-2xl text-neon-green neon-text-glow">
          SideQuest connects campus needs in one powerful platform.
        </div>

      </div>

    </BackgroundWrapper>
  );
}