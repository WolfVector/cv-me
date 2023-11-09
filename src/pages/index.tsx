import type { NextPage } from 'next';
import Head from 'next/head';
import HomeLayout from 'src/modules/home/HomeLayout';
import BuilderLayout from 'src/modules/builder/BuilderLayout';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CV Me Please</title>
        <meta name="description" content="Single Page Resume Builder" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default HomePage;
