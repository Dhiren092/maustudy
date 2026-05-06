import { useForm } from '@inertiajs/react';

const contactItems = [
    {
        icon: '/images/icon.svg',
        title: 'Email',
        subtitle: 'Our friendly team is here to help.',
        value: 'contact@maustudy.com',
        href: 'mailto:contact@maustudy.com',
    },
    {
        icon: null, // WhatsApp composed icon
        isWhatsApp: true,
        title: 'Live chat',
        subtitle: 'Our friendly team is here to help.',
        value: 'Chat with our agent on WhatsApp',
        href: 'https://wa.me/23057123456',
    },
    {
        icon: '/images/icon1.svg',
        title: 'Office',
        subtitle: 'Come say hello at our office HQ.',
        value: 'Business Park, Trianon',
        href: '#',
    },
    {
        icon: '/images/icon2.svg',
        title: 'Phone',
        subtitle: 'Mon-Fri from 8am to 5pm.',
        value: '+230 5712 3456',
        href: 'tel:+23057123456',
    },
];

function WhatsAppIcon() {
    return (
        <div className="relative w-10 h-10 flex-shrink-0">
            <img src="/images/bg.svg" alt="" className="absolute inset-0 w-full h-full object-contain" aria-hidden="true" />
            <img src="/images/border.svg" alt="" className="absolute inset-0 w-full h-full object-contain" aria-hidden="true" />
            <img src="/images/phone.svg" alt="WhatsApp" className="absolute inset-0 w-full h-full object-contain" />
        </div>
    );
}

function ContactIcon({ src }) {
    return (
        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
            <img src={src} alt="" className="w-10 h-10 object-contain" aria-hidden="true" />
        </div>
    );
}

export default function ContactSection({ flash = {} }) {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        agreed: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/contact', {
            onSuccess: () => reset(),
        });
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left — info */}
                    <div className="flex-1 max-w-[480px]">
                        <h2
                            className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37] leading-tight mb-4"
                            style={{ fontSize: '38px', letterSpacing: '-0.76px' }}
                        >
                            Chat with our friendly team
                        </h2>
                        <p className="text-[#535862] text-base font-['Inter',sans-serif] mb-10">
                            We'd love to hear from you. Please fill out this form or shoot us an email.
                        </p>

                        {/* Contact items 2×2 grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {contactItems.map((item, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    {item.isWhatsApp ? (
                                        <WhatsAppIcon />
                                    ) : (
                                        <ContactIcon src={item.icon} />
                                    )}
                                    <div>
                                        <p
                                            className="font-['Bricolage_Grotesque',sans-serif] font-bold text-[#252b37]"
                                            style={{ fontSize: '21px' }}
                                        >
                                            {item.title}
                                        </p>
                                        <p className="text-[#535862] text-sm font-['Inter',sans-serif] mt-0.5">
                                            {item.subtitle}
                                        </p>
                                        <a
                                            href={item.href}
                                            className="text-[#348a91] hover:text-[#2a6e74] text-sm font-['Inter',sans-serif] font-medium mt-1 inline-block transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — form */}
                    <div className="flex-1 max-w-[560px]">
                        {(flash.success || wasSuccessful) && (
                            <div className="mb-6 bg-[#eef7f8] border border-[#d0eaec] text-[#348a91] px-4 py-3 rounded-xl text-sm font-['Inter',sans-serif]">
                                {flash.success || "Message sent! We'll be in touch soon."}
                            </div>
                        )}

                        <div className="bg-[#fafafa] rounded-2xl p-8">
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                {/* Name row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#252b37] font-['Inter',sans-serif] mb-1.5">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First name"
                                            value={data.first_name}
                                            onChange={e => setData('first_name', e.target.value)}
                                            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-[#181d27] placeholder-gray-400 font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#348a91] focus:border-transparent"
                                        />
                                        {errors.first_name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#252b37] font-['Inter',sans-serif] mb-1.5">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            value={data.last_name}
                                            onChange={e => setData('last_name', e.target.value)}
                                            className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-[#181d27] placeholder-gray-400 font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#348a91] focus:border-transparent"
                                        />
                                        {errors.last_name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-[#252b37] font-['Inter',sans-serif] mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@company.com"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-[#181d27] placeholder-gray-400 font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#348a91] focus:border-transparent"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-[#252b37] font-['Inter',sans-serif] mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        placeholder="Leave us a message..."
                                        value={data.message}
                                        onChange={e => setData('message', e.target.value)}
                                        className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-[#181d27] placeholder-gray-400 font-['Inter',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#348a91] focus:border-transparent resize-none"
                                        style={{ height: '160px' }}
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Privacy checkbox */}
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="agreed"
                                        checked={data.agreed}
                                        onChange={e => setData('agreed', e.target.checked)}
                                        className="mt-0.5 w-4 h-4 accent-[#348a91] flex-shrink-0"
                                    />
                                    <label htmlFor="agreed" className="text-[#535862] text-sm font-['Inter',sans-serif]">
                                        You agree to our friendly{' '}
                                        <a href="#" className="text-[#348a91] hover:underline">privacy policy</a>.
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-[#348a91] hover:bg-[#2a6e74] disabled:opacity-60 text-white font-semibold font-['Inter',sans-serif] py-3.5 rounded-full transition-colors text-sm"
                                >
                                    {processing ? 'Sending…' : 'Send message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
