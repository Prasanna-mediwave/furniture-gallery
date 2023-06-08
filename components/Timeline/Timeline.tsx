import { TimelineData } from "@/assest/ProductDetial";
import React, { useState } from "react";

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index: any) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <div className=" flex mb-10 mt-[50px] w-[87%] ml-auto overflow-auto">
        <div className="new" />
        {TimelineData.map((data, index) => (
          <div className="flex w-fit" key={data.id}>
            <div className="w-[320px] h-[526px] relative">
              <div>
                <p>{data.year}</p>
                <p>{data.title}</p>
              </div>
              <div className="flex items-center">
                <div className=" w-10 h-10 rounded-full bg-sandleYellow/50 flex justify-center items-center">
                  <div className="w-[26px] h-[26px] rounded-full bg-sandleYellow" />
                </div>
                <div className=" w-[90%] border-2 border-solid border-primaryContent" />
              </div>
              <div className="w-[232px]">
                {index === expandedIndex
                  ? data.detials
                  : `${data.detials.substring(0, 250)}${
                      data.detials.length > 250 ? "..." : ""
                    }`}
                <br />
                <button className="add-btn" onClick={() => toggleExpand(index)}>
                  {index === expandedIndex
                    ? "Shrink"
                    : data.detials.length > 250
                    ? "Expand"
                    : ""}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
