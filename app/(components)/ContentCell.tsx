import { Skeleton } from "@/components/ui/skeleton";
import TransitionLink from "@/lib/TransitionLink";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  title: string;
  desc: string;
  thumbnail: string;
  details?: string;
  link: string;
  ext_link: string;
};

const ContentCell = ({
  title,
  desc,
  thumbnail,
  details,
  link,
  ext_link,
}: Props) => {
  return (
    <div className="relative bg-white/10 w-full aspect-[3/2] md:aspect-video rounded-md overflow-hidden border-[1px] border-white/15 flex flex-col justify-end p-4 group cursor-pointer">
      <TransitionLink href={link} className="w-full">
        <div className=" bg-gradient-to-t from-transparent from-10%  w-[70%] aspect-[3/2] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-60%] md:translate-y-[-50%] rounded-md overflow-hidden mobilehover:group-hover:translate-y-[-62%] md:mobilehover:group-hover:translate-y-[-52%] transition-all duration-500">
          <Suspense fallback={<Skeleton className="w-[3926px] h-[2641px]" />}>
            <Image
              src={thumbnail}
              alt={link}
              className="gradient-mask-b-[rgba(0,0,0,1.0)_60%]"
              width={3926}
              height={2641}
              priority
            />
          </Suspense>
        </div>

        <div className="flex justify-between text-xs z-[2]">
          <p>{title}</p>
          <p className="text-zinc-400 text-right">{desc}</p>
        </div>
      </TransitionLink>
      {ext_link !== "" && (
        <a href={ext_link} target="_blank">
          <button className="absolute top-[16px] right-[16px] text-zinc-400 mobilehover:hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-external-link"
            >
              <path d="M15 3h6v6" />
              <path d="M10 14 21 3" />
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            </svg>
          </button>
        </a>
      )}
    </div>
  );
};

export default ContentCell;
