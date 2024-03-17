import { rakutenApiClient } from '../lib/axios';

type GetProductResponse = {
  Items: {
    itemName: string;
    itemPrice: number;
    mediumImageUrls: string[];
    itemUrl: string;
  }[];
};

export const getProducts = async (options?: Record<string, string | number>): Promise<GetProductResponse> => {
  const result: any = await rakutenApiClient.get('/IchibaItem/Search/20220601', {
    params: {
      ...options,
      formatVersion: 2,
    },
  });

  return result.Items.map((item: any) => {
    return {
      name: item.itemName,
      price: item.itemPrice,
      imagePath: item.mediumImageUrls[0],
      altText: item.itemName,
      title: item.itemName,
      url: item.itemUrl,
    };
  });
};
