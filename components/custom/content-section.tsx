"use client";
import { contentData } from "@/lib/data";
import { motion } from "motion/react";
import ContentCell from "./content-cell";

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
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{
            opacity: 100,
            translateY: 0,
          }}
          transition={{ type: "tween", restSpeed: 0.5, delay: 0.1 * indexRow }}
          viewport={{ once: true }}
          key={indexRow}
          className="flex gap-4 md:gap-8 w-full flex-col md:flex-row"
        >
          {row.map((content, index) => (
            <ContentCell
              key={index}
              index={index}
              title={content.title}
              desc={content.sub_desc}
              thumbnail={content.thumbnail}
              link={`/portfolio/${content.content}`}
              ext_link={content.ext_link}
            />
          ))}
        </motion.div>
      ))}
    </section>
  );
};

export default ContentSection;
