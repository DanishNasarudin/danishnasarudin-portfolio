import { contentData } from "@/lib/data";
import ContentCell from "../(components)/ContentCell";

type Props = {
  className?: string;
};

export type ContentProps = {
  content: string;
  title: string;
  sub_desc: string;
  thumbnail: string;
  desc: string;
  images: string[];
  ext_link: string;
};

const ContentSection = ({ className }: Props) => {
  const data = contentData as ContentProps[];

  const rows = data.reduce<ContentProps[][]>((acc, item, index) => {
    if (index % 2 === 0) {
      acc.push([item]);
    } else {
      acc[acc.length - 1].push(item);
    }
    return acc;
  }, []);

  return (
    <section className={className}>
      {rows.map((row, indexRow) => (
        <div
          key={indexRow}
          className="flex gap-4 md:gap-8 w-full flex-col md:flex-row"
        >
          {row.map((content, index) => (
            <ContentCell
              key={index}
              title={content.title}
              desc={content.sub_desc}
              thumbnail={content.thumbnail}
              link={`/portfolio/${content.content}`}
              ext_link={content.ext_link}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default ContentSection;
