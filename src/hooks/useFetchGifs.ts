import { useEffect, useState } from "react";
import { IGif } from "../types/gifs";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category: string) => {

    const [images, setImages] = useState<IGif[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
    getImages();
    }, [] );


    return {
        images,
        isLoading,
    }
}
