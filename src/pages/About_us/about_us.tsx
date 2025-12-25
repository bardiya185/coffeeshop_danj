import React from "react";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="text-[#dfdfdf] min-h-screen mt-20 lg:mt-5 sm:mt-20">
        {/* Header */}
        <header className="py-10">
          <motion.h1
            className="text-3xl w-auto flex justify-self-center md:text-4xl font-bold text-center"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0, ease: "easeInOut" }}
            style={{direction:'rtl'}}
          >
            درباره کافه <span className=" text-[#E8A470]">دنج</span>
          </motion.h1>
          <motion.p
            className="text-center w-auto flex justify-self-center  border-b-2 pb-2  border-b-white mt-3 text-sm md:text-base text-[#ffffff]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            جایی برای آرامش، گفتگو و طعم واقعی قهوه
          </motion.p>
        </header>

        {/* About Section */}
        <section
          className="max-w-6xl mx-auto px-6 py-16 -mt-10"
          style={{ direction: "rtl" }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#E8A470]">
                داستان ما
              </h2>
              <p className="leading-8 text-sm md:text-base">
                کافه دنج با عشق به قهوه و احترام به لحظه‌های ساده زندگی شکل
                گرفت. ما باور داریم یک فنجان قهوه خوب می‌تواند شروع یک گفت‌وگوی
                عمیق، یک ایده تازه یا حتی یک آرامش کوتاه در شلوغی روز باشد.
              </p>
              <p className="leading-8 mt-4 text-sm md:text-base">
                در کافه دنج از دانه‌های باکیفیت، دم‌آوری اصولی و فضایی گرم و
                صمیمی استفاده می‌کنیم تا هر بار تجربه‌ای ماندگار برای شما
                بسازیم.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration:0.5, delay: 1, ease: "easeInOut" }}
            >
              <img
                src="/images/AboutUs_Photo.jpg"
                alt="Cafe Din"
                className="w-full  rounded-2xl h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 h-auto text-[#ffffff] mb-10 ">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#E8A470]">
              ارزش‌های ما
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:h-30 md:h-30 sm:h-120 text-center overflow-hidden ">
              <motion.div
                className="p-6 rounded-2xl h-30 bg-[#405f9f] shadow"
                initial={{ y: 120 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
              >
                <h3 className="font-bold mb-2">کیفیت</h3>
                <p className="text-sm">
                  انتخاب بهترین دانه‌ها و تهیه اصولی قهوه
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl h-30 bg-[#334c80] shadow"
                initial={{ y: 120 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              >
                <h3 className="font-bold mb-2">صداقت</h3>
                <p className="text-sm">شفافیت در قیمت، مواد اولیه و برخورد</p>
              </motion.div>

              <motion.div
                className="p-6 rounded-2xl h-30 bg-[#23355a] shadow"
                initial={{ y: 120 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
              >
                <h3 className="font-bold mb-2">آرامش</h3>
                <p className="text-sm">محیطی امن و دلنشین برای همه</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AboutUs;
