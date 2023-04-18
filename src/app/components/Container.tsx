"use client";
import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-7xl m-auto bg-white"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Container;
