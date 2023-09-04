import AmountDisplay from '@/components/AmountDisplay';

export default function Page() {
  const totalPrice: number = 999999999999999.99;

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='rounded bg-white p-8 shadow-md'>
        <h1 className='mb-4 text-3xl font-semibold'>Welcome to Odyssey</h1>
        <p className='mb-6 text-gray-600'>Embark on a journey to discover the true value of time!</p>
        <AmountDisplay variant='gray' amount={totalPrice} />
        <div className='mx-auto my-6'>
          <button className='rounded bg-slate-50 px-4 py-2 text-gray-600 hover:bg-stone-100'>Get Started</button>
        </div>
      </div>
    </div>
  );
}

// <Circle variant="orange"></Circle>
