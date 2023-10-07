import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  return (
    <div className='flex w-full items-center bg-light-gray py-4'>
      <div
        className='mx-4 cursor-pointer font-medium md:mx-8'
        onClick={() => router.push('/main')}
        data-testid='Header_Logo'
      >
        <img src={'/images/header_logo.png'} alt='ヘッダーロゴ画像' />
      </div>
      <a
        className='ml-auto mr-4 cursor-pointer font-medium md:mr-8'
        onClick={() => router.push('/about')}
        data-testid='Header_About_Link'
      >
        About
      </a>
    </div>
  );
};
