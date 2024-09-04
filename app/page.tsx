import Link from "next/link";
import ContentSection from "./(sections)/ContentSection";
import LogoSection from "./(sections)/LogoSection";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center pb-10 gap-8 md:gap-16 pt-0">
      {/* <section className="sticky w-full flex justify-between top-0 pt-10 z-[20] bg-gradient-to-b from-black to-transparent to-100% px-4 md:px-10">
        <Button
          variant={"ghost"}
          asChild
          className="mobilehover:hover:bg-transparent mobilehover:hover:text-zinc-400"
        >
          <Link
            href={"/"}
            className="!text-[32px] font-medium underline underline-offset-4"
          >
            DN
          </Link>
        </Button>
        <Button
          variant={"ghost"}
          className="mobilehover:hover:bg-transparent mobilehover:hover:text-zinc-500 text-zinc-400"
        >
          Reach Out
        </Button>
      </section> */}
      {/* <section className="h-[50px]"></section> */}
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10">
        <div className="w-full flex justify-end">
          <div className="flex gap-4">
            <div className="bg-zinc-50 w-4 h-4" />
            <div className="bg-zinc-200 w-4 h-4" />
            <div className="bg-zinc-400 w-4 h-4" />
          </div>
        </div>
        <p className="text-xl text-zinc-400 max-w-[680px]">
          Danish Nasarudin is a Full-Stack Web Developer, based in Malaysia.{" "}
          Sole developer at{" "}
          <Link
            href={"https://idealtech.com.my/"}
            target="_blank"
            className="underline underline-offset-4  transition-all duration-500 decoration-zinc-400/30 mobilehover:hover:decoration-zinc-400"
          >
            Ideal Tech PC
          </Link>
          , his work touches the important parts of the company's operation both
          for consumer and internal staff.
        </p>
      </section>
      <ContentSection className="max-w-[1060px] w-full flex flex-col gap-4 md:gap-8 px-4 md:px-10" />
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10">
        <div className="w-full flex justify-end">
          <div className="flex gap-4">
            <div className="bg-zinc-50 w-4 h-4" />
            <div className="bg-zinc-200 w-4 h-4" />
            <div className="bg-zinc-400 w-4 h-4" />
          </div>
        </div>
        <p className="text-xl text-zinc-400 max-w-[700px]">
          Although using the latest tech is a benefit to a developer, sticking
          to certain stacks greatly improves the understanding towards each
          tech. In return, provide shortest solutions to commonly solved
          problems.
        </p>
      </section>
      <LogoSection className="flex flex-col gap-4 md:gap-8 max-w-[900px] w-full px-4 md:px-10" />
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10">
        <div className="w-full flex justify-end">
          <div className="flex gap-4">
            <div className="bg-zinc-50 w-4 h-4" />
            <div className="bg-zinc-200 w-4 h-4" />
            <div className="bg-zinc-400 w-4 h-4" />
          </div>
        </div>
        <p className="text-xl text-zinc-400 max-w-[700px]">
          If you’re looking to hire a developer with additional skillset outside
          of tech (Project Manager, Creative Lead), please do reach out.
        </p>
      </section>
      <section className="h-[100px]"></section>
      {/* <section className="text-zinc-400 text-xs">DN. 2024</section> */}
      <div className="absolute bg-[#494949] md:bg-[#262626] w-[40%] aspect-square rounded-full z-[-2] blur-[80px] md:blur-[150px] top-[10%] left-[-10%] pointer-events-none" />
      <div className="absolute bg-[#494949]/[0.40] md:bg-[#262626]/[0.40] w-[90%] md:w-[65%] aspect-square rounded-full z-[-2] bottom-[10%] blur-[50px] md:blur-[100px] left-[-5%] translate-x-[80%] pointer-events-none" />
    </main>
  );
}
