/* eslint-disable react-hooks/exhaustive-deps */
import { animate, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  TiArrowDownThick,
  TiMediaPlay,
  TiMediaPlayReverse,
} from "react-icons/ti";

function Categories() {
  type Categories = {
    id: number;
    image: string;
    title: string;
    text: string;
  };

  const CircleCategories: Categories[] = [
    {
      id: 0,
      image: "/images/coffee.png",
      title: "قهوه ها",
      text: `قهوه نوشیدنی محبوبی است با عطر و طعم خاص. بیشترشان بر پایه‌ی اسپرسو ساخته می‌شوند و با ترکیب آب، شیر یا شکلات، به شکل‌های معروفی مثل آمریکانو، لاته، کاپوچینو موکا , ماکیاتو و همچنین قهوه ترک در می‌آیند`,
    },
    {
      id: 1,
      image: "/images/damnosh.png",
      title: "دمنوش ها",
      text: `دمنوش‌ها نوشیدنی‌هایی گیاهی هستند با خواص آرام‌بخش، درمانی و طعم‌های متنوع. بیشترشان از ترکیب گل‌ها، برگ‌ها، ادویه‌ها یا میوه‌ها تهیه می‌شوند و به شکل‌های محبوبی مثل گل‌گاوزبان، بابونه، چای ترش، زنجبیل، نعناع، دارچین و اسطوخودوس در میان علاقه‌مندان شناخته شده‌اند`,
    },
    {
      id: 2,
      image: "/images/deser.png",
      title: "دسر ها",
      text: "دسرها خوراکی‌های شیرین و دل‌چسبی هستند که پس از وعده‌ی اصلی سرو می‌شوند. بیشترشان با ترکیب خامه، شکلات، میوه یا آرد تهیه می‌شوند و به شکل‌های معروفی مثل کیک، تارت، براونی، پودینگ، ژله و بستنی در می‌آیند",
    },
    {
      id: 3,
      image: "/images/snack.png",
      title: "میان وعده ها",
      text: "میان‌وعده‌ها خوراکی‌های سبک و مقوی هستند که بین وعده‌های اصلی مصرف می‌شوند و انرژی بدن را تجدید می‌کنند. بیشترشان از ترکیب میوه، لبنیات، غلات یا آجیل تهیه می‌شوند و به شکل‌های معروفی مثل ماست میوه‌ای، گرانولا بار، اسموتی، کوکی، ساندویچ سرد، کراکر و مغزها در می‌آیند",
    },
  ];

   
  const [CircleIndex, SetCircleIndex] = useState(0);
  const [OnBtn, SetOnBtn] = useState(true);

  const angleRef = useRef(0);
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);

  const rotateStep = (dir: number = 1) => {
    const nextAngle = angleRef.current + 90 * dir;
    const nextIndex =
      (indexRef.current + dir + CircleCategories.length) %
      CircleCategories.length;

    angleRef.current = nextAngle;
    indexRef.current = nextIndex;

    SetCircleIndex(nextIndex);

    animate(
      "#circle",
      { rotate: nextAngle },
      { duration: 0.5, ease: "easeInOut" }
    );
  };

  const startTimer = () => {
    if (timerRef.current !== null) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => rotateStep(1), 15000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current !== null) window.clearInterval(timerRef.current);
    };
  }, []);

  const handleLeft = () => {
    if (OnBtn) {
      rotateStep(-1);
      startTimer();
    }
    SetOnBtn(false);
    setTimeout(() => {
      SetOnBtn(true);
    }, 1000);
  };

  const handleRight = () => {
    if (OnBtn) {
      rotateStep(1);
      startTimer();
    }
    SetOnBtn(false);
    setTimeout(() => {
      SetOnBtn(true);
    }, 1000);
  };

  const item1 = CircleCategories.find((c) => c.id === CircleIndex);

  return (
    <motion.div
      className="mt-130 mb-50 max-[1024px]:mt-80 max-[640px]:scale-80 "
      id="categories"
    >
      <motion.h1
        whileInView={{ scale: 0.7 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex w-auto justify-center justify-self-center  mb-20 text-4xl text-[#ffffff] border-b-white border-b-2 pb-10"
      >
        دسته بندی ها
      </motion.h1>

      {/* circle */}
      <div className="w-100 ml-20 max-[1024px]:ml-0 max-[1024px]:justify-self-center">
        <div className="flex justify-center gap-10 -mb-15">
          <button
            className="bg-[#E8A470] p-1 flex justify-center rounded-md w-18"
            onClick={handleLeft}
          >
            <TiMediaPlayReverse size={35} color="#2A4759" />
          </button>
          <button
            className="bg-[#E8A470] p-1 flex justify-center rounded-md w-18"
            onClick={handleRight}
          >
            <TiMediaPlay size={35} color="#2A4759" />
          </button>
        </div>

        <div className="flex justify-self-center mt-15">
          <TiArrowDownThick className="-mb-3 drop-shadow-xl z-30" size={40} />
        </div>

        <motion.div
          id="circle"
          className="w-100 h-100 flex justify-center  items-center rounded-full bg-[#E8A470]"
        >
          <div className="w-10 h-10 bg-[#2A4759] rounded-full flex justify-center justify-self-center"></div>

          {/* کارت‌ها */}
          {/* کارت 0 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#2A4759] w-25 h-25 rounded-md -mt-60 absolute"
          >
            <img
              className="absolute w-30 drop-shadow-xl drop-shadow-[#31739B] -ml-3 h-auto mt-8"
              src="/images/coffee_removeback.png"
              alt="coffee"
            />
            <p className="text-center mt-2">قهوه ها</p>
          </motion.div>

          {/* کارت 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#2A4759] w-25 h-25 rounded-md -ml-60 absolute"
          >
            <p className="text-center -rotate-90 mt-10 -ml-4 absolute">
              {" "}
              دمنوش‌ها{" "}
            </p>
            <img
              className="absolute w-18 drop-shadow-xl drop-shadow-[#31739B] -mt-1 ml-6 rotate-270 h-auto"
              src="/images/damnosh_reback.png"
              alt="coffee"
            />
          </motion.div>

          {/* کارت 3 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-[#2A4759] w-25 h-25 rounded-md mt-60 absolute"
          >
            <p className="text-center -rotate-180 mt-17 ml-7 absolute">دسرها</p>
            <img
              className="absolute w-20 drop-shadow-xl drop-shadow-[#31739B] mt-2 ml-2 h-auto rotate-180"
              src="/images/deser_reback.png"
              alt="coffee"
            />
          </motion.div>

          {/* کارت 4 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#2A4759] w-25 h-25 rounded-md ml-60 absolute"
          >
            <p className="text-center rotate-90 mt-9 ml-10 absolute">
              {" "}
              میان‌وعده‌ها{" "}
            </p>
            <img
              className="absolute drop-shadow-xl drop-shadow-[#31739B] w-18 h-auto mt-6 rotate-90"
              src="/images/snack_reback.png"
              alt="coffee"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* اطلاعات کارت انتخاب‌شده */}
      <div
        key={item1?.id}
        className="bg-[#E8A470] w-80 h-90 text-center rounded-3xl max-[1024px]:mr-0 max-[1024px]:justify-self-center  mr-20 flex flex-wrap justify-self-end justify-center -mt-100 max-[1024px]:mt-30"
      >
        <div className="border-[#E8A470] bg-[#241305] border-4 -mt-15 scale-130 rounded-full flex justify-center items-center w-30 h-30 justify-self-center overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-auto h-20 flex justify-self-cente items-center  scale-140"
            src={item1?.image}
            alt={item1?.title}
          />
        </div>
        <motion.h2
          className="text-3xl flex justify-self-center mb-0 mt-5 justify-center w-100 h-10 text-[#2A4759]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {item1?.title}
        </motion.h2>
        <motion.p
          className="w-65 h-60 text-center flex justify-self-center "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {item1?.text}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Categories;
