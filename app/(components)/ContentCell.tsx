import TransitionLink from "@/lib/TransitionLink";

type Props = {
  title: string;
  desc: string;
  thumbnail: string;
  details?: string;
  link: string;
};

const ContentCell = ({ title, desc, thumbnail, details, link }: Props) => {
  return (
    <TransitionLink href={link} className="w-full">
      <div className="relative bg-white/10 w-full aspect-[3/2] md:aspect-video rounded-md overflow-hidden border-[1px] border-white/15 flex flex-col justify-end p-4 group cursor-pointer">
        <div className=" bg-gradient-to-t from-transparent from-10%  w-[70%] aspect-[3/2] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-60%] md:translate-y-[-50%] rounded-md overflow-hidden mobilehover:group-hover:translate-y-[-62%] md:mobilehover:group-hover:translate-y-[-52%] transition-all duration-500">
          <img
            src={thumbnail}
            alt={link}
            className="gradient-mask-b-[rgba(0,0,0,1.0)_60%]"
          />
        </div>

        <div className="flex justify-between text-xs z-[2]">
          <p>{title}</p>
          <p className="text-zinc-400 text-right">{desc}</p>
        </div>
      </div>
    </TransitionLink>
  );
};

export default ContentCell;
