import { TbLogin2 } from "react-icons/tb";
import { motion, useAnimation } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const ctrl1 = useAnimation();
  const ctrl2 = useAnimation();
  const [opne_menu, setopen_menu] = useState<boolean>(false);
  const [Width_Window, setWidth_Window] = useState(window.innerWidth);

  const location = useLocation();
  

  useEffect(() => {
    const in1 = setInterval(function () {
      setWidth_Window(window.innerWidth);
    }, 100);

    let mounted = true;

    (async () => {
      // برای شروع مطمئن شو هر دو از opacity:0 شروع می‌کنن
      await ctrl1.set({ opacity: 0 });
      await ctrl2.set({ opacity: 0 });

      while (mounted) {
        // 1) عکس اول ظاهر باشه (فوری) و 2 ثانیه بمونه
        await ctrl1.start({ opacity: 1, transition: { duration: 0.2 } });
        await new Promise((r) => setTimeout(r, 2000));

        // 2) عکس اول محو بشه (1s)
        await ctrl1.start({ opacity: 0, transition: { duration: 1 } });

        // 3) عکس دوم ظاهر بشه (1s برای fade-in) و 2s بمونه
        await ctrl2.start({ opacity: 1, transition: { duration: 1 } });
        await new Promise((r) => setTimeout(r, 2000));

        // 4) عکس دوم محو بشه (1s)
        await ctrl2.start({ opacity: 0, transition: { duration: 1 } });

        // ادامه حلقه (تکرار بی‌نهایت)...
      }
    })();

    return () => {
      mounted = false; // cleanup برای متوقف کردن حلقه هنگام آن‌ماونت شدن
    };
    clearInterval(in1);
  }, [ctrl1, ctrl2]);

  function OpenMenu() {
    if (!opne_menu){
     setopen_menu(true);
     document.body.style.overflow = 'hidden';
    }
      
    else{
       setopen_menu(false);
       document.body.style.overflow = 'auto';
    }
  }

  function closemenu() {
    setopen_menu(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <div
        id="up"
        className=" max-[1024px]:flex hidden justify-center items-center top-0"
      >
        <motion.div
          className="w-auto left-5  absolute top-10 text-xl"
          style={{ fontWeight: "800", fontFamily: "iran2" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          کافه <span className=" text-[#E8A470]">دنج</span>
        </motion.div>
        <motion.img
          src="/images/bean_coffee.png"
          alt="bean"
          className="absolute left-1/2 top-13 transform -translate-x-1/2 -translate-y-1/2 w-30"
          initial={{ opacity: 0 }}
          animate={ctrl1}
          transition={{ duration: 1, delay: 2 }}
          style={{ pointerEvents: "none" }}
        />

        <motion.img
          src="/public/images/coffee_removeback.png"
          alt="copilot"
          className="absolute left-1/2 -ml-3 top-13 transform -translate-x-1/2 -translate-y-1/2 w-25"
          initial={{ opacity: 0 }}
          animate={ctrl2}
          transition={{ duration: 1, delay: 2 }}
          style={{ pointerEvents: "none" }}
        />

        <motion.div
          className=" hidden max-[1024px]:block absolute top-8 right-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button type="button" onClick={OpenMenu}>
            <HiMenu color="#E8A470" size={40} />
          </button>
        </motion.div>
      </div>
      <div
        className=" bg-[#d4d4d483] hidden max-[1024px]:block backdrop-blur-md w-screen h-screen z-50 fixed cursor-crosshair "
        onClick={() => {
          setopen_menu(false);
        }}
        style={{
          right: opne_menu ? "0" : "-140%",
          transition: Width_Window > 1024 ? "0s 0s" : "0.5s 0s",
        }}
      ></div>

      <motion.header
        id="Menu"
        style={{
          right: opne_menu ? "0" : "-70%",
          transition: opne_menu ? "0.5s 0s" : "0s 0s",
        }}
        className="min-[1024px]:flex justify-around max-[1024px]:justify-center 
          max-[1024px]:justify-self-start max-[1024px]:mt-0 
          max-[1024px]:top-0 max-[1024px]:rounded-br-none 
          max-[1024px]:rounded-tr-none w-full items-center 
          max-[1024px]:items-start gap-30 max-[1024px]:gap-5 p-5 
          rounded-md mt-5 flex-wrap bg-[#E8A470] 
          max-[1024px]:fixed max-[1024px]:bg-[#e8a470ec] 
          max-[1024px]:backdrop-blur-xl max-[1024px]:w-50 z-50 max-[1024px]:h-screen max-[1024px]:-right-70  max-[1024px]:overflow-auto max-[1024px]:overflow-x-hidden"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      >
        <motion.p
          style={{ fontWeight: "800", fontFamily: "iran2" }}
          className="text-2xl max-[1024px]:mt-5 flex max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:justify-self-center"
          initial={{ y: -60 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-[#2A4759]">دنج </span>کافه
        </motion.p>
        <nav className=" flex justify-center">
          <ul className=" flex flex-wrap gap-10 max-[1024px]:flex max-[1024px]:justify-center max-[1024px]:gap-8 max-[1024px]:flex-col max-[1024px]:text-center  max-[1024px]:p-10   max-[1024px]:mb-0">
            <Link to={"/"}>
              <motion.li
                onClick={closemenu}
                className={
                  location.pathname === "/"
                    ? " text-[#544e47]  max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1 border border-transparent border-b-white"
                    : " hover:text-[#2A4759] cursor-pointer  transition-colors   max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1"
                }
                initial={{ y: -80, opacity: "0%" }}
                animate={{ y: 2, opacity: "100%" }}
                   transition={{ duration: 0.5, delay: 0.8 }}
              >
                خانه
              </motion.li>
            </Link>
            <Link to={"/Menu"}>
              <motion.li
                onClick={closemenu}
                className={
                  location.pathname === "/Menu"
                    ? " text-[#544e47]  max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1 border border-transparent border-b-white"
                    : " hover:text-[#2A4759] cursor-pointer  transition-colors   max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1"
                }
                initial={{ y: -80, opacity: "0%" }}
                animate={{ y: 0, opacity: "100%" }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                منو
              </motion.li>
            </Link>
            <Link to="/Gallery">
              <motion.li
                onClick={closemenu}
                className={
                  location.pathname === "/Gallery"
                    ? " text-[#544e47]  max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1 border border-transparent border-b-white"
                    : " hover:text-[#2A4759] cursor-pointer  transition-colors   max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1"
                }
                initial={{ y: -80, opacity: "0%" }}
                animate={{ y: 0, opacity: "100%" }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                گالری
              </motion.li>
            </Link>
            <Link to={"/AboutUs"}>
              <motion.li
                onClick={closemenu}
                className={
                  location.pathname === "/AboutUs"
                    ? " text-[#544e47]  max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1 border border-transparent border-b-white"
                    : " hover:text-[#2A4759] cursor-pointer  transition-colors   max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1"
                }
                initial={{ y: -80, opacity: "0%" }}
                animate={{ y: 0, opacity: "100%" }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                درباره ما
              </motion.li>
            </Link>
            <Link to={"/Contact"}>
              <motion.li
                onClick={closemenu}
                className={
                  location.pathname === "/Contact"
                    ? " text-[#544e47]  max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1 border border-transparent border-b-white"
                    : " hover:text-[#2A4759] cursor-pointer  transition-colors   max-[1024px]:bg-[#ffffff39] max-[1024px]:backdrop:blur-2xl max-[1024px]:w-30 max-[1024px]:rounded-sm max-[1024px]:p-1"
                }
                initial={{ y: -80, opacity: "0%" }}
                animate={{ y: 0, opacity: "100%" }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                تماس با ما
              </motion.li>
            </Link>
          </ul>
        </nav>
        <Link to={"/Login"}>
          <motion.div
               onClick={closemenu}
            className="self-end mt-5 mb-5 cursor-pointer scale-170 max-[1024px]:flex max-[1024px]:justify-self-center max-[1024px]:justify-center "
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className=" flex ">
              <span className={           location.pathname === "/Login" ||
                  location.pathname === "/Regester" ||
                  location.pathname === "/ForgatPassword"
                    ? "text-[#544e47] text-[10px]"
                    : " text-[10px] text-[#2A4759]"}>ورود</span>
              <TbLogin2
                color={
                  location.pathname === "/Login" ||
                  location.pathname === "/Regester" ||
                  location.pathname === "/ForgatPassword"
                    ? "#544e47"
                    : "#2A4759"
                }
              />
            </div>
          </motion.div>
        </Link>
      </motion.header>
    </>
  );
}
export default Header;
