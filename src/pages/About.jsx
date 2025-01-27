import Nav from '../components/Nav'
import paper1 from '../assets/paper1.jpg'
import paper2 from '../assets/paper2.jpg'
import Footer from '../components/Footer'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()
  return (
    <>
      <Nav />
      <main className='w-[100%] h-auto py-[80px] px-[14px]'>
        <div className='w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] mx-auto mb-[48px]'>
          <div className='w-[100%] flex flex-col items-center gap-[24px]'>
            <h2 className='text-[36px] md:text-[60px] font-bold text-center'>
              {t('aboutPage.title')}
            </h2>
            <p className='text-[20px] text-center'>{t('aboutPage.text1')}</p>
            <p className='text-[20px] text-center'>{t('aboutPage.text2')}</p>
          </div>
          <div className='w-[100%] lg:w-[730px] xl:w-[740px] mx-auto h-auto bg-[#dbeafe] p-[24px] sm:px-[48px] rounded-[12px] border border-solid border-[#e5e5e5] text-[#1d4ed8] mt-[48px] shadow'>
            <h2 className='text-[24px] font-bold mb-[10px]'>
              {t("aboutPage.top")}
            </h2>
            <p className='mt-[10px]'>
              Jizzakh Polytechnic Institute is proud to be ranked among the top
              1000 universities globally.
            </p>
          </div>
        </div>
        <div className='w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] mx-auto flex flex-col md:flex-row gap-[32px] items-center'>
          <div className='w-[100%] p-[24px] border border-solid rounded-[12px] shadow'>
            <img src={paper1} alt='' />
          </div>
          <div className='w-[100%] p-[24px] border border-solid rounded-[12px] shadow'>
            <img src={paper2} alt='' />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
