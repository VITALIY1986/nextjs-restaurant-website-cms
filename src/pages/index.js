import Head from 'next/head';
import Home from 'components/Home';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';
import SpacialMenu from 'components/Menu';
import Introduction from 'components/Introduction';
import VideoIntro from 'components/VideoIntro';
import Gallery from 'components/Gallery';
import Contacts from 'components/Contact';

import { getDataFromBucket } from 'lib/api';
import chooseByType from 'utils/chooseValueByType';

function Template({ data }) {
  const headerData = {
    metadata: {
      section: "Try it!",
      title: "Chapel Hill Shiraz",
      intro: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.",
      picture: {
        imgix_url: "https://nextjs-restaurant-website-cms.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fa818dda0-b73e-11ec-a642-7195085ee56f-gallery01.png&w=640&q=75" // Ссылка на изображение
      }
    }
  };
  const navbarData = {
    metadata: {
      logo: {
        imgix_url: 'https://nextjs-restaurant-website-cms.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F595ffb70-b6ae-11ec-a642-7195085ee56f-gericht.png&w=750&q=75' // путь к логотипу
      },
      about: 'О нас',
      contact: 'Контакты',
      home: 'Главная',
      menu: 'Меню',
      action: 'Свяжитесь с нами'
    },
    video: {
      url: 'https://your-video-url.com'
    },
    contact: {
      phone: '+1234567890',
      email: 'info@example.com',
      address: '123 Street, City, Country'
    }
  };
 

  return (
    <>
      <Head>
        <title>Next.js Restaurant CMS</title>
        <meta name="description" content="Create template using cosmic.js CMS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout navbar={navbarData}>
      <Home info={headerData}/>
      </Layout>
     
    </>
  )
}


export default Template;

