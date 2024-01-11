import { AboutCardWithImageProps } from '../../type/AboutCardWithImageProps';

export const AboutCardWithImageLeft = (props: AboutCardWithImageProps) => {
  // TODO: テキストが長すぎる時に枠を大きくする（画像の表示も変にならないようにする）

  return (
    <div
      className='flex flex-col rounded-b-3xl border shadow-lg md:h-[384px] md:flex-row md:rounded-[50px] lg:w-[1024px]'
      data-testid='AboutCardWithImage'
    >
      <div className='w-full text-center md:w-1/2' data-testid='AboutCardWithImage_ImageArea'>
        <img
          className='h-full w-full rounded-t-3xl bg-gray-300 object-cover md:rounded-[50px]'
          src={props.imagePath}
          alt='説明画像'
        />
      </div>
      <div className='p-4 text-center md:w-1/2 md:p-12' data-testid='AboutCardWithImage_TextArea'>
        <p className='text-xl'>{props.title}</p>
        <p className='mt-4 text-lg md:mt-12'>{props.text}</p>
      </div>
    </div>
  );
};
