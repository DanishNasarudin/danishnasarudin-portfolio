import nextjsdarklogo from "@/public/Logo/Logo-00.png";
import nextjslogo from "@/public/Logo/Logo-01.png";
import reactlogo from "@/public/Logo/Logo-02.png";
import tslogo from "@/public/Logo/Logo-03.png";
import msqllogo from "@/public/Logo/Logo-04.png";
import postgreslogo from "@/public/Logo/Logo-05.png";
import twlogo from "@/public/Logo/Logo-06.png";
import cflogo from "@/public/Logo/Logo-07.png";
import cpanellogo from "@/public/Logo/Logo-08.png";
import socketiologo from "@/public/Logo/Logo-09.png";
import stripelogo from "@/public/Logo/Logo-12.png";
import paypallogo from "@/public/Logo/Logo-13.png";
import clerklogo from "@/public/Logo/Logo-14.png";
import LogoCell from "./logo-cell";

export default function LogoSection({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="flex gap-4 md:gap-8 w-full justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell
            src={{ light: nextjsdarklogo.src, dark: nextjslogo.src }}
            title="Next JS"
            index={0}
          />
          <LogoCell src={reactlogo.src} title="React JS" index={1} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={tslogo.src} title="TypeScript" index={2} />
          <LogoCell src={msqllogo.src} title="MySQL" index={3} />
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 w-full justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={postgreslogo.src} title="PostgreSQL" index={0} />
          <LogoCell src={twlogo.src} title="Tailwind CSS" index={1} />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={cflogo.src} title="CloudFlare" index={2} />
          <LogoCell src={cpanellogo.src} title="cPanel" index={3} />
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 w-full justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={clerklogo.src} title="Clerk Auth" index={0} />
          <LogoCell
            src={socketiologo.src}
            title="Socket IO (Websocket)"
            index={1}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={paypallogo.src} title="PayPal" index={2} />
          <LogoCell src={stripelogo.src} title="Stripe" index={3} />
        </div>
      </div>
    </section>
  );
}
