// GalleryPage.tsx
import React from "react";

import { motion } from 'framer-motion';

type GalleryItem = {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
};

const galleryItems: GalleryItem[] = [
  {
    category: "قهوه",
    title: "اسپرسو در نور صبحگاهی",
    description: "فنجان اسپرسو با بخار لطیف و عطر دلنشین",
    imageUrl: "src/assets/images/mornning.png",
  },
  {
    category: "دسر",
    title: "کیک شکلاتی",
    description: "کیک شکلاتی با لایه‌های خامه و دانه‌های قهوه",
    imageUrl: "src/assets/images/cakechocolate.png",
  },
  {
    category: "قهوه",
    title: "لاته سرد",
    description: "لیوان بلند لاته با یخ و خامه",
    imageUrl: "src/assets/images/icelatte.png",
  },
  {
    category: "میان وعده",
    title: "سالاد میوه",
    description: "سالاد میوه تازه در کاسه شیشه‌ای روی میز چوبی با نور ملایم",
    imageUrl: "src/assets/images/fresh_fruit.png",
  },
];
const GalleryPage: React.FC = () => {
  return (
    <>
      <motion.h1
        className="text-3xl font-bold text-center mt-20 mb-8 max-[1024px]:mt-40"
        initial={{y:-20 , opacity:0}}
        animate={{y:0 , opacity:1}}
        
        transition={{duration:1 , ease:'easeInOut'}}
      >
        <h1 className=" border-b-2 border-white w-20 pb-1 flex justify-self-center justify-center text-center">گالری</h1>
      </motion.h1>
      <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6" style={{direction:'rtl'}}>
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] rounded-lg overflow-hidden shadow-lg"

            initial={{y:-20 , opacity:0}}
            animate={{y:0 , opacity:1}}
            transition={{duration:1 , delay: index * 0.2}}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-peach-light">{item.description}</p>
              <span className="block mt-2 text-xs text-peach-dark">
                دسته: {item.category}
              </span>
            </div>
          </motion.div>
        ))}
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default GalleryPage;
