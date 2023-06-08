import { AllProduct, BestProduct, Reviews } from "@/assest/ProductDetial";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import { Text } from "@/components/Text/Text";
import Image from "next/image";
import dummy from "../assest/dummy.jpg";
import { Dropdown } from "@/components/DropDown/Dropdown";
import { SideArrowIcon } from "@/assest/icons/SideArrow";
import { ArrowIcon } from "@/assest/icons/DropArrow";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="top-container">
        <div>
          <Text
            heading="The best furniture store in town"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            textCenter={false}
            reSize
          />
          <div className="mt-6">
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
              width={162}
              height={162}
              key={img.id}
              className="rounded-[10px]"
            />
          ))}
        </div>
      </section>
      <div className=" my-[88px]">
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
          <button type="button" className="add-btn">
            Add fliters
          </button>
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
    </main>
  );
}
