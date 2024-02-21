import Main from '@/components/forest/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Main',
};

export default function Page() {
  return <Main />;
}
