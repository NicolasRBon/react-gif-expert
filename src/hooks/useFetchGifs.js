import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const getImages = async() => {
       getGifs(category, 10)
       .then(newImages => setImages(newImages))
       
    }

    useEffect(() => {
        getImages();
    }, [])
  
    return {
        images,
        isLoading: !images.length
    }
}
