import { FaInstagram, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <motion.footer className="w-full  pb-10 flex justify-center  relative"
    initial={{y:-20 , opacity:0}}
    whileInView={{y:0 , opacity:1}}
    transition={{duration:0.5, ease:"easeInOut"}}
    viewport={{once: true }}
    
    >
      {/* فنجون قهوه */}
      <img
        src="/src/assets/images/coffee_removeback.png"
        alt="coffee cup"
        className="
          absolute -mt-30 mr-20 w-80 z-30
          max-sm:w-60 max-sm:-mt-25 max-sm:mr-15
        "
      />

      <div
        className="
        relative bg-[#e39c6b] w-[90%]  max-w-5xl rounded-2xl py-16 
        flex flex-col items-center text-center overflow-hidden
       max-[640]:h-20 min-[640]:h-[300px] max-sm:py-10
      "
      >
        {/* دونه‌های قهوه راست */}
        <motion.img
          src="src/assets/images/bean_coffee.png"
          alt="coffee bean"
          className="
            absolute -right-10 w-100 opacity-100
            max-sm:w-40 max-sm:-right-3 max-sm:opacity-70 max-sm:mt-20
          "
          initial={{ y: 120 }}
          animate={{ y: [120, -150, 120] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* دونه‌های قهوه چپ */}
        <motion.img
          src="src/assets/images/bean_coffee.png"
          alt="coffee bean"
          className="
            absolute -left-10 w-100 opacity-100
            max-sm:w-40 max-sm:-left-3 max-sm:opacity-70 max-sm:mt-20
          "
          initial={{ y: -150 }}
          animate={{ y: [-150, 120, -150] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* عنوان */}
        <p
          style={{ fontWeight: "800", fontFamily: "iran2" }}
          className="text-3xl max-sm:text-2xl"
        >
          کافه <span className="text-[#2A4759]">دنج</span>
        </p>

        {/* منو */}
        <nav
          className="
            flex gap-8 text-white text-lg font-semibold mb-8 mt-8  justify-center
            max-sm:gap-4 max-sm:text-sm max-sm:flex-wrap max-sm:w-[90%] z-40
          "
        >
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#2A4759] transition"
          >
            خانه
          </Link>
          <Link
            to="/Menu"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#2A4759] transition"
          >
            منو
          </Link>
          <Link
            to="/Gallery"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#2A4759] transition"
          >
            گالری
          </Link>
          <Link
            to="/AboutUs"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#2A4759] transition"
          >
            درباره ما
          </Link>
          <Link
            to="/Contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#2A4759] transition"
          >
            تماس با ما
          </Link>
        </nav>

        {/* آیکون‌ها */}
        <div className="flex gap-6 text-white text-2xl mb-6 max-sm:text-xl max-sm:gap-4 z-40">
          <a href="https://www.instagram.com/bardiya185_?igsh=MXJjMWN6OHRhdTVhcA==">
            <FaInstagram
              className="cursor-pointer hover:scale-110 transition"
              color="#2A4759"
            />
          </a>
          <a href="https://github.com/bardiya185">
            <FaGithub
              className="cursor-pointer hover:scale-110 transition"
              color="#2A4759"
            />
          </a>
          <a href="https://t.me/bardiya186">
            <FaTelegram
              className="cursor-pointer hover:scale-110 transition"
              color="#2A4759"
            />
          </a>
          <a href="https://www.linkedin.com/in/bardiya-vahedi-7a96b9397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin
              className="cursor-pointer hover:scale-110 transition"
              color="#2A4759"
            />
          </a>
        </div>

        {/* متن پایین */}
        <p className="text-[12px] text-[#7E583B] mt-2">
          ساخته شده توسط بردیا واحدی
        </p>
        <p className="text-[12px] text-[#7E583B]">©2025–2026</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
