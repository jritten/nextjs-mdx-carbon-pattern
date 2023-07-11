import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Create Next App'; // Replace with the desired title for your app
  }, []);

  return (
    <>
      <Head>
        {/* Add any additional head tags or meta data here */}
      </Head>
      <div>{children}</div>
    </>
  );
}
