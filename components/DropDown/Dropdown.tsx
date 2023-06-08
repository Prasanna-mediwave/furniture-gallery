import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowIcon } from "@/assest/icons/DropArrow";

interface DropdownProps {}
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
export const Dropdown: React.FC<DropdownProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu"
    >
      <motion.button
        className="menu-btn"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Sort by
        <div className="ml-[30px]">
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <ArrowIcon />
          </motion.div>
        </div>
      </motion.button>
      <motion.ul
        className="dropdown-container"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="dropdown-list" variants={itemVariants}>
          Price: Low to High
        </motion.li>
        <motion.li className="dropdown-list" variants={itemVariants}>
          Price: High to Low
        </motion.li>
        <motion.li className="dropdown-list" variants={itemVariants}>
          Avg. Customer Review
        </motion.li>
        <motion.li className="dropdown-list" variants={itemVariants}>
          Newest Arrivals{" "}
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
