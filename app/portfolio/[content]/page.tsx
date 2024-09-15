import { Button } from "@/components/ui/button";
import { contentData } from "@/lib/data";
import Link from "next/link";

type Props = {};

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
        <p className="text-xl text-zinc-400 max-w-[700px]">{data.desc}</p>
      </section>
      <section className="flex flex-col gap-4 md:gap-8 max-w-[1060px] w-full px-0 md:px-10">
        {/* <div className="w-full bg-red-400 aspect-video rounded-md"></div>
        <img src="" alt="" />
        <div className="w-full bg-red-400 aspect-video rounded-md"></div> */}
        {data.images.map((image, index) => (
          <img
            src={image}
            alt={`img-${index}`}
            key={index}
            className="w-full rounded-md"
          />
        ))}
      </section>
      <div className="absolute bg-[#494949] md:bg-[#262626] w-[40%] aspect-square rounded-full z-[-2] blur-[80px] md:blur-[150px] top-[10%] right-[-10%] pointer-events-none" />
      <div className="absolute bg-[#494949]/[0.40] md:bg-[#262626]/[0.40] w-[90%] md:w-[65%] aspect-square rounded-full z-[-2] bottom-[10%] blur-[50px] md:blur-[100px] left-[-10%] pointer-events-none" />
    </main>
  );
};

export default WarrantyEntry;
