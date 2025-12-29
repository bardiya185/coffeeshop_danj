import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscPass } from "react-icons/vsc";
import { menuItems } from "./list_of_menu_items";

// types
type Category = "قهوه" | "دمنوش" | "دسر" | "میان‌وعده" | "پیشنهادی";

const categories: Category[] = [
  "قهوه",
  "دمنوش",
  "دسر",
  "میان‌وعده",
  "پیشنهادی",
];

export default function CafeMenuPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("قهوه");
  const [Width_Window, setWidth_Window] = useState(window.innerWidth);

  useEffect(() => {
    setInterval(() => {
      setWidth_Window(window.innerWidth);
    }, 100);
  }, []);
  const filteredItems = menuItems.filter(
    (item) => item.category === activeCategory
  );

  return (
    <>
      <div className="lg:h-300 md:h-400 h-400 p-6 lg:mt-10 md:mt-20 mt-30 mb-0  ">
        <motion.div
          className="p-5 pt-10 rounded-2xl backdrop-blur-2xl mb-5 bg-linear-to-tr from-[#c7a37c] via-[#a88e64] to-[#a28557] bg-[radial-gradient(circle_at_top_left,#fff3,transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h1
            className="text-3xl font-bold text-center mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            منو کافه <span className=" text-[#E8A470]">دنج</span>
          </motion.h1>
          {/* categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, index) => (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl transition-colors text-sm font-medium cursor-pointer outline-0
        ${
          activeCategory === cat
            ? cat === "پیشنهادی"
              ? "bg-red-600 text-white"
              : "bg-[#2b1d14] text-white"
            : cat === "پیشنهادی"
            ? "bg-red-100 text-red-700 hover:bg-red-200"
            : "bg-white text-[#2b1d14] hover:bg-[#e7d3b0]"
        }
      `}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 md:p-20 sm:p-10 gap-6 max-w-5xl  mx-auto"
          whileHover="hover"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={item.id}
              // دسکتاپ: عمودی | موبایل: افقی با عکس سمت راست
              className="bg-[#E8A470] rounded-2xl p-5  overflow-hidden  shadow-sm hover:shadow-xl hover:bg-[#ffb46d] cursor-pointer transition-colors flex flex-row lg:flex-row sm:flex-row items-center sm:items-end sm:text-rigth text-center"
              style={
                Width_Window > 1024
                  ? { direction: "ltr" }
                  : { direction: "ltr" }
              }
            >
              {/* تصویر سمت راست */}
              <img
                className="rounded-xl w-25 h-25 lg:w-30 lg:h-30 md:w-30 md:h-30 object-cover mb-0 mt-0 sm:mb-0 sm:ml-4"
                src={item.image}
                alt={item.alt}
                style={{ direction: "rtl" }}
              />

              {/* محتوای کارت سمت چپ */}
              <div
                className="flex w-full  flex-col  justify-end justify-self-end  sm:justify-end  sm:justify-self-end items-start  text-right sm:text-right right-0 relative"
                style={{ direction: "rtl" }}
              >
                {/* پرچسب‌ها */}
                <div className="flex flex-row text-sm items-center justify-center sm:justify-end gap-2 mb-2">
                  <motion.span
                    key={item.id}
                    className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                    initial={{ rotate: 10, scale: 1.2 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.2, delay: 0.3 }}
                  >
                    <VscPass className="ml-1" size={15} />
                    <p className="text-[13px] whitespace-nowrap">
                      {item.badges[0]}
                    </p>
                  </motion.span>

                  {item.badges[1] && (
                    <motion.span
                      id="b2"
                      className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                      initial={{ rotate: 10, scale: 1.2 }}
                      whileInView={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      <VscPass className="ml-1" size={15} />
                      <p className="text-[13px] whitespace-nowrap">
                        {item.badges[1]}
                      </p>
                    </motion.span>
                  )}
                </div>

                {/* عنوان */}
                <h3 className="text-xl max-[640px]:text-[18px] font-semibold mb-2">
                  {item.title}
                </h3>

                {/* دکمه */}
                <button
                  type="button"
                  className="w-40 h-10 mt-2 rounded-md bg-[#444] outline-0 cursor-pointer transition hover:bg-[#333]"
                >
                  اطلاعات بیشتر
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
