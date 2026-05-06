const testimonials = [
    {
        avatar: '/images/avatar.png',
        avatarBg: '#e9dcbb',
        name: 'Sienna Hewitt',
        quote: "We've been using Untitled to kick start every new project and can't imagine working without it.",
    },
    {
        avatar: '/images/avatar1.png',
        avatarBg: '#c7d1b0',
        name: 'Kari Rasmussen',
        quote: 'From concept to completion, Untitled helps us deliver outstanding designs faster than ever.',
    },
    {
        avatar: '/images/avatar2.png',
        avatarBg: '#ddc0ce',
        name: 'Amélie Laurent',
        quote: "Every project starts with Untitled which has 10x'd our output. It saves us time while keeping the quality top-notch.",
    },
    {
        avatar: '/images/avatar3.png',
        avatarBg: '#cfcbdc',
        name: 'Aliah Lane',
        quote: "Untitled has quickly become our go-to resource for every design project. The results are consistently amazing.",
    },
    {
        avatar: '/images/avatar4.png',
        avatarBg: '#d4e4e5',
        name: 'Eduard Flores',
        quote: "Untitled offers exactly what we need to get started quickly. It's helped us cut down on design time significantly.",
    },
    {
        avatar: '/images/avatar5.png',
        avatarBg: '#e8d5c4',
        name: 'Lily-Rose Chedjou',
        quote: 'Untitled offers everything we need to get started on UI projects quickly. We go from zero to one, insanely fast.',
    },
];

function Stars() {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <img
                    key={i}
                    src="/images/star.svg"
                    alt="star"
                    style={{ width: 20, height: 20, objectFit: 'contain' }}
                />
            ))}
        </div>
    );
}

function Avatar({ src, bg, name }) {
    return (
        <div className="relative inline-flex flex-shrink-0">
            <div
                className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                style={{
                    backgroundColor: bg,
                    border: '1.5px solid rgba(0,0,0,0.08)',
                }}
            >
                <img src={src} alt={name} className="w-full h-full object-cover" />
            </div>
            {/* Gold verified badge */}
            <div className="absolute bottom-0 right-0 w-4 h-4 flex items-center justify-center">
                <img src="/images/vector2.svg" alt="" className="absolute inset-0 w-full h-full object-contain" aria-hidden="true" />
                <img src="/images/vector1.svg" alt="" className="relative w-2.5 h-2.5 object-contain" aria-hidden="true" />
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-[#fcf6ec]">
            <div className="max-w-[1280px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2
                        className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37] mb-4"
                        style={{ fontSize: '38px', letterSpacing: '-0.76px' }}
                    >
                        Wall of love
                    </h2>
                    <p className="text-[#535862] text-base font-['Inter',sans-serif] max-w-[480px] mx-auto">
                        Hear first-hand from our incredible community of students &amp; partners.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="flex flex-wrap gap-6 justify-center">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#fafafa] rounded-xl flex flex-col"
                            style={{
                                padding: '32px',
                                gap: '32px',
                                minWidth: '300px',
                                flex: '1 1 300px',
                                maxWidth: '380px',
                            }}
                        >
                            {/* Stars + Quote */}
                            <div className="flex flex-col gap-4">
                                <Stars />
                                <p className="text-[#535862] text-base font-['Inter',sans-serif] leading-relaxed" style={{ fontWeight: 500 }}>
                                    "{t.quote}"
                                </p>
                            </div>

                            {/* Avatar + Name */}
                            <div className="flex items-center gap-3">
                                <Avatar src={t.avatar} bg={t.avatarBg} name={t.name} />
                                <p
                                    className="text-[#181d27] font-['Inter',sans-serif]"
                                    style={{ fontSize: '16px', fontWeight: 600 }}
                                >
                                    {t.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* See more button */}
                <div className="mt-12 text-center">
                    <a
                        href="#"
                        className="inline-block bg-[#348a91] hover:bg-[#2a6e74] text-white font-semibold font-['Inter',sans-serif] px-6 py-3 rounded-full text-sm transition-colors"
                    >
                        See more testimonials
                    </a>
                </div>
            </div>
        </section>
    );
}
