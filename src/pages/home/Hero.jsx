
import HeroSlider from "./HeroSlider"
import Records from "../../components/Records"

function Hero({lang}) {

  return (
    <div className="hero">
      <div className="container">

        <div className="hero_container">

        <div className="hero_content">
          {lang === 'en'? (<h1>Master New <span>Skills</span> And Advance Your Career</h1>) 
          : (<h1>اتقن <span>مهارات</span> جديدة وطور مسيرتك المهنية</h1>)}

          <p className="hero_text">{lang === 'en'
          ? ('Join thousands of learners and access top-rated cources in Web development, Design, Marketing, Data Science and more.') 
          : ('انضم الى الاف المتعلمين واحصل على امكانية الوصول الى دورات عالية التقييم في تطوير الويب, التصميم, التسويق, علوم البيانات والمزيد.')}</p>

          <button>{lang === 'en'? ('Explore Courses') : ('استكشف الدورات')}</button>

          <Records />

        </div>


        <div className="hero_img">
            <img src="./hero.png" alt="" />
        </div>
        </div>


        <HeroSlider />

      </div>
      

    </div>
  )
}

export default Hero
