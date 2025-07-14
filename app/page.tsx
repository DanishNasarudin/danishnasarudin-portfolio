import LogoSection from "@/components/custom/logo-section";
import TransitionEnd from "@/lib/transition-end";
import profile from "@/public/profile.jpg";
import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { WebSite, WithContext } from "schema-dts";
import ContentSection from "../components/custom/content-section";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

export const metadata: Metadata = {
  title: "Danish Nasarudin: A Developer Portfolio",
  description:
    "A Portfolio by Danish Nasarudin. Full-Stack Web Developer specialised in web systems tailored for businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Danish Nasarudin",
    title: "Danish Nasarudin",
    description: "A Portfolio by Danish Nasarudin. Full-Stack Web Developer.",
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
    "@type": "WebSite",
    name: "Danish Nasarudin",
    url: `${baseUrl}`,
    image: `${baseUrl}/profile.jpg`,
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center pb-10 gap-8 md:gap-16 pt-0">
      <Script type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(jsonLd)}
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
          Danish Nasarudin is a Full-Stack Web Developer, based in Malaysia.{" "}
          Sole developer at{" "}
          <Link
            href={"https://idealtech.com.my/"}
            target="_blank"
            className="underline underline-offset-4  transition-all duration-500 decoration-foreground/30 mobilehover:hover:decoration-foreground/60"
          >
            Ideal Tech PC
          </Link>
          , his work touches the important parts of the company{"'"}s operation
          both for consumer and internal staff.
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
          Although using the latest tech is a benefit to a developer, sticking
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
          If you{`'`}re looking to hire a developer with additional skillset
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
