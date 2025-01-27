import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

const News = () => {
  const data = [
    {
      id: 1,
      date: '2024-03-15',
      title: 'Xalqaro konferensiya',
      text: "AQShning Nyu-York shaxrida xalqaro ta'lim innovatsiyalari konferensiyasi...",
      imgs: ['/src/assets/news1.png', '/src/assets/news2.png']
    },
    {
      id: 2,
      date: '2024-03-10',
      title: "Yangi o'quv dasturi",
      text: "2024-2025 o'quv yili uchun yangilangan dastur e'lon qilindi...",
      imgs: ['/src/assets/news3.png']
    },
    {
      id: 3,
      date: '2024-03-05',
      title: "Talabalar loyihasi g'olib",
      text: "Bizning talabalarimiz xalqaro tanlovda g'oliblikni qo'lga kiritishdi...",
      imgs: ['/src/assets/news4.png']
    },
    {
      id: 4,
      date: '2024-02-28',
      title: 'Yangi hamkorlik',
      text: "Institut va IT kompaniya o'rtasida hamkorlik shartnomasi imzolandi...",
      imgs: ['src/assets/news5.png']
    }
  ]

  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <main className='w-[100%] bg-gradient-to-b from-blue-50 to-white py-[48px] px-[16px]'>
        <div className='w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] mx-auto'>
          <div>
            <h2 className='text-[30px] md:text-[36px] font-bold text-center'>
              {t('news.title')}
            </h2>
          </div>
          <div className='w-[100%] h-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[24px] mt-[32px]'>
            {data.map((item, index) => (
              <Fragment key={item.id}>
                <div className='w-[100%] h-auto bg-[#fff] shadow rounded-[12px] p-[16px]'>
                  <Swiper
                    slidesPerView={1}
                    className='w-[100%] h-[192px] bg-[#333]'
                    loop={item.imgs.length > 1}
                    modules={[Navigation]}
                    navigation
                    speed={600}
                  >
                    {item.imgs.map((img, index) => (
                      <SwiperSlide key={`${item.id}-${index}`}>
                        <img
                          className='w-[100%] h-[100%] object-cover'
                          src={img}
                          alt={`Slide ${index}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className='w-[100%]'>
                    <div className='w-[100%] h-auto flex justify-between mt-[16px]'>
                      <span className='text-[12px] font-bold bg-[rgb(245_245_245)] px-[10px] py-[2px] rounded-[6px]'>
                        {item.date}
                      </span>
                      <button className='text-[14px] text-blue-600 hover:underline'>
                        {t('news.button')}
                      </button>
                    </div>
                    <h3 className='text-[18px] font-bold my-[8px]'>
                      {t(`news.cards.${index}.title`)}
                    </h3>
                    <p className='text-sm text-gray-600'>
                      {t(`news.cards.${index}.text`)}
                    </p>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default News
