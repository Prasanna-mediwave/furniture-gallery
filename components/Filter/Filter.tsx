import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface FilterProps {
  onClose: any;
  open: any;
}

export const Filter: React.FC<FilterProps> = ({ onClose, open }) => {
  const closeModal = () => {
    onClose(false);
  };
  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={closeModal}
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: "100vh",
            }}
          >
            <motion.div
              className="gallery-popup p-0"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
            >
              <div className="filter-header">
                <h2>Filter and find your perfect furniture</h2>
                <button onClick={closeModal}>+</button>
              </div>
              <div className=" py-8 px-8">
                <div className="flex justify-between items-baseline">
                  <div>Avaiable tags</div>
                  <div className="add-btn !mb-8 !mt-0 cursor-pointer ">
                    Clear filter
                  </div>
                </div>
                <div>
                  <div></div>
                  <div>Select all</div>
                </div>
                <div></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
