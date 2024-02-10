export type AboutCardWitTextProps = {
  text: string;
};

export const AboutCardWithText = (props: AboutCardWitTextProps) => {
  return (
    <div
      className='flex min-h-[300px] w-full rounded-3xl border px-8 py-12 text-center shadow-lg md:rounded-[50px] lg:w-[1024px] lg:px-20'
      data-testid='AboutCardWithText'
    >
      <p className='text-lg'>{props.text}</p>
    </div>
  );
};
