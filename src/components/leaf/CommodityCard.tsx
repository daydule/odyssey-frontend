export type Commodity = {
  imagePath: string;
  altText: string;
  title: string;
  price: number;
};

type Props = {
  commodity: Commodity;
};

const CommodityCard = ({ commodity }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='h-28 w-28'>
        <img className='h-full w-full rounded-lg object-contain ' src={commodity.imagePath} alt={commodity.altText} />
      </div>
      <div>
        <p className='line-clamp-5 text-xs'>{commodity.title}</p>
        <p className='mt-3 text-right text-sm'>¥{commodity.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CommodityCard;
