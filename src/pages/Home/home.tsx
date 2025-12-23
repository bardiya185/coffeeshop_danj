import { motion } from "framer-motion";
import Categories from "../../Layouts/components/Main/Categories/categories";
import BestSellers from "../../Layouts/components/Main/Bestsellers/bestsellers";
import Comments from "../../Layouts/components/Main/Comments/comments";
import { useEffect, useState } from "react";
function Home() {
  const [Width_Window, setWidth_Window] = useState(window.innerWidth);
  useEffect(() => {
    setInterval(() => {
      setWidth_Window(window.innerWidth);
    }, 500);
  }, []);
  return (
    <>
      <div className="w-7/7 ">
        <div className="max-[1024px]:mt-80">
          <motion.div
            style={{
              boxShadow:
                Width_Window > 1024
                  ? "0px 0px 400px 300px #467DA0FF"
                  : "0px 0px 700px 130px #467DA0FF",
            }}
            className=" max-[1024px]:mt-10 mix-blend-lighten flex justify-center place-items-center  mt-30 absolute justify-self-center  -z-10  w-0 h-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="flex justify-center max-[1024px]:-mt-30 -mt-50 justify-self-center -z-10 absolute object-cover"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
          >
            <img
              className="w-100 max-[1024px]:w-70 max-[1024px]:h-40 max-[1024px]:mr-20 z-0 mr-30 h-70 object-cover"
              src="src/assets/images/coffee_removeback.png"
              alt="coffee"
            />
          </motion.div>
          <motion.div
            className="  max-[1024px]:hidden  flex justify-center mt-30 ml-160 blur-xs justify-self-center -z-10 absolute object-cover"
            animate={{
              x: [20, 10, 5, 20],
              y: [0, 10, 10, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeatType: "loop",
              repeatDelay: 0,
              repeat: Infinity,
            }}
          >
            <motion.img
              className="w-50 max-[1024px]:w-30 max-[1024px]:h-auto scale-90 z-0 max-[1024px]:mr-70 mr-30 -mt-60 h-30 "
              src="src/assets/images/coffee_removeback.png"
              alt="coffee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.p
            style={{ fontFamily: "iran2" }}
            className=" drop-shadow-2xl flex j justify-center justify-self-center mt-70 z-30 text-[#E8A470]  text-5xl max-[1024px]:text-[clamp(30px,2vw,30px)] "
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
          >
            هر فنجان یک لحظه دنج
          </motion.p>
          <motion.p
            style={{ fontFamily: "iran2" }}
            className=" drop-shadow-2xl flex j justify-center justify-self-center mt-5 text-[#E8A470] text-3xl  max-[1024px]:text-[clamp(20px,2vw,20px)]"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
          >
            دنج‌ترین خاطرات با ما ساخته می‌شوند
          </motion.p>
          <div>
            <a href="#categories">
              <motion.button
                style={{ fontFamily: "iran2" }}
                className="flex justify-center cursor-pointer z-20 text-[#2A4759] p-2 rounded-md gap-1 justify-self-center mt-10 bg-amber-50 "
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeInOut" }}
              >
                <span className=" text-[#E8A470]"> دنج </span> شروع تجربه
              </motion.button>
            </a>
          </div>

          <motion.div
            className=" max-[1024px]:hidden  flex justify-center -mt-40 max-[1024px]:mr-110 mr-140 blur-[2px] justify-self-center -z-10 absolute object-cover"
            animate={{
              x: [0, 5, 10, 0],
              y: [20, 10, 5, 20],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeatType: "loop",
              repeatDelay: 0,
              repeat: Infinity,
            }}
          >
            <motion.img
              className="w-50 scale-140 z-0 mr-30 mt-20 h-30 max-[1024px]:h-auto max-[1024px]:w-35 max-[1024px]:ml-10"
              src="src/assets/images/coffee_removeback.png"
              alt="coffee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <Categories />

        <BestSellers />

        <Comments />
      </div>
    </>
  );
}
export default Home;
