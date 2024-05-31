import { IGetGif, IGif } from "../types/gifs";

  
  export const getGifs = async (category: string): Promise<IGif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=hhXwubsEG5DbZ8U0BbmmxK9XGzIZRhEz&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();
  
    const gifs = data.map( (img: IGetGif) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
  
    console.log(gifs)
    return gifs;
  }