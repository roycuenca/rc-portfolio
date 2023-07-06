import Head from 'next/head';
import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import Layout from '../components/Layout/Layout';

const about = () => {
  return (
    <>
      <Head>
        <title>Roy cuenca | About</title>

        <meta
          name="description"
          content="description about Roy Cuenca developer"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout customContainerStyles="pt-16">
          <AnimatedText
            text="Inspired by Passion, Guided by Purpose."
            customTextStyles="text-center !text-6xl"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
