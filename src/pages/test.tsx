import type { NextPage } from 'next';
import Head from 'next/head';
import BuilderLayout from 'src/modules/builder/BuilderLayout';

const Test: NextPage = () => {
  return (
    <div>
      <Head>
        <title>CV Me Please</title>
        <meta name="description" content="CV Me Please" />
        <link rel="icon" type="image/png" href="/icons/resume-icon.png" />
      </Head>

      <BuilderLayout />
    </div>
  );
};

export default Test;
