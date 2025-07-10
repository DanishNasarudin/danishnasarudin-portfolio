"use client";
import { motion } from "motion/react";
import SmartImage from "./smart-image";

export default function ContentImage({
  image,
  index,
}: {
  image: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{
        opacity: 100,
        translateY: 0,
      }}
      transition={{ type: "tween", restSpeed: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
    >
      <SmartImage
        src={image}
        alt={`img-${index}`}
        className="w-full h-auto object-cover rounded-md data-[loaded=false]:bg-foreground/30 data-[loaded=false]:animate-pulse"
        width={3926}
        height={2641}
        priority
      />
    </motion.div>
  );
}
