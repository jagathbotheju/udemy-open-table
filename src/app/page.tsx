"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "./components/Card";
import Header from "./components/Header";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home() {
  return (
    <main className="m-5 flex flex-col mx-auto">
      <Header />
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </motion.div>
    </main>
  );
}
