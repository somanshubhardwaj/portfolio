"use client";
import TagLine from "./Tagline";
import { useRef } from "react";
import { useInView, motion, Variants } from "framer-motion";
const Heading = ({
  className,
  title,
  text,
  tag,
}: {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInvView = useInView(ref, {});
  const headingVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  };
  return (
    <motion.div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
      animate={isInvView ? "visible" : "hidden"}
      variants={headingVariants}
      ref={ref}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 ">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </motion.div>
  );
};

export default Heading;
