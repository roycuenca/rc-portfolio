import Head from 'next/head';
import React from 'react';
import AnimatedText from '../components/AnimatedText/AnimatedText';
import Layout from '../components/Layout/Layout';
import Paragraph from '../components/Paragraph/Paragraph';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import AnimatedNumber from '../components/AnimatedNumber/AnimatedNumber';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';

const aboutTexts = {
  biography: [
    {
      paragraph:
        'Hi, I´m CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients  visions to life.',
    },
    {
      paragraph:
        'I believe that design is about more than just making things look pretty – it´s about solving problems and creating intuitive, enjoyable experiences for users.',
    },
    {
      paragraph:
        'Whether I´m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.',
    },
  ],
  yearsOfExperience: [
    { years: 5, text: 'React Native' },
    { years: 6, text: 'Reactjs' },
    { years: 4, text: 'Nodejs' },
  ],
};

const about = () => {
  return (
    <>
      <Head>
        <title>About | Roy cuenca </title>

        <meta
          name="description"
          content="description about Roy Cuenca developer"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout customContainerStyles="pt-16">
          <AnimatedText
            text="Inspired by Passion, Guided by Purpose."
            customTextStyles="text-center !text-6xl mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              {aboutTexts.biography.map((item, index) => (
                <Paragraph
                  key={item?.paragraph}
                  text={item?.paragraph}
                  customStyles={index === 1 ? 'py-4' : ''}
                />
              ))}
            </div>
            <div className="col-span-3 relative h-max rounded-2xl  border-2 border-solid border-dark bg-light p-8">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Roy Cuenca"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className=" col-span-2 flex flex-col items-end justify-between">
              {aboutTexts.yearsOfExperience.map((item) => (
                <div className="flex flex-col items-end justify-center">
                  <span className=" inline-block text-7xl font-bold">
                    <AnimatedNumber value={item.years} />
                  </span>
                  <h2 className="text-xl font-medium capitalize text-dark/75">
                    {item.text}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
