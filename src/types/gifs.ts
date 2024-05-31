export interface IGif {
    id: string;
    title: string;
    url: string;
  }

export interface IGetGif {
    id: number;
    title: string;
    images: {
      downsized_medium: {
        url:string;
      }
    };
  }