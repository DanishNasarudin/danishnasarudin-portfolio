import nextjsdarklogo from "@/public/Logo/Logo-00.png";
import nextjslogo from "@/public/Logo/Logo-01.png";
import reactlogo from "@/public/Logo/Logo-02.png";
import tslogo from "@/public/Logo/Logo-03.png";
import msqllogo from "@/public/Logo/Logo-04.png";
import postgreslogo from "@/public/Logo/Logo-05.png";
import twlogo from "@/public/Logo/Logo-06.png";
import cflogo from "@/public/Logo/Logo-07.png";
import stripelogo from "@/public/Logo/Logo-12.png";
import LogoCell from "./logo-cell";

export default function LogoSection({ className }: { className?: string }) {
  return (
    <section className={className}>
      <div className="flex gap-4 md:gap-8 w-full justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell
            src={{ light: nextjsdarklogo.src, dark: nextjslogo.src }}
            title="Next JS"
          />
          <LogoCell src={reactlogo.src} title="React JS" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={tslogo.src} title="TypeScript" />
          <LogoCell src={msqllogo.src} title="MySQL" />
        </div>
      </div>
      <div className="flex gap-4 md:gap-8 w-full justify-center">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={postgreslogo.src} title="PostgreSQL" />
          <LogoCell src={twlogo.src} title="Tailwind CSS" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <LogoCell src={cflogo.src} title="CloudFlare" />
          <LogoCell src={stripelogo.src} title="Stripe" />
        </div>
      </div>
    </section>
  );
}
