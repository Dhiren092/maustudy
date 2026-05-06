import { usePage } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import HowItWorks from '../Components/HowItWorks';
import GatewaySection from '../Components/GatewaySection';
import Testimonials from '../Components/Testimonials';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

export default function Home() {
    const { flash } = usePage().props;

    return (
        <div className="min-h-screen font-inter">
            <Navbar />
            <main>
                <HeroSection />
                <HowItWorks />
                <GatewaySection />
                <Testimonials />
                <ContactSection flash={flash} />
            </main>
            <Footer />
        </div>
    );
}
