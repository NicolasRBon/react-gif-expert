import config from "../config/config"

export const getGifs = async(category, limit = 20) => {

    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${config.api_key}&q=${category}&limit=${limit}`)
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}