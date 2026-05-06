import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '#about' },
        { label: 'Our services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
                {/* Logo — explicit px on both images because the SVGs have preserveAspectRatio="none" */}
                <Link href="/" className="flex items-center gap-3 flex-shrink-0">
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
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[#535862] hover:text-[#252b37] text-base font-medium font-['Inter',sans-serif] transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center">
                    <a
                        href="#contact"
                        className="bg-[#348a91] hover:bg-[#2a6e74] text-white text-base font-semibold font-['Inter',sans-serif] px-7 py-3 rounded-full transition-colors shadow-sm"
                    >
                        Apply now
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 text-[#535862]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className={`md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4 ${scrolled ? 'bg-white' : 'bg-[#d4ebec]'}`}>
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-[#535862] font-medium py-1 font-['Inter',sans-serif]"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="bg-[#348a91] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center font-['Inter',sans-serif]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Apply now
                    </a>
                </div>
            )}
        </nav>
    );
}
