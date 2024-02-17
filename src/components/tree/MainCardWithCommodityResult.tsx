import { useMemo } from 'react';
import CommodityCard, { type Commodity } from '../leaf/CommodityCard';
import MainCard from './MainCard';

type Props = {
  commodities: Commodity;
};

const MainCardWithCommodityResult = ({ commodities }: Props) => {
  const displayCommodities = useMemo(() => {
    return (
      <ul className='box-content h-full w-full overflow-y-scroll pr-4'>
        {commodities.map((commodity, index) => {
          return (
            <li className='[&:not(:first-child)]:mt-4' key={`commodity_${index}`}>
              <CommodityCard commodity={commodity}></CommodityCard>
            </li>
          );
        })}
      </ul>
    );
  }, [commodities]);

  return (
    <MainCard title='購入可能商品' headerBgColor='bg-yellow-200'>
      <div className='h-full w-full overflow-hidden'>{displayCommodities}</div>
    </MainCard>
  );
};

export default MainCardWithCommodityResult;
