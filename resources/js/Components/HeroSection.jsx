import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function HeroAnimation() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const anim = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/lottie/hero.json',
        });
        return () => anim.destroy();
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default function HeroSection() {
    return (
        <section className="relative bg-[#d4ebec] min-h-screen overflow-hidden flex items-center">
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 pt-24 pb-12 lg:pt-28 lg:pb-16">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

                    {/* Left — text content */}
                    <div className="lg:w-[46%] lg:pr-8 flex-shrink-0">
                        {/* Badge chip */}
                        <div className="inline-flex items-center gap-2 bg-white border border-[#3b9ea6] text-[#252b37] text-sm font-medium font-['Inter',sans-serif] px-4 py-1.5 rounded-full mb-7">
                            Your Trusted Solution 🔥
                        </div>

                        {/* Heading */}
                        <h1
                            className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#181d27] leading-[1.05] mb-5"
                            style={{ fontSize: 'clamp(40px, 4.5vw, 62px)', letterSpacing: '-1px' }}
                        >
                            Start Your Study Abroad Journey in Mauritius
                        </h1>

                        {/* Subtitle */}
                        <p className="text-[#535862] text-[17px] font-['Inter',sans-serif] leading-relaxed mb-10 max-w-[460px]">
                            We support you from your school application to your arrival, helping you realize your dream of studying in Mauritius.
                        </p>

                        {/* CTA */}
                        <a
                            href="#services"
                            className="inline-flex items-center bg-[#348a91] hover:bg-[#2a6e74] text-white font-semibold font-['Inter',sans-serif] px-8 py-4 rounded-full transition-colors shadow-sm text-base"
                        >
                            View our services
                        </a>
                    </div>

                    {/* Right — Lottie animation */}
                    <div className="lg:w-[54%] w-full flex items-center justify-center" style={{ minHeight: '480px' }}>
                        <HeroAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
}
