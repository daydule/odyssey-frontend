import { Footer } from '@/components/leaf/Footer';
import { Header } from '@/components/leaf/Header';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='no-scrollbar w-full overflow-auto bg-about-page-image bg-cover'>
      <header className='fixed h-20 w-full'>
        <Header />
      </header>
      <div className='h-screen pt-20'>
        <section className='py-20'>{children}</section>
        <footer className='mt-20 w-full'>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
