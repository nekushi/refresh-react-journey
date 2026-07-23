export const initialCardData: TypeCardData[] = [
  {
    id: 0,
    title: "Kirby",
    caption: "round",
    img_url: "/imgs/kirby.jpg",
  },
  {
    id: 1,
    title: "Robin",
    caption: "ganda",
    img_url: "/imgs/robin.png",
  },
  {
    id: 2,
    title: "Kaoruko",
    caption: "cute",
    img_url: "/imgs/stare.png",
  },
];

export type TypeCardData = {
  id: number;
  title: string;
  caption: string;
  img_url: string;
};
