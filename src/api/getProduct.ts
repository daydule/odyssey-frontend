import { rakutenApiClient } from '../lib/axios';

type GetProductApiItem = {
  itemName: string;
  itemPrice: number;
  mediumImageUrls: string[];
  itemUrl: string;
};

type GetProductApiResponse = {
  Items: GetProductApiItem[];
};

export type Product = {
  name: string;
  price: number;
  imagePath: string;
  altText: string;
  title: string;
  url: string;
};

export const getProducts = async (options?: Record<string, string | number>): Promise<Product[]> => {
  const result: GetProductApiResponse = await rakutenApiClient.get('/IchibaItem/Search/20220601', {
    params: {
      ...options,
      formatVersion: 2,
    },
  });

  return result.Items.map((item: GetProductApiItem) => {
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
