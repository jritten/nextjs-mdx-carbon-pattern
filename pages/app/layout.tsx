import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.title = metadata.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', metadata.description);
    }
  }, [router.route]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
}
