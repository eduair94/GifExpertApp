import { GifItemInterface } from "../interfaces/GifGrid.interface";

export const GifItem = ({ url, title }: GifItemInterface) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
