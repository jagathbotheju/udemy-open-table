"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { motion } from "framer-motion";

interface CardProps {}

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const Card: FC<CardProps> = ({}) => {
  const router = useRouter();

  return (
    <motion.div variants={images}>
      <div
        onClick={() => router.push("/restaurant/milestone-grill")}
        className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer hover:scale-105 transition duration-300 mx-auto"
      >
        <div>
          <img className="w-full h-36" src="/res1.jpg" alt="" />
        </div>
        <div className="p-2">
          <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>

          {/* stars */}
          <div className="flex items-start">
            <div className="flex mb-2">****</div>
            <p className="ml-2">123 reviews</p>
          </div>

          <div className="flex text-reg font-light capitalize">
            <p className="font-light mr-3">Mexican</p>
            <p className="mr-3">$$$$</p>
            <p>Toronto</p>
          </div>
          <p className="mt-1 text-sm font-semibold">Booked 3 times today</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
