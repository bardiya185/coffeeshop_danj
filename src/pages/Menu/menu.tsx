import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscPass } from "react-icons/vsc";

// types
type Category = "قهوه" | "دمنوش" | "دسر" | "میان‌وعده" | "پیشنهادی";

type MenuItem = {
  id: number;
  title: string;
  image: string;
  alt: string;
  category: Category;
  description: string;
  badges: string[];
};

const menuItems: MenuItem[] = [
  // ☕ قهوه
  {
    id: 1,
    title: "اسپرسو",
    category: "قهوه",
    image: "/images/Menu_Item/b_اسپرسو.png",
    alt: "اسپرسو کافه دنج",
    description: "غلیظ، قوی و بیدارکننده؛ جرعه‌ای از تمرکز",
    badges: ["محبوب", "کلاسیک"],
  },
  {
    id: 2,
    title: "دابل اسپرسو",
    category: "قهوه",
    image: "/images/Menu_Item/b_دابل_اسپرسو.png",
    alt: "دابل اسپرسو",
    description: "دو برابر قدرت برای روزهای پرکار",
    badges: ["انرژی‌زا"],
  },
  {
    id: 3,
    title: "آمریکانو",
    category: "قهوه",
    image: "/images/Menu_Item/a_آمریکانو.png",
    alt: "قهوه آمریکانو",
    description: "ملایم و طولانی؛ مناسب عصرهای آرام",
    badges: ["روزمره"],
  },
  {
    id: 4,
    title: "لاته",
    category: "قهوه",
    image: "/images/Menu_Item/a_لاته.png",
    alt: "قهوه لاته",
    description: "نرم و خامه‌ای؛ شروعی گرم و دوست‌داشتنی",
    badges: ["ملایم"],
  },
  {
    id: 5,
    title: "کاپوچینو",
    category: "قهوه",
    image: "/images/Menu_Item/a_کاپوچینو.png",
    alt: "کاپوچینو",
    description: "فوم سبک با مزه‌ای متعادل و دل‌نشین",
    badges: ["کلاسیک"],
  },
  {
    id: 6,
    title: "موکا",
    category: "قهوه",
    image: "/images/Menu_Item/b_موکا.png",
    alt: "موکا شکلاتی",
    description: "ترکیب شکلات و قهوه؛ یک خوشی شیرین",
    badges: ["شکلاتی"],
  },

  // 🌿 دمنوش
  {
    id: 8,
    title: "چای ماسالا",
    category: "دمنوش",
    image: "/images/Menu_Item/b_موکا.png",
    alt: "چای ماسالا",
    description: "ادویه‌دار و گرمابخش؛ عطر سفر شرقی",
    badges: ["گرم", "ادویه‌ای"],
  },
  {
    id: 9,
    title: "دمنوش بابونه",
    category: "دمنوش",
    image: "/images/Menu_Item/b_دمنوش_بابونه.png",
    alt: "دمنوش آرامش",
    description: "آرامش در هر جرعه؛ مناسب لحظه‌های خلوت",
    badges: ["آرام‌بخش"],
  },
  {
    id: 10,
    title: "دمنوش به‌لیمو",
    category: "دمنوش",
    image: "/images/Menu_Item/a_دمنوش_به_لیمو.png",
    alt: "دمنوش به لیمو",
    description: "رایحه‌ی لیمویی با حس سبکی و آرامش",
    badges: ["طراوت‌بخش"],
  },
  {
    id: 11,
    title: "دمنوش زنجبیل و عسل",
    category: "دمنوش",
    image: "/images/Menu_Item/a_دمنوش_زنجبیل_و_عسل.png",
    alt: "دمنوش زنجبیل و عسل",
    description: "گرم‌کننده و مقوی؛ ترکیبی طبیعی و دل‌نشین",
    badges: ["تقویت‌کننده", "گرم"],
  },
  {
    id: 12,
    title: "چای سبز",
    category: "دمنوش",
    image: "/images/Menu_Item/b_چای سبز.png",
    alt: "چای سبز",
    description: "سبک و گیاهی؛ انتخابی سالم برای روزمره",
    badges: ["سالم"],
  },

  // 🍰 دسر
  {
    id: 13,
    title: "چیزکیک کلاسیک",
    category: "دسر",
    image: "/images/Menu_Item/b_چیزکیک_کلاسیک.png",
    alt: "چیزکیک کلاسیک",
    description: "لطیف و کرمی؛ یک پایان شیک برای وعده‌تان",
    badges: ["کلاسیک"],
  },
  {
    id: 14,
    title: "چیزکیک شکلاتی",
    category: "دسر",
    image: "/images/Menu_Item/b_چیزکیک_شکلاتی.png",
    alt: "چیزکیک شکلاتی",
    description: "پرشکلات و مجلل؛ شیرینیِ حال‌خوب‌کن",
    badges: ["شکلاتی", "محبوب"],
  },
  {
    id: 15,
    title: "براونی شکلاتی",
    category: "دسر",
    image: "/images/Menu_Item/b_براونی_شکلاتی.png",
    alt: "براونی شکلاتی",
    description: "فشرده و غنی؛ عاشقان شکلات اینجاست",
    badges: ["پرکالری", "شکلاتی"],
  },
  {
    id: 17,
    title: "کیک هویج",
    category: "دسر",
    image: "/images/Menu_Item/a_کیک_هویج.png",
    alt: "کیک هویج",
    description: "دارچینی و نرم؛ یک نوستالژی گرم",
    badges: ["خانگی"],
  },
  {
    id: 18,
    title: "مافین بلوبری",
    category: "دسر",
    image: "/images/Menu_Item/b_مافین_بلوبری.png",
    alt: "مافین بلوبری",
    description: "میوه‌ای و خوش‌عطر؛ مناسب عصرانه‌ی سبک",
    badges: ["میوه‌ای"],
  },

  // 🥐 میان‌وعده
  {
    id: 19,
    title: "کروسان ساده",
    category: "میان‌وعده",
    image: "/images/Menu_Item/a_کروسان_ساده.png",
    alt: "کروسان ساده",
    description: "ترد و کره‌ای؛ همراهی عالی برای قهوه",
    badges: ["تازه"],
  },
  {
    id: 20,
    title: "کروسان شکلاتی",
    category: "میان‌وعده",
    image: "/images/Menu_Item/a_کروسان_شکلاتی.png",
    alt: "کروسان شکلاتی",
    description: "شیرین و پرانرژی؛ یک خوشمزگی سریع",
    badges: ["شکلاتی"],
  },
  {
    id: 21,
    title: "پنینی مرغ",
    category: "میان‌وعده",
    image: "/images/Menu_Item/b_پنینی_مرغ.webp",
    alt: "پنینی مرغ",
    description: "سیرکننده و خوش‌طعم؛ انتخابی مطمئن",
    badges: ["پروتئینی"],
  },
  {
    id: 22,
    title: "سالاد میوه",
    category: "دسر",
    image: "/images/Menu_Item/b_سالاد_میوه.png",
    alt: "سالاد میوه",
    description: "ترکیبی تازه و رنگارنگ؛ انتخابی سالم و انرژی‌بخش",
    badges: ["سالم", "خنک"],
  },
  {
    id: 23,
    title: "کلاب ساندویچ",
    category: "میان‌وعده",
    image: "/images/Menu_Item/a_کلاب_ساندویچ.png",
    alt: "کلاب ساندویچ",
    description: "هر لایه یک طعم؛ برای گرسنگی‌های جدی",
    badges: ["سیرکننده"],
  },

  // ⭐ پیشنهادی
  {
    id: 24,
    title: "لاته",
    category: "پیشنهادی",
    image: "/images/Menu_Item/a_لاته.png",
    alt: "قهوه لاته",
    description: "نرم و خامه‌ای؛ شروعی گرم و دوست‌داشتنی",
    badges: ["پیشنهاد ویژه", "ملایم"],
  },

  {
    id: 25,
    title: "چیزکیک شکلاتی",
    category: "پیشنهادی",
    image: "/images/Menu_Item/b_چیزکیک_شکلاتی.png",
    alt: "چیزکیک شکلاتی",
    description: "پرشکلات و مجلل؛ شیرینیِ حال‌خوب‌کن",
    badges: ["پیشنهاد ویژه", "شکلاتی"],
  },
  {
    id: 26,
    title: "دمنوش بابونه",
    category: "پیشنهادی",
    image: "/images/Menu_Item/b_دمنوش_بابونه.png",
    alt: "دمنوش آرامش",
    description: "آرامش در هر جرعه؛ مناسب لحظه‌های خلوت",
    badges: ["پیشنهاد ویژه", "آرام‌بخش"],
  },
  {
    id: 27,
    title: "کلاب ساندویچ",
    category: "پیشنهادی",
    image: "/images/Menu_Item/a_کلاب_ساندویچ.png",
    alt: "کلاب ساندویچ",
    description: "هر لایه یک طعم؛ برای گرسنگی‌های جدی",
    badges: ["پیشنهاد ویژه", "سیرکننده"],
  },
];

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
