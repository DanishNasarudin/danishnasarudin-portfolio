import ContentImage from "@/components/custom/content-image";
import SmartImage from "@/components/custom/smart-image";
import { Badge } from "@/components/ui/badge";
import { contentData } from "@/lib/data";
import TransitionEnd from "@/lib/transition-end";
import Link from "next/link";

export const generateStaticParams = async () => {
  return contentData.map((item) => ({
    content: item.content,
  }));
};

export default async function Page({
  params,
}: {
  params: Promise<{ content: string }>;
}) {
  const { content } = await params;
  const data = contentData.filter((item) => item.content === content)[0];
  return (
    <main className="relative flex min-h-screen flex-col items-center pb-10 gap-8 md:gap-16 pt-0">
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10 testing">
        {data.ext_link !== "" && (
          <Link
            href={data.ext_link}
            target="_blank"
            className="underline-offset-4 underline decoration-foreground/40 mobilehover:hover:decoration-foreground/80 text-foreground/40 text-center transition-all py-4 w-min whitespace-nowrap mx-auto"
          >
            View Live
          </Link>
        )}
        <div className="w-full flex justify-end">
          <div className="flex gap-4 group [&>div]:transition-all">
            <div className="bg-foreground/40 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/60 w-4 h-4 group-hover:rotate-45" />
            <div className="bg-foreground/80 w-4 h-4 group-hover:rotate-45" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xl text-zinc-400 max-w-[700px]">{data.desc}</p>
          {data.stack.length > 0 && (
            <div className="flex gap-4 flex-wrap max-w-[600px]">
              {data.stack.map((item) => (
                <Badge
                  key={item.name}
                  className="flex gap-1 whitespace-nowrap"
                  variant={"outline"}
                >
                  <SmartImage
                    alt={item.name}
                    width={16}
                    height={16}
                    priority
                    src={typeof item.src !== "object" ? item.src : "/"}
                    themeSrc={
                      typeof item.src === "object" ? item.src : undefined
                    }
                  />
                  {item.name}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="flex flex-col gap-4 md:gap-8 max-w-[1060px] w-full px-0 md:px-10">
        {data.images.map((image, index) => (
          <ContentImage key={index} image={image} index={index} />
        ))}
      </section>
      <div className="absolute dark:bg-zinc-600 md:dark:bg-zinc-600 w-[60%] aspect-square rounded-full z-[-2] blur-[80px] md:blur-[150px] top-[10%] right-[-10%] pointer-events-none" />
      <div className="absolute dark:bg-zinc-600/[0.40] md:dark:bg-zinc-700/[0.40] w-[90%] md:w-[65%] aspect-square rounded-full z-[-2] bottom-[10%] blur-[50px] md:blur-[100px] left-[-10%] pointer-events-none" />
      <TransitionEnd />
    </main>
  );
}
