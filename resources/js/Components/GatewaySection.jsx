const features = [
    {
        icon: '/images/step_icon_base.svg',
        text: 'Personalized academic and career counselling.',
    },
    {
        icon: '/images/step_icon_base1.svg',
        text: 'University application & visa processing made easy.',
    },
    {
        icon: '/images/step_icon_base.svg',
        text: 'Arrival assistance, accommodation, and part-time job support.',
    },
];

export default function GatewaySection() {
    return (
        <section id="about" className="py-20 bg-[#fcf6ec]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left — Image */}
                    <div className="flex-1 w-full max-w-[568px] rounded-lg overflow-hidden shadow-md flex-shrink-0">
                        <img
                            src="/images/turquoise_water_touches_golden_shores_where_people.png"
                            alt="Mauritius coastline"
                            className="w-full h-auto object-cover"
                            style={{ aspectRatio: '568/474' }}
                        />
                    </div>

                    {/* Right — Content */}
                    <div className="flex-1 max-w-[460px]">
                        <h2
                            className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37] leading-tight mb-5"
                            style={{ fontSize: '38px', letterSpacing: '-0.76px', maxWidth: '402px' }}
                        >
                            Your Gateway to Studying in Mauritius
                        </h2>

                        <p className="text-[#535862] text-base font-['Inter',sans-serif] leading-relaxed mb-8">
                            We simplify the entire process for international students — from choosing the right school to settling into Mauritius. Our all-inclusive services ensure you feel supported at every step.
                        </p>

                        {/* Bullet list */}
                        <ul className="flex flex-col gap-4 mb-10">
                            {features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <img
                                        src={feat.icon}
                                        alt=""
                                        className="w-6 h-6 object-contain flex-shrink-0"
                                        aria-hidden="true"
                                    />
                                    <span className="text-[#535862] text-sm font-['Inter',sans-serif] leading-relaxed">
                                        {feat.text}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[#348a91] hover:bg-[#2a6e74] text-white font-semibold font-['Inter',sans-serif] px-6 py-3 rounded-full transition-colors text-sm"
                        >
                            Get started
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
