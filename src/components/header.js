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
            className="font-sec sm:p-10 p-4  bg-[url('/header2.jpeg')] bg-cover bg-center text-white font-thin text-[28px] sm:text-[50px]  text-center lg:text-start "
            initial="hidden"
            animate="visible"
            variants={staggerVariants}>
            UNKNOWNEYE
            </motion.h1>

        </>
    )
}