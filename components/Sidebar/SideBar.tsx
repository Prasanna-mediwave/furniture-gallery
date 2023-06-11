import React from "react";
import { Button } from "../Button/Button";
import { CloseIcon } from "@/assest/icons/CloseIcon";
import Image from "next/image";
import chair from "../../assest/chair.jpg";

interface SideBarProps {
  scrollHeight: any;
  cartOpen: any;
  setCardOPen: any;
}

export const SideBar: React.FC<SideBarProps> = ({
  scrollHeight,
  cartOpen,
  setCardOPen,
}) => {
  return (
    <div className="side-nav" style={{ height: `${scrollHeight}px` }}>
      <div className="p-7">
        <div className="sideBar">
          <div className="side-bar-header">Your Cart</div>
          <div
            onClick={() => setCardOPen(!cartOpen)}
            className="cursor-pointer"
          >
            <CloseIcon />
          </div>
        </div>
        <p className="num-list">2 item are available</p>
        <p className="add-btn !mb-4 !mt-2 w-fit ml-auto">Clear my cart</p>
        <div className="cart-img">
          <div>
            <Image src={chair} alt="chair" />
          </div>
          <div className="cart-item">
            <h2>Product A</h2>
            <p>$172</p>
            <div>*****</div>
            <div className="sideBar items-baseline">
              <div className="flex">
                <button>-</button>
                <p className="font-style font-light  px-3">1</p>
                <button>+</button>
              </div>
              <div className="add-btn !m-0">Remove</div>
            </div>
          </div>
        </div>
        <div>
          <p className="font-style sub-total">Sub total</p>
          <div>
            <div className="product-wapper">
              <div>Product A</div>
              <div className="sideBar items-center">
                <p>1 x $172</p>
                <p>$172</p>
              </div>
            </div>
          </div>
        </div>
        <div className="font-style font-semibold">
          <p>Tax</p>
          <div className="sideBar font-style price-vat">
            <div>VAT</div>
            <div>$10</div>
          </div>
        </div>
        <div className="sideBar font-style pt-3 pb-16">
          <p className=" font-semibold text-font_sm ">Grand total</p>
          <p className="font-light text-[28px]">$172</p>
        </div>
        <div className=" w-fit ml-auto">
          <Button btnText="Checkout" />
        </div>
      </div>
    </div>
  );
};
