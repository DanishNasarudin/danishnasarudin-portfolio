"use client";
import { motion } from "motion/react";
import SmartImage from "./smart-image";

export default function LogoCell({
  src,
  title,
  index,
}: {
  src: string | { light: string; dark: string };
  title: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{
        opacity: 100,
        translateY: 0,
      }}
      transition={{ type: "tween", restSpeed: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="bg-foreground/5 max-w-[200px] w-full flex flex-col gap-8 text-center items-center py-8 px-2 rounded-2xl border-[1px] border-border group"
    >
      <SmartImage
        src={typeof src === "string" ? src : "/"}
        themeSrc={typeof src === "object" ? src : undefined}
        alt={title}
        className="w-[60%] mobilehover:group-hover:translate-y-[-5%] transition-all duration-500 h-auto object-cover rounded-md data-[loaded=false]:min-w-[100px] data-[loaded=false]:w-full data-[loaded=false]:bg-foreground/30 data-[loaded=false]:animate-pulse"
        width={1000}
        height={1000}
        priority
      />
      <p>{title}</p>
    </motion.div>
  );
}
