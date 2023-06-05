import Link from "next/link"
import { motion } from "framer-motion"

export default function Header () {
    const staggerVariants = {
        visible: {
          opacity: 1,
        },
        hidden: {
          opacity: 0,
        },
      };
    return (
        <>
            <motion.h1 
            className="font-sec bg-[url('/header3.jpeg')] bg-cover bg-center  "
            initial="hidden"
            animate="visible"
            variants={staggerVariants}>
            <div class="w-full h-full flex sm:p-10 p-4  justify-center sm:justify-start text-white font-thin text-[28px] sm:text-[50px]  text-center lg:text-start  backdrop-brightness-50">
            UNKNOWNEYE

            </div>
            </motion.h1>

        </>
    )
}