import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-linear-to-br from-[#2A4759] to-[#1b2c38] text-white px-4">
      {/* عنوان بزرگ */}
      <motion.h1
        className="text-7xl sm:text-9xl font-extrabold text-[#e39c6b] mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        404
      </motion.h1>

      {/* متن توضیح */}
      <motion.p
        className="text-lg sm:text-xl mb-8 text-gray-200 text-center max-w-md leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{direction:'rtl'}}
      >
        اوه! این صفحه مثل میز خالی در کافه‌ست...
        <br />
        مسیر مورد نظر پیدا نشد.
      </motion.p>

      {/* دکمه برگشت */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link
          to="/"
          className="bg-[#e39c6b] text-[#2A4759] px-6 py-3 rounded-lg font-semibold hover:bg-[#d68a55] transition"
        >
          بازگشت به خانه
        </Link>
      </motion.div>

      {/* افکت مینیمال خطوط متحرک */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#e39c6b] to-transparent"
        animate={{ x: ["0%", "100%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export default NotFound;
