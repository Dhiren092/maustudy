const steps = [
    {
        icon: '/images/icon3.svg',
        iconSize: 80,
        iconStyle: {},
        title: 'Personalized Academic & Career Guidance',
        description: 'We start with a free consultation, allowing us to understand your goals, and guide you towards them.',
    },
    {
        icon: '/images/g19260.svg',
        iconSize: 72,
        iconStyle: { transform: 'scaleY(-1) rotate(180deg)' },
        title: 'Hassle-Free Application & Visa Processing',
        description: 'We handle your application process and visa documentation, ensuring a smooth and stress-free experience.',
    },
    {
        icon: '/images/icon4.svg',
        iconSize: 82,
        iconStyle: {},
        title: 'Arrival Support & Job Opportunities',
        description: 'Once in Mauritius, we help with accommodation, orientation, and support you in finding a part-time job.',
    },
];

export default function HowItWorks() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Heading */}
                <h2
                    className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37] text-center mb-16"
                    style={{ fontSize: '38px', letterSpacing: '-0.76px' }}
                >
                    How it works?
                </h2>

                {/* 3 Columns */}
                <div className="flex flex-col md:flex-row gap-12 justify-center items-start">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center flex-1 max-w-[320px] mx-auto">
                            {/* Icon */}
                            <div className="mb-6 flex items-center justify-center" style={{ height: '90px' }}>
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    style={{ width: step.iconSize, height: step.iconSize, objectFit: 'contain', ...step.iconStyle }}
                                />
                            </div>

                            {/* Title */}
                            <h3
                                className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37] mb-3"
                                style={{ fontSize: '21px' }}
                            >
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#535862] text-sm font-['Inter',sans-serif] leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Learn more button */}
                <div className="mt-14 text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-[#348a91] hover:bg-[#2a6e74] text-white font-semibold font-['Inter',sans-serif] px-6 py-3 rounded-full text-sm transition-colors"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
