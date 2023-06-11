import { AllProduct, BestProduct, Reviews } from "@/assest/ProductDetial";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Header } from "@/components/Header/Header";
import { Text } from "@/components/Text/Text";
import Image from "next/image";
import dummy from "../assest/dummy.jpg";
import { Dropdown } from "@/components/DropDown/Dropdown";
import { SideArrowIcon } from "@/assest/icons/SideArrow";
import { ArrowIcon } from "@/assest/icons/DropArrow";
import Timeline from "@/components/Timeline/Timeline";
import { useEffect, useRef, useState } from "react";
import { UncoveringPopup } from "@/components/popup/UncoveringPopup";
import { Filter } from "@/components/Filter/Filter";
import { CloseIcon } from "@/assest/icons/CloseIcon";
import chair from "../assest/chair.jpg";

export default function Home() {
  const [review, setReview] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [cartOpen, setCardOPen] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      const { scrollHeight } = elementRef.current;
      setScrollHeight(scrollHeight);
    }
  }, []);

  return (
    <main>
      <Header open={cartOpen} setOpen={setCardOPen} />
      <div ref={elementRef}>
        {cartOpen ? (
          <div className="side-nav" style={{ height: `${scrollHeight}px` }}>
            <div className="p-7">
              <div className="flex justify-between">
                <div className="font-primaryFont font-bold text-font_md">
                  Your Cart
                </div>
                <div
                  onClick={() => setCardOPen(!cartOpen)}
                  className="cursor-pointer"
                >
                  <CloseIcon />
                </div>
              </div>
              <p className="font-light font-secondaryFont text-font_ms">
                2 item are available
              </p>
              <p className="add-btn !mb-4 !mt-2 w-fit ml-auto">Clear my cart</p>
              <div className="cart-img">
                <div>
                  <Image src={chair} alt="chair" />
                </div>
                <div className="cart-item">
                  <h2>Product A</h2>
                  <p>$172</p>
                  <div>*****</div>
                  <div className="flex justify-between items-baseline">
                    <div className="flex">
                      <button>-</button>
                      <p className="font-secondaryFont font-light text-font_sm px-3">
                        1
                      </p>
                      <button>+</button>
                    </div>
                    <div className="add-btn !m-0">Remove</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-secondaryFont font-semibold text-font_sm mt-11">
                  Sub total
                </p>
                <div>
                  <div className="grid grid-cols-2 font-secondaryFont font-light text-font_sm pt-3 pb-5 border-b border-dashed border-[#cccccc]">
                    <div>Product A</div>
                    <div className="flex justify-between items-center">
                      <p>1 x $172</p>
                      <p>$172</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-secondaryFont font-semibold text-font_sm">
                <p>Tax</p>
                <div className="flex justify-between font-secondaryFont font-light text-font_sm pt-3 pb-5 border-b border-dashed border-[#cccccc]">
                  <div>VAT</div>
                  <div>$10</div>
                </div>
              </div>
              <div className="flex justify-between font-secondaryFont pt-3 pb-16">
                <p className=" font-semibold text-font_sm ">Grand total</p>
                <p className="font-light text-[28px]">$172</p>
              </div>
              <div className=" w-fit ml-auto">
                <Button btnText="Checkout" />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <section className="top-container">
          <div>
            <Text
              heading="The best furniture store in town"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              textCenter={false}
              reSize
            />
            <div className="my-6">
              <Button btnText="Explore" />
            </div>
          </div>
          <div>
            <Image src={dummy} alt="dummy" height={580} className="w-full" />
          </div>
        </section>
        <div className=" mb-[88px]">
          <Text
            heading="Best of the best"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textCenter={true}
          />
        </div>
        <section className="card-container">
          <div className="card-length">
            <Card product={BestProduct} />
          </div>
        </section>
        <section className="gallery-container">
          <div className="gallery-text">
            <Text
              heading="See happy customer experience"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              textCenter={false}
            />
          </div>
          <div className="gallery-image">
            {Reviews.map((img) => (
              <Image
                src={img.img}
                alt={img.alt}
                key={img.id}
                className="rounded-[10px] cursor-pointer"
                onClick={() => (setReview(img), setIsOpen(true))}
              />
            ))}
          </div>
          {isOpen === true ? (
            <UncoveringPopup data={review} onClose={setIsOpen} open={isOpen} />
          ) : (
            ""
          )}
        </section>
        <div className="md:my-[88px] my-8">
          <Text
            heading="The little steps we took"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textCenter={true}
          />
        </div>
        <Timeline />
        <div className="product-container">
          <div>
            <Text
              heading="All furnitures"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              textCenter={true}
            />
          </div>
          <div className="card-container ">
            <div className="relative">
              <div className="search-item">
                <input
                  type="search"
                  placeholder="Search for your perfect furniture"
                />
                <Button btnText="Search" />
              </div>
              <div className="sort-by">
                <Dropdown />
              </div>
            </div>
            <button
              type="button"
              className="add-btn"
              onClick={() => setIsAdd(true)}
            >
              Add fliters
            </button>
            {isAdd === true ? <Filter onClose={setIsAdd} open={isAdd} /> : ""}
            <div className="all-product">
              <Card product={AllProduct} />
            </div>
            <div className="flex justify-between items-center mt-16 pb-16">
              <div className="flex justify-between w-64">
                <div className=" flex justify-center items-center w-10 h-10 bg-sandleYellow/50 rounded-[10px]">
                  <SideArrowIcon />
                </div>
                <div className=" flex gap-2">
                  <p className=" flex justify-center items-center w-10 h-10 bg-sandleYellow rounded-[10px]">
                    1
                  </p>
                  <p className=" flex justify-center items-center w-10 h-10 bg- rounded-[10px] bg-primaryBG border border-solid border-[#EAEAEA]">
                    2
                  </p>
                </div>
                <div className=" flex justify-center items-center w-10 h-10 bg-sandleYellow rounded-[10px] rotate-180">
                  <SideArrowIcon />
                </div>
              </div>
              <div className=" flex justify-center items-center bg-grey px-4 py-[14px] rounded-3xl">
                <div className="pr-[20px] font-primaryFont font-medium text-base">
                  10 per page
                </div>
                <div>
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
