import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { PiCoffeeBeanBold } from "react-icons/pi";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

function Comments() {

  
type Comments = {
  id:number,
  name:string,
  city:string,
  message:string
  star:number
};
const items: Comments[] = [
  {
    id: 0,
    name: "امیر حسینی",
    message: "«قهوه‌هاتون واقعاً کیفیت عالی داره... بسته‌بندی هم خیلی تمیز و شیک بود.»",
    star: 5,
  },
  {
    id: 1,
    name: "سارا رجبی",
    message: "«طعم قهوه خوب بود... فقط کاش زمان ارسال کمی سریع‌تر باشه.»",
    star: 4,
  },
  {
    id: 2,
    name: "محمدرضا زمانی",
    message: "«بهترین قهوه عربیکایی که تا حالا خریدم! حتماً دوباره سفارش میدم.»",
    star: 5,
  },
  {
    id: 3,
    name: "نگین قربانی",
    message: "«طعم خوب بود ولی کمی تلخی‌اش بیشتر از حد انتظارم بود. بسته‌بندی عالی بود.»",
    star: 3,
  },
  {
    id: 4,
    name: "پیمان توسلی",
    message: "«عالی عالی عالی! خیلی حرفه‌ای آسیاب شده بود و عطرش کل خونه رو برداشته بود.»",
    star: 5,
  },
];


  return (
    <div
      style={{
        padding: "40px 0",
        display: "flex",
        justifyContent: "center",
        marginBottom: "200px",
      }}
    >
      <motion.h1
        className=" absolute -mt-25 text-3xl text-[#ffffff] border-b-white border-b-2 pb-10"
        whileInView={{scale:0.7}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        نظر کاربران
      </motion.h1>
      <div
        style={{
          width: "90%",
          background: "#e5a06c",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className=" max-[1024px]:w-screen p-2"
      >
        <Swiper
        
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".btn-next1",
            prevEl: ".btn-prev1",
          }}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          loop={true}
          style={{ padding: "10px" }}
        >
          {items.map((item , index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                 initial={{ x: 10  , opacity:0}}
                 whileInView={{ x: 0 , opacity:1}}
                 transition={{duration:0.5 , delay:0 * index}}
                 viewport={{once:true}}
                className="
                 w-[480px]
                 h-[200px]

                 max-[1024px]:w-[80%] max-[640px]:w-[95%]
               "
                style={{
                  background: "#234b5a",
                  borderRadius: "10px",
                  padding: "20px",
                  textAlign: "center",
                  justifySelf: "center",
                  flexWrap: "wrap",
                  color: "white",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
              >
                <span
                  key={item.id}
                  className=" flex  gap-3 items-start max-[640px]:scale-80 max-[640px]:-ml-5 w-50 absolute"
                >
                  {item.star == 1 ? (
                    <>
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                    </>
                  ) : (
                    ""
                  )}
                  {item.star == 2 ? (
                    <>
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                    </>
                  ) : (
                    ""
                  )}
                  {item.star == 3 ? (
                    <>
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                    </>
                  ) : (
                    ""
                  )}
                  {item.star == 4 ? (
                    <>
                      <PiCoffeeBeanBold size={20} color={"##EDEDED"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                    </>
                  ) : (
                    ""
                  )}
                  {item.star == 5 ? (
                    <>
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                      <PiCoffeeBeanBold size={20} color={"#E8A470"} />
                    </>
                  ) : (
                    ""
                  )}
                </span>

                <div className="justify-self-end ">
                  <h1 className="justify-self-end justify-end text-[#ffffff] -mt-1 text-xl max-[640px]:text-[15px]">
                    {item.name}
                  </h1>
                </div>
                <div className=" flex h-20 justify-center mt-5">
                  <p
                    style={{ direction: "rtl" }}
                    className=" flex text-right text-[#d2d2d2]  sm:text-sm md:text-[18px] "
                  >
                    {item.message}
                  </p>
                </div>
                <div className=" flex gap-1 text-sm  text-gray-400 justify-center justify-self-center mt-3   absolute w-auto h-auto items-end ">
                  <div>از 5</div>
                  {item.star}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          <button
            className="btn-prev1 max-[1024px]:hidden absolute ml-2 left-0 top-1/2 -translate-y-1/2 outline-none
             w-10 h-10  bg-[#234b5a]/90 backdrop-blur-sm text-[#E8A470]  rounded-md
             flex items-center justify-center z-30"
          >
            ◀
          </button>

          <button
            className="btn-next1 max-[1024px]:hidden absolute mr-2 right-0 top-1/2 -translate-y-1/2
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
export default Comments;
