import Header from "@/components/Header";
import Statistics from "@/components/Statistics";
import GetInvolved from "@/components/GetInvolved";
import Activities from "@/components/Activities";
import WhatsAppBanner from "@/components/WhatsAppBanner";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <WhatsAppBanner />
      <main className="pt-[120px]">
        <HeroSection />
        <Statistics />
        <GetInvolved />
        <Activities />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
