import { HalfStarIcon } from "@/assest/icons/HalfStar";
import QuotesIcon from "@/assest/icons/QuotesIcon";
import { StarIcon } from "@/assest/icons/StarIcon";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React from "react";

interface UncoveringPopupProps {
  data: any;
  onClose: any;
  open: boolean;
}

export const UncoveringPopup: React.FC<UncoveringPopupProps> = ({
  data,
  onClose,
  open,
}) => {
  const closeModal = () => {
    onClose(false);
  };
  const rating = data.rating;

  const integerPart = Math.floor(rating);
  const fractionalPart = rating - integerPart;
  return (
    <>
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
                className="gallery-popup"
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                exit={{ y: "100vh" }}
              >
                <div className="close-btn">
                  <button onClick={closeModal}>+</button>
                </div>
                <div className="popup-image">
                  <Image src={data.img} alt={data.alt} />
                </div>
                <div className="popup-details">{data.review}</div>
                <div className="flex justify-between">
                  <div className="detail-wapper">
                    <h2>{data.name}</h2>
                    <p>{data.role}</p>
                    <div className="flex">
                      {[...Array(integerPart)].map((_, index) => (
                        <StarIcon key={index} />
                      ))}
                      {fractionalPart > 0 && <HalfStarIcon key={integerPart} />}
                    </div>
                  </div>
                  <div>
                    <QuotesIcon />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
