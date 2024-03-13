'use client';

import { useRouter, usePathname } from 'next/navigation';
import { isMobile } from 'react-device-detect';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const needsAboutLink = !isMobile && pathname !== '/about';
  return (
    <div className='flex h-20 w-full items-center bg-gray-100 py-4'>
      <div
        className='mx-4 h-20 cursor-pointer font-medium md:mx-8'
        onClick={() => !isMobile && router.push('/main')}
        data-testid='Header_Logo'
      >
        <img className='h-full w-auto object-contain' src={'/images/header_logo.png'} alt='ヘッダーロゴ画像' />
      </div>
      {needsAboutLink && (
        <a
          className='ml-auto mr-4 cursor-pointer font-medium md:mr-8'
          onClick={() => router.push('/about')}
          data-testid='Header_About_Link'
          title='About'
        >
          About
        </a>
      )}
    </div>
  );
};
