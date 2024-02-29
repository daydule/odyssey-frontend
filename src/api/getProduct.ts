import { rakutenApiClient } from '../lib/axios';

export const getProducts = async (options?: Record<string, string | number>): Promise<any> => {
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
    };
  });
};
