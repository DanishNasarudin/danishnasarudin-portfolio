type Props = {
  src: string;
  title: string;
};

const LogoCell = ({ src, title }: Props) => {
  return (
    <div className="bg-white/10 max-w-[200px] w-full flex flex-col gap-8 text-center items-center py-8 px-2 rounded-md border-[1px] border-white/15 group">
      <img
        src={src}
        alt={src}
        className="w-[60%] mobilehover:group-hover:translate-y-[-5%] transition-all duration-500"
      />
      <p>{title}</p>
    </div>
  );
};

export default LogoCell;
