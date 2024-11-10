import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  src: string;
  title: string;
};

const LogoCell = ({ src, title }: Props) => {
  return (
    <div className="bg-white/10 max-w-[200px] w-full flex flex-col gap-8 text-center items-center py-8 px-2 rounded-md border-[1px] border-white/15 group">
      <Suspense
        fallback={<Skeleton className="h-[125px] w-[125px] rounded-xl" />}
      >
        <Image
          src={src}
          alt={src}
          className="w-[60%] mobilehover:group-hover:translate-y-[-5%] transition-all duration-500"
          width={1000}
          height={1000}
          priority
        />
      </Suspense>
      <p>{title}</p>
    </div>
  );
};

export default LogoCell;
