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
      <div className="timeline-container ">
        <div className="timeline-gradient" />
        {TimelineData.map((data, index) => (
          <div className="flex w-fit" key={data.id}>
            <div className="timeline-wapper">
              <div>
                <p className="timeline-year">{data.year}</p>
                <p className="timeline-title">{data.title}</p>
              </div>
              <div className="flex items-center">
                <div className=" cricle-outer">
                  <div className="cricle-inner" />
                </div>
                <div className="timeline" />
              </div>
              <div className="timeline-details">
                {index === expandedIndex
                  ? data.detials
                  : `${data.detials.substring(0, 250)}${
                      data.detials.length > 250 ? "..." : ""
                    }`}
                <br />
                <button
                  className="add-btn btn-expand"
                  onClick={() => toggleExpand(index)}
                >
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
