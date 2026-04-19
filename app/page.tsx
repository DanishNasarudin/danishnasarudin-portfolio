import LogoSection from "@/components/custom/logo-section";
import TransitionEnd from "@/lib/transition-end";
import profile from "@/public/profile.jpg";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ProfilePage, WebSite, WithContext } from "schema-dts";
import ContentSection from "../components/custom/content-section";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const metadata: Metadata = {
  title: "Danish Nasarudin: A Software Engineer's Portfolio",
  description:
    "A Portfolio by Danish Nasarudin. A Front-End Mobile Engineer specialised in Fintech Payment Product.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Danish Nasarudin",
    title: "Danish Nasarudin",
    description:
      "A Portfolio by Danish Nasarudin. A Mobile Front-End Engineer specialised in Fintech Payment Product.",
    images: [
      {
        url: profile.src,
        width: 1000,
        height: 1000,
        alt: "Danish Nasarudin Profile",
      },
    ],
  },
};

export default function Home() {
  const jsonLd: WithContext<WebSite> = {
    "@context": "https://schema.org",
    "@id": `${baseUrl}/#website`,
    "@type": "WebSite",
    name: "Danish Nasarudin",
    url: `${baseUrl}`,
  };

  const jsonLdProfile: WithContext<ProfilePage> = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Danish Nasarudin",
      identifier: "danish-aiman-nasarudin",
      description:
        "Danish Nasarudin is a Front-End Mobile Engineer, based in Malaysia. He specialised in the Payment related products within the Fintech industry.",
      jobTitle: "Front-End Mobile Engineer (Fintech)",
      worksFor: {
        "@type": "Organization",
        name: "YTL Digital Bank Berhad (Ryt Bank)",
      },
      url: `${baseUrl}`,
      address: {
        "@type": "PostalAddress",
        addressLocality:
          "WP. Kuala Lumpur, Federal Territory of Kuala Lumpur, Malaysia",
        addressCountry: "N/A",
      },
      image: `${baseUrl}/profile.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/danishnasarudin/",
        "https://www.youtube.com/c/DanishNasarudin",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Asia Pacific University of Technology and Innovation (APU / APIIT)",
        },
        {
          "@type": "EducationalOrganization",
          name: "University of Nottingham Malaysia",
        },
      ],
    },
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center pb-10 gap-8 md:gap-16 pt-0">
      <Script id='json-ld-website' type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
      <Script id='json-ld-profile' type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLdProfile)}
      </Script>
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10">
        <div className="w-full flex justify-end">
          <div className="flex gap-4 group [&>div]:transition-all">
            <div className="bg-foreground/40 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/60 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/80 w-4 h-4 group-hover:rotate-45" />
          </div>
        </div>
        <p className="text-xl text-foreground/40 max-w-[680px]">
          Danish Nasarudin is a Full-Stack Software Engineer, based in Malaysia.{" "}
          He was the sole engineer at{" "}
          <Link
            href={"https://idealtech.com.my/"}
            target="_blank"
            className="underline underline-offset-4 transition-all duration-500 decoration-foreground/30 mobilehover:hover:decoration-foreground/60"
          >
            Ideal Tech PC
          </Link>
           {" "}that covered the company{"'"}s operation
          both for consumer and internal staff.
        </p>
        <p className="text-xl text-foreground/40 max-w-[680px]">He is now specialising in Front-End Mobile Engineering at <Link
            href={"https://www.rytbank.my/"}
            target="_blank"
            className="underline underline-offset-4 transition-all duration-500 decoration-foreground/30 mobilehover:hover:decoration-foreground/60"
          >
            Ryt Bank
          </Link>{" "} as part of the Payment Team.
        </p>
      </section>
      <ContentSection className="max-w-[1060px] w-full flex flex-col gap-4 md:gap-8 px-4 md:px-10" />
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10">
        <div className="w-full flex justify-end">
          <div className="flex gap-4 group [&>div]:transition-all">
            <div className="bg-foreground/40 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/60 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/80 w-4 h-4 group-hover:rotate-45" />
          </div>
        </div>
        <p className="text-xl text-foreground/40 max-w-[700px]">
          Although using the latest tech is a benefit to an engineer, sticking
          to certain stacks greatly improves the understanding towards each
          tech. In return, provide shortest solutions to commonly solved
          problems.
        </p>
      </section>
      <LogoSection className="flex flex-col gap-4 md:gap-8 max-w-[900px] w-full px-4 md:px-10" />
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10">
        <div className="w-full flex justify-end">
          <div className="flex gap-4 group [&>div]:transition-all">
            <div className="bg-foreground/40 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/60 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/80 w-4 h-4 group-hover:rotate-45" />
          </div>
        </div>
        <p className="text-xl text-zinc-400 max-w-[700px]">
          If you{`'`}re looking to hire an engineer with additional skillset
          outside of tech (Project Manager, Creative Lead), please do reach out.
        </p>
      </section>
      <section className="h-[100px]"></section>
      {/* <section className="text-zinc-400 text-xs">DN. 2024</section> */}
      <div className="absolute bg-white dark:bg-zinc-500 md:bg-white md:dark:bg-zinc-600 w-[60%] aspect-square rounded-full z-[-2] blur-[80px] md:blur-[150px] top-[10%] left-[-10%] pointer-events-none" />
      <div className="absolute bg-white/40 dark:bg-zinc-600/40 md:bg-white/40 md:dark:bg-zinc-700/40 w-[90%] md:w-[65%] aspect-square rounded-full z-[-2] bottom-[10%] blur-[50px] md:blur-[100px] left-[-5%] translate-x-[80%] pointer-events-none" />
      <TransitionEnd />
    </main>
  );
}
