import { useMemo } from 'react';
import CommodityCard, { type Commodity } from '../leaf/CommodityCard';
import MainCard from './MainCard';

type Props = {
  commodities: Commodity[];
  rotateCard?: () => void;
};

const MainCardWithCommodityResult = ({ commodities, rotateCard }: Props) => {
  const displayCommodities = useMemo(() => {
    return (
      <ul className='box-content h-full w-full overflow-y-scroll pr-4'>
        {commodities.map((commodity, index) => {
          return (
            <li className='[&:not(:first-child)]:mt-6' key={`commodity_${index}`}>
              <CommodityCard commodity={commodity}></CommodityCard>
            </li>
          );
        })}
      </ul>
    );
  }, [commodities]);

  return (
    <MainCard title='Result' headerBgColor='bg-yellow-200' rotateCard={rotateCard}>
      {commodities.length === 0 && (
        <div>
          <p>ここには購入可能な商品が表示されます。</p>
          <br />
          <p>時給や稼働時間を入力後、計算ボタンを押し、得した金額/損した金額を計算しましょう。</p>
        </div>
      )}
      {commodities.length > 0 && <div className='h-full w-full overflow-hidden'>{displayCommodities}</div>}
    </MainCard>
  );
};

export default MainCardWithCommodityResult;
