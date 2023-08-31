import AmountDisplay from '@/components/AmountDisplay';

export default function Page() {
    const totalPrice: number = 999999999999999.99;

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-3xl font-semibold mb-4">Welcome to Odyssey</h1>
            <p className="text-gray-600 mb-6">
              Embark on a journey to discover the true value of time!
            </p>
            <AmountDisplay variant="gray" amount={totalPrice}/>
            <div className="mx-auto my-6">
            <button className="bg-white-500 hover:bg-stone-100 text-gray-600 px-4 py-2 rounded">
              Get Started
            </button>
            </div>
          </div>
        </div>
      );
    };

    // <Circle variant="orange"></Circle>