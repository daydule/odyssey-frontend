import { About } from '@/components/forest/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return <About />;
}
