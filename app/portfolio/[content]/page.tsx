import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { contentData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export const generateStaticParams = async () => {
  return contentData.map((item) => ({
    content: item.content,
  }));
};

const WarrantyEntry = ({ params }: { params: { content: string } }) => {
  const data = contentData.filter((item) => item.content === params.content)[0];
  return (
    <main className="relative flex min-h-screen flex-col items-center pb-10 gap-8 md:gap-16 pt-0">
      <section className="flex flex-col gap-8 max-w-[1060px] w-full py-[100px] px-4 md:px-10 testing">
        {data.ext_link !== "" && (
          <Button
            variant={"ghost"}
            className="mobilehover:hover:bg-transparent mobilehover:hover:text-zinc-400 text-zinc-400 "
            asChild
          >
            <Link
              href={data.ext_link}
              target="_blank"
              className="underline-offset-4 underline decoration-zinc-600 mobilehover:hover:decoration-zinc-400"
            >
              View Live
            </Link>
          </Button>
        )}
        <div className="w-full flex justify-end">
          <div className="flex gap-4">
            <div className="bg-zinc-50 w-4 h-4" />
            <div className="bg-zinc-200 w-4 h-4" />
            <div className="bg-zinc-400 w-4 h-4" />
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
          <Suspense
            fallback={<Skeleton className="w-[3926px] h-[2641px]" />}
            key={index}
          >
            <Image
              src={image}
              alt={`img-${index}`}
              className="w-full rounded-md"
              width={3926}
              height={2641}
              priority
            />
          </Suspense>
        ))}
      </section>
      <div className="absolute bg-[#494949] md:bg-[#262626] w-[40%] aspect-square rounded-full z-[-2] blur-[80px] md:blur-[150px] top-[10%] right-[-10%] pointer-events-none" />
      <div className="absolute bg-[#494949]/[0.40] md:bg-[#262626]/[0.40] w-[90%] md:w-[65%] aspect-square rounded-full z-[-2] bottom-[10%] blur-[50px] md:blur-[100px] left-[-10%] pointer-events-none" />
    </main>
  );
};

export default WarrantyEntry;
