import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ForgotPassword() {
  return (
    <>
      {/* بک‌گراند */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex min-h-full w-100 max-w-[80vw] justify-self-center m-auto rounded-2xl flex-col justify-center px-6 py-5 items-center lg:px-8 mb-30 mt-30 lg:mt-16 backdrop-blur-2xl bg-[radial-gradient(circle_at_top,#FFFFFF27,transparent)] border border-[#969696]"
        style={{ direction: "rtl" }}
      >
        {/* تیتر */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="sm:mx-auto flex justify-self-center sm:max-w-sm lg:w-30 md:w-30 sm:w-30"
        >
          <h2 className="mt-6 text-center text-xl/9 font-bold tracking-tight text-white border-b border-[#E8A470]">
            فراموشی رمز
          </h2>
        </motion.div>

        {/* فرم */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 1.1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <form action="#" method="POST" className="space-y-6">
            {/* شماره */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm/6 font-medium text-gray-100"
              >
                <span className="border-b border-[#E8A470]">شماره</span>
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  autoComplete="email"
                  placeholder="شماره تلفن خود را وارد کنید"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus-visible:outline-[#ffffff] sm:text-sm/6"
                />
              </div>
            </div>

            {/* دکمه ارسال */}
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 1.1 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                type="submit"
                className="flex w-full cursor-pointer justify-center rounded-md bg-[#E8A470] px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-[#ffc089] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffffff]"
              >
                ارسال لینک بازیابی
              </button>
            </motion.div>
          </form>

          {/* لینک بازگشت */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 text-center text-sm/6 text-gray-400"
          >
            <Link
              to={"/Login"}
              className="font-semibold text-[#E8A470] hover:text-[#e2b593]"
            >
              بازگشت به ورود
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}

export default ForgotPassword;
