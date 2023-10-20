import { Giphy } from "../interfaces/GifGrid.interface";

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Ildw5ulc5NM69LKY3b0lrr94xK90fRuS&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data }: Giphy = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log("Gifs", gifs);
  return gifs;
};