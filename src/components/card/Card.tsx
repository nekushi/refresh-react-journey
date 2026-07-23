import "./Card.css";

import type { TypeCardData } from "../../pages/menu/get-images/data";

export default function ImageCard({ cardData }: { cardData: TypeCardData }) {
  return (
    <div className="card-container">
      <img
        key={cardData.id}
        src={cardData.img_url}
        alt={cardData.title}
        className="get-images-img"
      />
      <h2 className="card-title">{cardData.title}</h2>
      <p className="card-caption">{cardData.caption}</p>
    </div>
  );
}
