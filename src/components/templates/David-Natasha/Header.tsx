"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence, Variants } from "framer-motion";

type LinkMenu = {
  name: string;
  link: string;
};

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const linkMenu: LinkMenu[] = [
    { name: "HOME", link: "#hero" },
    { name: "PROFILE", link: "#profile" },
    { name: "DATE", link: "#countdown" },
    { name: "EVENT DETAIL", link: "#eventorder" },
    { name: "GALLERY", link: "#gallery" },
    { name: "RSVP", link: "#rsvp" },
    { name: "GIFT", link: "#gift" },
    { name: "WISHES", link: "#wishes" },
  ];

  const container: Variants = {
    hidden: {
      transition: {
        staggerChildren: 0.08,
        staggerDirection: -1,
      },
    },
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -10, skewX: -10 },
    show: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <div
      className="sticky top-0 left-0 w-full h-0 z-[99]"
      style={{ overflow: "visible" }}
    >
      <div className="absolute top-0 left-0 w-full px-4 py-3">
        {/* HAMBURGER */}
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="text-[#C3C3C3] text-[28px]"
          >
            <FiMenu />
          </motion.button>
        )}

        {/* DROPDOWN */}
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{ originX: 0, originY: 0 }}
              className="absolute top-[12px] left-[18px] bg-[#7B7B7B]/70 pt-[20px] pb-[31px] px-5 text-white w-[255px]"
            >
              {/* CLOSE X */}
              <motion.button
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-[-8px] left-[7px]"
              >
                <p className="text-[30px] text-white font-ibm font-light">x</p>
              </motion.button>

              {/* MENU */}
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="pt-3.5 pl-3 space-y-1.5 text-[12px] font-sans text-white font-medium flex flex-col"
              >
                {linkMenu.map((menu: LinkMenu) => (
                  <motion.a
                    key={menu.name}
                    href={menu.link}
                    variants={itemVariants}
                    onClick={() => setTimeout(() => setOpen(false), 200)}
                    className="group relative flex items-center cursor-pointer"
                  >
                    <span className="absolute left-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100">
                      →
                    </span>
                    <span className="transition-all duration-300 ease-out group-hover:translate-x-[22px]">
                      {menu.name}
                    </span>
                  </motion.a>
                ))}
              </motion.ul>

              {/* TEXT BAWAH */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="pt-[20px] pl-3 text-[8px] font-sans font-light pb-2 tracking-wide"
              >
                Select a section above to continue
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
