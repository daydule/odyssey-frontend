import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  children: ReactNode;
  title: string;
  headerBgColor: `bg-${string}`;
};

const MainCard = ({ children, title, headerBgColor }: Props) => {
  const headerSectionBaseClass = 'flex h-[45px] w-full items-center justify-center rounded-t-[50px]';
  const headerSectionClass = twMerge(headerSectionBaseClass, headerBgColor);

  return (
    <article className='flex h-[580px] w-[330px] flex-col rounded-[50px] bg-[#FFFFFF] text-[#505050] shadow-[0px_0px_10px_5px_rgba(0,0,0,0.25)]'>
      <section className={headerSectionClass}>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='13' viewBox='0 0 12 13' fill='none'>
          <circle cx='6' cy='6.29102' r='6' fill='white' />
        </svg>
        <h2 className='mx-[10px]' data-testid='MainCard_Title'>
          {title}
        </h2>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='13' viewBox='0 0 12 13' fill='none'>
          <circle cx='6' cy='6.29102' r='6' fill='white' />
        </svg>
      </section>
      <section className='flex h-[535px] w-full items-center justify-center p-[30px]' data-testid='MainCard_Children'>
        {children}
      </section>
    </article>
  );
};

export default MainCard;
