import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import { SiLinkedin } from 'react-icons/si';

interface Founder {
    name: string;
    degree: string;
    college: string;
    semester: string;
    quote: string;
    linkedinUrl?: string;
}

const founders: Founder[] = [
    {
        name: 'SREYASH RANJAN',
        degree: 'B.E - Artificial Intelligence & Machine Learning',
        college: 'Nagarjuna College of Engineering and Technology',
        semester: '6',
        quote: "We don't compete. We construct leagues.",
        linkedinUrl: 'https://www.linkedin.com/in/sreyash-ranjan-2a7275300/'
    },
    {
        name: 'SHREYAS SIMHA J R',
        degree: 'B.E - Artificial Intelligence & Machine Learning',
        college: 'Nagarjuna College of Engineering and Technology',
        semester: '6',
        quote: 'Ordinary apps solve problems. We redesign possibilities.',
        linkedinUrl: 'https://www.linkedin.com/in/shreyes-simha-j-r-6349aa2bb/'
    },
    {
        name: 'SUJAN GOWDA S',
        degree: 'B.E - Artificial Intelligence & Machine Learning',
        college: 'Nagarjuna College of Engineering and Technology',
        semester: '6',
        quote: 'If the system doesn\'t exist, we build it.',
        linkedinUrl: 'https://www.linkedin.com/in/sujan-gowda-s-24a0442b1/'
    },
    {
        name: 'PRATHYUSH C M',
        degree: 'B.E - Artificial Intelligence & Machine Learning',
        college: 'Nagarjuna College of Engineering and Technology',
        semester: '6',
        quote: "Innovation isn't optional. It's our default setting.",
        linkedinUrl: 'https://www.linkedin.com/in/prathyush-cm-6208b0320/'
    }
];

export function FoundersSection() {
    const headerReveal = useRevealOnScroll();
    const card1Reveal = useRevealOnScroll(100);
    const card2Reveal = useRevealOnScroll(200);
    const card3Reveal = useRevealOnScroll(300);
    const card4Reveal = useRevealOnScroll(400);
    const closingReveal = useRevealOnScroll(500);

    const cardReveals = [card1Reveal, card2Reveal, card3Reveal, card4Reveal];

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-cyber-dark py-20 px-4 sm:px-6 lg:px-8">
            {/* Animated scanline background */}
            <div className="absolute inset-0 scanline-bg opacity-20" />
            <div className="absolute inset-0 grid-bg opacity-10" />

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Header */}
                <div
                    ref={headerReveal.ref}
                    className={`mb-16 text-center transition-all duration-1000 ${
                        headerReveal.isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <h1 className="mb-4 font-orbitron text-5xl font-bold uppercase tracking-[0.2em] text-neon-green sm:text-6xl lg:text-7xl neon-glow-text">
                        MEET THE ARCHITECTS
                    </h1>
                    <p className="mb-8 font-orbitron text-lg tracking-[0.15em] text-neon-green/80 sm:text-xl">
                        FOUR AIML MINDS. ONE VISION.
                    </p>
                    <div className="mx-auto h-[1px] w-64 bg-neon-green neon-glow-divider animate-pulse-glow" />
                </div>

                {/* Founder Cards Grid */}
                <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {founders.map((founder, index) => (
                        <div
                            key={founder.name}
                            ref={cardReveals[index].ref}
                            className={`group relative transition-all duration-700 ${
                                cardReveals[index].isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        >
                            <div className="cyber-card relative overflow-hidden rounded-lg border border-neon-green/30 bg-black/40 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-neon-green hover:shadow-neon-strong">
                                {/* Card scanline effect */}
                                <div className="absolute inset-0 scanline-card opacity-0 transition-opacity duration-300 group-hover:opacity-30" />

                                <div className="relative z-10">
                                    {/* Name */}
                                    <h2 className="mb-6 font-orbitron text-3xl font-bold tracking-wider text-neon-green neon-glow-text-subtle">
                                        {founder.name}
                                    </h2>

                                    {/* Education Details */}
                                    <div className="mb-6 space-y-2 text-sm text-gray-300">
                                        <p className="font-medium">{founder.degree}</p>
                                        <p className="text-gray-400">{founder.college}</p>
                                        <p className="text-gray-400">Semester: {founder.semester}</p>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="mb-6">
                                        {founder.linkedinUrl ? (
                                            <a
                                                href={founder.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-neon-green/70 transition-colors hover:text-neon-green"
                                            >
                                                <SiLinkedin className="h-5 w-5" />
                                                <span className="text-sm">LinkedIn</span>
                                            </a>
                                        ) : (
                                            <div className="inline-flex items-center gap-2 text-neon-green/40">
                                                <SiLinkedin className="h-5 w-5" />
                                                <span className="text-sm">LinkedIn</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Quote */}
                                    <blockquote className="border-l-2 border-neon-green/50 pl-4 italic text-neon-green/70">
                                        &quot;{founder.quote}&quot;
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div
                    ref={closingReveal.ref}
                    className={`text-center transition-all duration-1000 ${
                        closingReveal.isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                >
                    <p className="font-orbitron text-2xl font-bold tracking-wide text-neon-green neon-glow-text sm:text-3xl lg:text-4xl">
                        Side Quest isn&apos;t a side project &mdash; It&apos;s the beginning.
                    </p>
                </div>
            </div>

                
        </section>
    );
}
