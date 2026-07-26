import "./GetImages.css";

import { useOutletContext } from "react-router-dom";
import { initialCardData, type TypeCardData } from "./data";
import { useContext, useState } from "react";
import ImageCard from "../../../components/card/Card";
import { AuthContext } from "../../../contexts/AuthContext";

export default function ImagesPage() {
  const auth = useContext(AuthContext);
  const [cardsData, setCardsData] = useState<TypeCardData[]>(initialCardData);

  const { childrenStyle } = useOutletContext<{
    childrenStyle: React.CSSProperties;
  }>();

  return (
    <div style={childrenStyle} className="get-images-div">
      <h1>Welcome, {auth?.user?.username}. This is images.</h1>
      <div className="get-images-img-layout">
        {cardsData.map((cardData: TypeCardData) => (
          <ImageCard key={cardData.id} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}
