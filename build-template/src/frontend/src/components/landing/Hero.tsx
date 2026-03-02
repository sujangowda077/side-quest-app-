import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LANDING_CONFIG } from "@/landing/config";

import fooddelivery from "@/assets/screenshots/fooddelivery.png";
import assignmentprinting from "@/assets/screenshots/print.png";
import rewardearning from "@/assets/screenshots/reward.png";
import deliveryquests from "@/assets/screenshots/deliveryquest.png";
import playstore from "@/assets/screenshots/playstore.png";
import appstore from "@/assets/screenshots/appstore.png";
export function Hero() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const handleDownload = () => {
    if (LANDING_CONFIG.openInNewTab) {
      window.open(LANDING_CONFIG.downloadUrl, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = LANDING_CONFIG.downloadUrl;
    }
  };

  const features = [
    {
      title: "Food Delivery",
      desc: "Order meals from campus vendors instantly.",
      img: fooddelivery,
    },
    {
      title: "Assignment Printing",
      desc: "Upload PDFs and schedule print pickup.",
      img: assignmentprinting,
    },
    {
      title: "Reward Earning",
      desc: "Earn points and redeem campus rewards.",
      img: rewardearning,
    },
    {
      title: "Delivery Quests",
      desc: "Complete delivery missions and earn cash.",
      img: deliveryquests,
    },
  ];

  return (
    <section className="relative h-auto py-24 flex items-center justify-center overflow-hidden">

      {/* 🎥 Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={() => setVideoError(true)}
        >
          <source
            src="https://wczartlciqwwcvivrtcg.supabase.co/storage/v1/object/public/sidequest-assets/sidequest-bg%20(1).mp4"
            type="video/mp4"
          />
        </video>
      )}

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/95 z-10" />

      {/* Neon Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.15),transparent_70%)] z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl px-6 text-center">

        {/* Title Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-neon-green neon-text-glow mb-6 tracking-tight"
        >
          SideQuest
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-4xl text-white/90 font-semibold mb-8"
        >
          Level Up Your Campus Life
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 leading-relaxed mb-16 max-w-3xl mx-auto"
        >
          Order food, print assignments, earn rewards, and complete delivery quests —
          all in one powerful campus super app.
        </motion.p>
      
{/* ✅ DOWNLOAD BUTTONS HERE */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
>
  {/* Android */}
  <a
    href="https://drive.google.com/file/d/1lvJfsh4ow3FoskSs-ACk2j4zkpu_4CTy/view?usp=sharing"
    download
    className="w-[260px] flex justify-center transition-transform duration-300 hover:scale-105"
  >
    <img
      src={playstore}
      alt="Download for Android"
      className="w-full h-auto object-contain"
    />
  </a>

  {/* iOS */}
  <a
    href="https://sidequest-app-iota.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-[260px] flex justify-center transition-transform duration-300 hover:scale-105"
  >
    <img
      src={appstore}
      alt="Download for iOS"
      className="w-full h-auto object-contain"
    />
  </a>
</motion.div>

{/* 🔥 Feature Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"></div>
        {/* 🔥 Glass Morph Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 40px rgba(0,255,136,0.6)",
              }}
              className="relative p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 group cursor-pointer transition-all duration-300"
            >
              {/* Neon Pulse Border */}
              <div className="absolute inset-0 rounded-2xl border border-neon-green/30 opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-300" />

              <div className="flex flex-col items-center text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 mb-6 drop-shadow-[0_0_25px_rgba(0,255,136,0.7)]"
                />

                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        
        </motion.div>

      </div>
    </section>
  );
}
