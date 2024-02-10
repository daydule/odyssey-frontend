import { Footer } from '@/components/leaf/Footer';
import { Header } from '@/components/leaf/Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='no-scrollbar w-full overflow-auto bg-about-page-image bg-cover'>
      <header className='fixed z-50 h-20 w-full'>
        <Header />
      </header>
      <div className='relative mt-20 box-border min-h-[calc(100vh-5rem)] pb-8'>
        <section className='py-20'>{children}</section>
        <footer className='absolute bottom-0 w-full'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
