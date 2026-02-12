# Specification

## Summary
**Goal:** Create a single-page “SideQuest” cyberpunk/dark/neon-green marketing landing page with a video hero, multiple Download CTAs, screenshot-in-phone showcase, and premium motion/interaction touches.

**Planned changes:**
- Implement a consistent neon-green-on-black visual system (glow accents, readable typography) across all sections.
- Add a sticky glass/blur navbar with anchor links (Features, For Students, For Runners) and a highlighted Download CTA that smooth-scrolls to sections.
- Build a full-screen (desktop) hero with autoplay/muted/looping MP4 background video, dark overlay, centered copy, primary “Download Now” CTA (configurable link), and secondary “Become a Runner” CTA with glow hover.
- Add a fixed, centered, low-opacity (0.05–0.08) SideQuest logo watermark layer behind page content.
- Create “See SideQuest in Action” with four feature blocks (Runner, Print Shop, Food Menu, Profile + Mana) showing real screenshots inside phone mockups, with specified alternating layouts and subtle floating animation.
- Add an extra prominent Download CTA immediately after the screenshot showcase, plus a final full-width CTA section (“Ready to Start Your Quest?” / “Eat. Earn. Connect.”) with the same configurable Download link.
- Add “How It Works” (3 neon-outline cards), “For Everyone” (Students/Runners/Vendors cards), and “Campus Buzz Preview” (fake feed with subtle auto-scroll respecting reduced-motion).
- Add premium interactions: section fade-ins, subtle parallax where appropriate, neon hover glows, scroll progress indicator, and reduced-motion support.
- Ensure responsive/mobile behavior: stacked layout, full-width screenshot areas, reduced hero video height, and toned-down glow intensity on small screens.
- Implement video performance: lazy-load hero MP4 (target under 5–8 MB) and show a static fallback hero image if video fails/can’t autoplay.
- Add a minimal dark footer with logo, short description, configurable contact email, Privacy/Terms links, and social icons.

**User-visible outcome:** Visitors can scroll a cyberpunk-styled SideQuest landing page with a video hero, clear positioning, animated sections, a screenshot showcase, multiple prominent Download CTAs (all using one configurable link), and responsive behavior including a video fallback.
