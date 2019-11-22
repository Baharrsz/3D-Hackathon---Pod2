import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={2}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div className="carousel__container">First card</div>
        <div className="carousel__container">Second card</div>
        <div className="carousel__container">Third card</div>
        <div className="carousel__container">Fourth card</div>
      </ItemsCarousel>
    </div>
  );
};
