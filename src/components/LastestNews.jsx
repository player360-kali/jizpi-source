import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const LastestNews = () => {
  const cards = [
    {
      id: 1,
      img: '/src/assets/image1.png',
      title: 'New title 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/'
    },
    {
      id: 2,
      img: '/src/assets/image2.png',
      title: 'New title 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/'
    },
    {
      id: 3,
      img: '/src/assets/image3.png',
      title: 'New title 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '/'
    }
  ]

  const { t } = useTranslation()

  return (
    <section className='w-[100%] h-auto py-[80px] px-[16px] bg-[#f9fafb]'>
      <h2 className='text-[30px] font-bold text-center mb-[48px]'>
        {t('lastNews.title')}
      </h2>
      <div className='w-[100%] sm:w-[600px] md:w-[736px] lg:w-[990px] xl:w-[1240px] mx-auto h-auto flex flex-col items-center md:flex-row gap-[32px]'>
        {cards.map(item => (
          <Fragment key={item.id}>
            <div className='w-[100%] h-auto flex flex-col items-center rounded-[12px] border border-solid border-[#e5e5e5] shadow'>
              <div>
                <img
                  className='w-[100%] h-auto object-cover rounded-t-[12px]'
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <div className='w-[100%] h-auto p-[24px] flex flex-col items-left'>
                <h2 className='text-[20px] font-bold'>{item.title}</h2>
                <p className='text-[#4b5563] my-[16px]'>{item.text}</p>
                <span className='mt-[8px] flex items-center'>
                  <Link
                    className='py-[8px] px-[16px] text-[14px] border border-solid border-[#0001] hover:bg-[#0001] duration-150 rounded-[6px]'
                    to={item.link}
                  >
                    {t('lastNews.button')}
                  </Link>
                </span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default LastestNews
