import "./GetImages.css";

import { useOutletContext } from "react-router-dom";
import { initialCardData, type TypeCardData } from "./data";
import { useState } from "react";
import ImageCard from "../../../components/card/Card";

export default function ImagesPage() {
  const [cardsData, setCardsData] = useState<TypeCardData[]>(initialCardData);

  const { childrenStyle } = useOutletContext<{
    childrenStyle: React.CSSProperties;
  }>();

  return (
    <div style={childrenStyle} className="get-images-div">
      <h1>This is images.</h1>
      <div className="get-images-img-layout">
        {cardsData.map((cardData: TypeCardData) => (
          <ImageCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}
