// src/pages/Conract.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

const Conract: React.FC = () => {
  return (
    <main
      className="min-h-screen flex items-center min-[1024px]:-mt-30 justify-center bg-linear-to-br p-6"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 , delay:0.1}}
        className="w-full max-w-lg rounded-3xl bg-black/40 backdrop-blur-xl shadow-2xl p-8 text-white"
      >
        <h1
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: "#E8A470" }}
        >
          ارتباط با ما
        </h1>

        {/* متن درباره ارتباط */}
        <p className="text-slate-200 mb-8 leading-relaxed text-center">
          ارتباط با شما برای ما ارزشمندترین بخش کار است. ما باور داریم که هر
          پیام، پیشنهاد یا حتی یک گفت‌وگوی ساده می‌تواند مسیر تازه‌ای برای
          کافه دنج بسازد. از طریق شبکه‌های اجتماعی زیر همیشه می‌توانید با ما در
          تماس باشید و تجربه‌هایتان را با ما به اشتراک بگذارید.
        </p>

        {/* شبکه‌های اجتماعی */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/bardiya185_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="hover:scale-125 transition"
              style={{ color: "#E8A470" }}
              size={30}
            />
          </a>
          <a
            href="https://github.com/bardiya185"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="hover:scale-125 transition"
              style={{ color: "#E8A470" }}
              size={30}
            />
          </a>
          <a
            href="https://t.me/bardiya186"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram
              className="hover:scale-125 transition"
              style={{ color: "#E8A470" }}
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bardiya-vahedi-7a96b9397"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="hover:scale-125 transition"
              style={{ color: "#E8A470" }}
              size={30}
            />
          </a>
        </div>
      </motion.div>
    </main>
  );
};

export default Conract;
