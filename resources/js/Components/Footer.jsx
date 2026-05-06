export default function Footer() {
    const pages = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '#about' },
        { label: 'Our service', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Application form', href: '#contact' },
    ];

    return (
        <footer className="bg-[#fafafa] border-t border-gray-200 pt-14 pb-8">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 justify-between mb-12">

                    {/* Brand */}
                    <div className="max-w-xs">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/images/group1.svg"
                                alt=""
                                aria-hidden="true"
                                style={{ width: '49px', height: '36px', display: 'block', flexShrink: 0 }}
                            />
                            <img
                                src="/images/group.svg"
                                alt="MauStudy"
                                style={{ width: '99px', height: '20px', display: 'block', flexShrink: 0 }}
                            />
                        </div>

                        {/* Tagline — intentional typo "studing" as in Figma */}
                        <p className="text-[#535862] text-sm font-['Inter',sans-serif] leading-relaxed max-w-[220px]">
                            Simplifying your studing abroad journey with end-to-end support.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-4 mt-5 items-center">
                            <a href="#" aria-label="Facebook">
                                <img
                                    src="/images/ss119336825641.svg"
                                    alt="Facebook"
                                    style={{ width: 25, height: 24, objectFit: 'contain' }}
                                />
                            </a>
                            <a href="#" aria-label="Instagram">
                                <img
                                    src="/images/ss91729558541.svg"
                                    alt="Instagram"
                                    style={{ width: 25, height: 24, objectFit: 'contain' }}
                                />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <img
                                    src="/images/ss128232966761.svg"
                                    alt="YouTube"
                                    style={{ width: 25, height: 24, objectFit: 'contain' }}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4
                            className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37] mb-5"
                            style={{ fontSize: '16px' }}
                        >
                            Pages
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {pages.map((p) => (
                                <li key={p.label}>
                                    <a
                                        href={p.href}
                                        className="text-[#535862] hover:text-[#348a91] text-sm font-['Inter',sans-serif] transition-colors"
                                    >
                                        {p.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[#535862] text-xs font-['Inter',sans-serif]">
                        © 2025 MauStudy. All rights reserved.
                    </p>
                    <p className="text-[#535862] text-xs font-['Inter',sans-serif]">
                        Design and developed by{' '}
                        <a href="#" className="underline text-[#535862] hover:text-[#348a91] transition-colors">
                            Vertex Experience
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
