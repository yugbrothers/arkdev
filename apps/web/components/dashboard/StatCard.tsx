"use client";

import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="
      backdrop-blur-xl
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-6
      shadow-xl
      "
    >
      <p className="text-sm opacity-70">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </motion.div>
  );
}
