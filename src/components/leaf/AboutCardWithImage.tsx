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
      <div className='w-1/2 text-center' data-testid='AboutCardWithImage_ImageArea'>
        <img className='h-full w-full rounded-[50px] bg-gray-300 object-cover' src={props.imagePath} alt='説明画像' />
      </div>
    );
  };
  const getTextArea = () => {
    return (
      <div className='w-1/2 p-12 text-center' data-testid='AboutCardWithImage_TextArea'>
        <p className='text-xl'>{props.title}</p>
        <p className='mt-12 text-lg'>{props.text}</p>
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
      className='flex h-[384px] w-full rounded-[50px] border shadow-lg lg:w-[1024px]'
      data-testid='AboutCardWithImage'
    >
      {getRenderComponent()}
    </div>
  );
};
