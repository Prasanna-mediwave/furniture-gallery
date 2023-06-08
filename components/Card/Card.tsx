import { AddIcon } from "@/assest/icons/AddIcon";
import { Fav } from "@/assest/icons/Fav";
import { HalfStarIcon } from "@/assest/icons/HalfStar";
import { StarIcon } from "@/assest/icons/StarIcon";
import { UnFav } from "@/assest/icons/UnFav";
import Image from "next/image";
import React, { useState } from "react";

interface CardProps {
  product: any;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  console.log(product.rating);

  return (
    <>
      {product.map((item: any, index: any) => {
        const rating = item.rating;

        const integerPart = Math.floor(rating);
        const fractionalPart = rating - integerPart;
        return (
          <React.Fragment key={index}>
            <div className="card-container">
              <div className="card-img">
                <Image src={item.img} alt="chair" className="rounded-t-3xl" />
              </div>
              <div className=" p-6">
                <div className="mb-1 card-detial">
                  <div className="product">
                    <h2>{item.title}</h2>
                    <p>${item.price}</p>
                  </div>
                  <div>
                    <AddIcon />
                  </div>
                </div>
                <div className="card-detial">
                  <div className="flex">
                    {[...Array(integerPart)].map((_, index) => (
                      <StarIcon key={index} />
                    ))}

                    {fractionalPart > 0 && <HalfStarIcon key={integerPart} />}
                  </div>
                  <div>{item.fav ? <Fav /> : <UnFav />}</div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};
