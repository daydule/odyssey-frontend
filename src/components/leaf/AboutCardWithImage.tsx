export type AboutCardWithImageProps = {
  imagePath: string;
  title: string;
  text: string;
  isImageLeft?: boolean;
};

export const AboutCardWithImage = (props: AboutCardWithImageProps) => {
  // TODO: スマホ表示の時に画像が上に表示されるようにする
  // TODO: テキストが長すぎる時に枠を大きくする（画像の表示も変にならないようにする）

  const getImageArea = () => {
    return (
      <div className='w-full text-center md:w-1/2' data-testid='AboutCardWithImage_ImageArea'>
        <img
          className='h-full w-full rounded-t-3xl bg-gray-300 object-cover md:rounded-[50px]'
          src={props.imagePath}
          alt='説明画像'
        />
      </div>
    );
  };
  const getTextArea = () => {
    return (
      <div className='p-4 text-center md:w-1/2 md:p-12' data-testid='AboutCardWithImage_TextArea'>
        <p className='text-xl'>{props.title}</p>
        <p className='mt-4 text-lg md:mt-12'>{props.text}</p>
      </div>
    );
  };
  const getRenderComponent = () => {
    return props.isImageLeft ? (
      <>
        {getImageArea()}
        {getTextArea()}
      </>
    ) : (
      <>
        {getTextArea()}
        {getImageArea()}
      </>
    );
  };

  return (
    <div
      className='rounded-b-3xl border shadow-lg md:flex md:h-[384px] md:rounded-[50px] lg:w-[1024px]'
      data-testid='AboutCardWithImage'
    >
      {getRenderComponent()}
    </div>
  );
};
