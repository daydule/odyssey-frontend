import { Metadata } from 'next';
import Main from '@/components/forest/Main';

export const metadata: Metadata = {
  title: 'Main',
};

export default function Page() {
  return <Main />;
}
