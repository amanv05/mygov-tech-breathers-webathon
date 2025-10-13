import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppBanner = () => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <Button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-8 rounded-full shadow-2xl flex flex-col items-center gap-2 animate-pulse"
        onClick={() => window.open('https://wa.me/', '_blank')}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="text-xs font-bold uppercase tracking-wider whitespace-nowrap rotate-180" style={{ writingMode: 'vertical-rl' }}>
          JOIN MyGov ON
        </div>
        <span className="text-sm font-bold">WhatsApp</span>
      </Button>
    </div>
  );
};

export default WhatsAppBanner;
