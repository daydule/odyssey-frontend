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
    <div className='flex'>
      <div className='mr-4 h-28 w-28'>
        <img className='h-full w-full rounded-lg object-contain ' src={commodity.imagePath} alt={commodity.altText} />
      </div>
      <div className='relative h-28 w-36'>
        <p className='mt-4 line-clamp-2 w-full'>{commodity.title}</p>
        <p className='absolute bottom-0 right-0 mb-3'>¥{commodity.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CommodityCard;
