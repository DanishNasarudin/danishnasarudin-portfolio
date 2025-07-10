import SmartImage from "@/components/custom/smart-image";
import { Badge } from "@/components/ui/badge";
import { contentData } from "@/lib/data";
import TransitionEnd from "@/lib/transition-end";
import Image from "next/image";
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
            className="underline-offset-4 underline decoration-foreground/40 mobilehover:hover:decoration-foreground/80 text-foreground/40 text-center transition-all py-4"
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
            <div className="flex gap-4 flex-wrap">
              {data.stack.map((item: { name: string; src: string }) => (
                <Badge
                  key={item.name}
                  className="flex gap-1 whitespace-nowrap"
                  variant={"outline"}
                >
                  <Image
                    src={item.src}
                    alt={item.src}
                    width={16}
                    height={16}
                    priority
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
          <SmartImage
            key={index}
            src={image}
            alt={`img-${index}`}
            className="w-full h-auto object-cover rounded-md data-[loaded=false]:bg-foreground/30 data-[loaded=false]:animate-pulse"
            width={3926}
            height={2641}
            priority
          />
        ))}
      </section>
      <div className="absolute dark:bg-[#494949] md:dark:bg-[#262626] w-[40%] aspect-square rounded-full z-[-2] blur-[80px] md:blur-[150px] top-[10%] right-[-10%] pointer-events-none" />
      <div className="absolute dark:bg-[#494949]/[0.40] md:dark:bg-[#262626]/[0.40] w-[90%] md:w-[65%] aspect-square rounded-full z-[-2] bottom-[10%] blur-[50px] md:blur-[100px] left-[-10%] pointer-events-none" />
      <TransitionEnd />
    </main>
  );
}
