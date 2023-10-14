type Props = {
  text: string;
};

export const AboutCardWithText = (props: Props) => {
  return (
    <div
      className='flex min-h-[300px] w-full rounded-[50px] border px-8 py-12 text-center shadow-lg lg:w-[1024px] lg:px-20'
      data-testid='AboutCardWithText'
    >
      <p className='text-lg'>{props.text}</p>
    </div>
  );
};
