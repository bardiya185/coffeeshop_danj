import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';


function BestSellers() {
  type BestSellers = {
    id: number;
    category: string;
    title: string;
    price: number;
    image: string;
    description: string;
  };

  const items: BestSellers[] = [
    {
      id: 1,
      category: "قهوه",
      title: "لاته",
      price: 150000,
      image: "/images/latte.png",
      description: "نرم، خامه‌ای و دل‌چسب برای شروع روز",
    },
    {
      id: 2,
      category: "دمنوش",
      title: "دمنوش بابونه",
      price: 120000,
      image: "/images/damnosh_baboneh.png",
      description: "آرامش در هر جرعه، مناسب لحظه‌های خلوت",
    },
    {
      id: 3,
      category: "میان‌وعده",
      title: "ساندویچ کلاب",
      price: 350000,
      image: "/images/Club_sandwich.png",
      description: "پرملات، خوش‌طعم و مناسب گرسنگی‌های جدی",
    },
    {
      id: 4,
      category: "دسر",
      title: "چیزکیک",
      price: 250000,
      image: "/images/cheesecake.png",
      description: "لطیف، شیرین و یک پایان رؤیایی برای وعده‌تان",
    },
  ];

  return (
    <div
      style={{
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        marginBottom:'200px',
      }}
    >
      <motion.h1
        className=" absolute -mt-25 text-3xl text-[#ffffff] border-b-white border-b-2 pb-10"
        whileInView={{ scale: 0.7 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        پر فروش ترین ها
      </motion.h1>
      <div
        style={{
          width: "90%",
          background: "#e5a06c",
          padding: "15px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={0}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true} // برای اسلایدر بی‌نهایت خیلی مهمه
          style={{ padding: "10px" }}
        >
          {items.map((item , index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ x: 10  , opacity:0}}
                whileInView={{ x: 0 , opacity:1}}
                transition={{duration:0.2 , delay:0.1 * index}}
                viewport={{once:true}}
                style={{
                  width: "180px",
                  height: "280px",
                  background: "#234b5a",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  display: "flex",
                  justifySelf: "center",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  justifyItems: "center",
                  color: "white",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
              >
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "1rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "200px", // میتوانید با درصد هم کار کنید
                  }}
                >
                  {item.title.length > 30
                    ? `${item.title.substring(0, 27)}...`
                    : item.title}
                </h3>

                <h6 className=" text-[12px] text-[#a8a8a8] mb-10 -mt-3">
                  {item.description}
                </h6>

                {/* دایره پشت عکس */}
                <div
                  style={{
                    width: "100%",
                    height: "50px",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    justifySelf: "center",
                    marginBottom: "30px",
                    marginTop: "-20px",
                  }}
                >
                  <img
                    className="drop-shadow-xl drop-shadow-[#31739B]"
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "95px",
                      display: "flex",
                      justifySelf: "center",
                    }}
                  />
                </div>
                <button
                  style={{
                    height: "40px",
                    marginTop: "10px",
                    padding: "2px 15px",
                    background: "white",
                    color: "#FFFFFFFF",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <p className=" text-[#E8A470]">اطلاعات بیشتر</p>
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
          <button
            className="btn-prev absolute ml-2 left-0 top-1/2 -translate-y-1/2
             w-10 h-10  bg-[#234b5a]/90 backdrop-blur-sm text-[#E8A470]  rounded-md
             flex items-center justify-center z-30"
          >
            ◀
          </button>

          <button
            className="btn-next absolute mr-2 right-0 top-1/2 -translate-y-1/2
             w-10 h-10 bg-[#234b5a]/90 text-[#E8A470]  rounded-md
             flex items-center justify-center backdrop-blur-sm z-30"
          >
            ▶
          </button>
        </Swiper>
      </div>
    </div>
  );
}
export default BestSellers;
