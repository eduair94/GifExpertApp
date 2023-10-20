import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GifItemInterface } from "../interfaces/GifGrid.interface";

export const useFetchGifs = (category:string) => {

    const [images, setImages] = useState<GifItemInterface[]>([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getImages = async () => {
            const gifs = await getGifs(category);
            setImages(gifs);
            setIsLoading(false);
        };

        getImages();
    }, [category]);


    return  {
        images,
        isLoading
    }
}