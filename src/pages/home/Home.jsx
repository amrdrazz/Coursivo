import Hero from './/Hero';
import CoursesSlider from './/CoursesSlider';
import Footer from './../../components/Footer';

import './home.css'

function Home({lang}) {
  return (
    <>
      <Hero lang={lang} />
      <CoursesSlider />
    </>
  )
}

export default Home
