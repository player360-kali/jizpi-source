import { Fragment } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { LuBuilding2 } from 'react-icons/lu'
import { IoMdTime } from 'react-icons/io'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { FiTarget } from 'react-icons/fi'
import { RiGraduationCapLine } from 'react-icons/ri'
import { GoPeople } from 'react-icons/go'
import { useTranslation } from 'react-i18next'

const Departaments = () => {
  const person = [
    {
      id: 1,
      title: "Raqamli ta'lim texnologiyalar markazi",
      avatar: '/src/assets/avatar.png',
      fullName: 'Ibragimov Jaxongir Kuchimovich',
      about: {
        workTime: '15:00-17:00',
        lunch: '13:00 – 14:00',
        call: '+998 (90) 265 06 82 ',
        email: 'jaxongir99@inbox.ru'
      },
      basic: {
        title:
          "Markaz o'zining faoliyatini va rivojlanishini yaratilayotgan dasturiy hamda multimediya mahsulotlari va boshqa mahsulotlar, ko'rsatilayotgan xizmat va ish turlari bo'yicha rivojlanish istiqbollarni rejalashtiradi.",
        text1:
          "O'quv jarayonini axborotlashtirish, ta'lim sohasida axborot marketing xizmatini rivojlantirish",
        text2:
          "Yangi raqamli texnologiyalarni va ilmiy-tadqiqot natijalarini o'quv jarayoniga tadbiq qilish"
      }
    },
    // {
    //   id: 2,
    //   title: "Innovatsion ta'lim markazi",
    //   avatar: '',
    //   fullName: 'Karimov Azamat Bekmuratovich',
    //   about: {
    //     workTime: '14:00-16:00',
    //     lunch: '12:00 – 13:00',
    //     call: '(+99891)123-45-67',
    //     email: 'a.karimov@nukusii.uz'
    //   },
    //   basic: {
    //     title:
    //       "Innovatsion ta'lim markazi zamonaviy pedagogik texnologiyalarni ishlab chiqish va joriy etish bilan shug'ullanadi.",
    //     text1: "Innovatsion ta'lim metodlarini ishlab chiqish va joriy etish",
    //     text2: "O'qituvchilar malakasini oshirish dasturlarini tashkil etish"
    //   }
    // },
    // {
    //   id: 3,
    //   title: 'Ilmiy-tadqiqot markazi',
    //   avatar: '',
    //   fullName: 'Sarsenbaeva Gulnara Jenisovna',
    //   about: {
    //     workTime: '10:00-12:00',
    //     lunch: '13:00 – 14:00',
    //     call: '(+99893)987-65-43',
    //     email: 'g.sarsenbaeva@nukusii.uz'
    //   },
    //   basic: {
    //     title:
    //       'Ilmiy-tadqiqot markazi institutning ilmiy faoliyatini muvofiqlashtiradi va rivojlantiradi.',
    //     text1: 'Ilmiy-tadqiqot loyihalarini ishlab chiqish va amalga oshirish',
    //     text2: 'Xalqaro ilmiy hamkorlikni rivojlantirish'
    //   }
    // }
  ]
  const { t } = useTranslation()
  return (
    <>
      <Nav />
      <main className='w-[100%] h-auto py-[80px] px-[16px] bg-gradient-to-b from-blue-50 to-white'>
        <div className='w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1240px] mx-auto h-auto'>
          <h2 className='text-4xl md:text-6xl text-center font-bold mb-[64px]'>
            {t('departments.title')}
          </h2>
          <div className='w-[100%] h-auto flex flex-col items-center gap-[64px] pb-[64px]'>
            {person.map((item, index) => (
              <Fragment key={item.id}>
                <div className='w-[100%] h-auto flex flex-col items-center gap-[32px]'>
                  <div className='w-[100%]'>
                    <div className='w-[100%] h-auto flex flex-col items-center sm:items-start md:items-start lg:flex-row gap-[32px]'>
                      <div className='w-[100%] mb-[24px]'>
                        <div className='w-[100%] flex flex-col items-center sm:items-start mb-[32px]'>
                          <div className='w-[100%] sm:w-auto md:w-auto lg:w-auto h-auto py-[8px] px-[16px] bg-blue-500 text-[#fff] font-bold text-[18px] rounded-[6px] mb-[32px] sm:m-0 md:m-0'>
                            <h3>{t(`departments.cards.${index}.title`)}</h3>
                          </div>
                        </div>
                        <div className='w-[100%] h-auto flex flex-col lg:flex-row lg:gap-[32px]'>
                          <div className='w-[100%] h-auto flex flex-col items-start rounded-[12px] p-[24px] shadow bg-[#fff] gap-[24px]'>
                            <div className='w-[100%] flex flex-row items-center gap-[8px] font-bold'>
                              <LuBuilding2
                                className='text-blue-500'
                                size={24}
                              />
                              <h4>{t('departments.cardTitle')}</h4>
                            </div>
                            <div className='w-[100%] h-auto flex flex-col items-center'>
                              <div className='w-[200px] h-[200px] mx-auto mb-[16px] flex justify-center items-center'>
                                {item.avatar && (
                                  <img
                                    src={item.avatar}
                                    alt=''
                                    className='w-[100%] h-[100%] object-cover rounded-full'
                                  />
                                )}
                                {!item.avatar && (
                                  <div className='w-[100%] h-[100%] rounded-full text-center flex justify-center bg-[#f5f5f5]'>
                                    <p className='m-auto'>
                                      {item.fullName
                                        .split(' ')
                                        .map(namePart => namePart[0])
                                        .join(',')}
                                    </p>
                                  </div>
                                )}
                              </div>
                              <h3 className='text-[24px] font-bold text-center'>
                                {item.fullName}
                              </h3>
                            </div>
                            <div className='w-[100%] h-auto flex flex-col items-center gap-[16px]'>
                              <div className='w-[100%] flex items-center gap-[8px] text-gray-600'>
                                <span>
                                  <IoMdTime
                                    size={24}
                                    className='text-blue-500'
                                  />
                                </span>
                                <div>
                                  <p>{t('departments.workTime')}</p>
                                  <p>{item.about.workTime}</p>
                                </div>
                              </div>
                              <div className='w-[100%] flex items-center gap-[8px] text-gray-600'>
                                <span>
                                  <IoMdTime
                                    size={24}
                                    className='text-blue-500'
                                  />
                                </span>
                                <div>
                                  <p>{t('departments.lunchTime')}</p>
                                  <p>{item.about.lunch}</p>
                                </div>
                              </div>
                              <div className='w-[100%] flex items-center gap-[8px] text-gray-600'>
                                <span>
                                  <IoCallOutline
                                    size={24}
                                    className='text-blue-500'
                                  />
                                </span>
                                <p>{item.about.call}</p>
                              </div>
                              <div className='w-[100%] flex items-center gap-[8px] text-gray-600'>
                                <span>
                                  <MdOutlineEmail
                                    size={24}
                                    className='text-blue-500'
                                  />
                                </span>
                                <p>{item.about.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className='w-[100%] h-auto flex flex-col items-start rounded-[12px] p-[24px] shadow bg-[#fff] gap-[24px]'>
                            <div>
                              <div className='w-[100%] flex flex-row items-center gap-[8px] font-bold mb-[24px]'>
                                <span>
                                  <FiTarget
                                    className='text-blue-500'
                                    size={24}
                                  />
                                </span>
                                <h4>{t('departments.aboutTitle')}</h4>
                              </div>
                              <p className='text-gray-600 mb-[32px]'>
                                {t(`departments.cards.${index}.aboutText`)}
                              </p>
                            </div>
                            <div className='flex flex-col items-center gap-[24px] md:items-start'>
                              <div className='w-[100%] flex flex-row items-center gap-[8px] font-bold'>
                                <RiGraduationCapLine
                                  className='text-blue-500'
                                  size={24}
                                />
                                <h4 className='text-[20px] font-bold'>
                                  {t('departments.mainTitle')}
                                </h4>
                              </div>
                              <div className='flex flex-row items-start gap-[8px] text-gray-600'>
                                <span>
                                  <GoPeople
                                    className='text-blue-500'
                                    size={20}
                                  />
                                </span>
                                <p>
                                  {t(`departments.cards.${index}.mainText`)}
                                </p>
                              </div>
                              <div className='flex flex-row items-start gap-[8px] text-gray-600'>
                                <span>
                                  <GoPeople
                                    className='text-blue-500'
                                    size={20}
                                  />
                                </span>
                                <p>
                                  {t(`departments.cards.${index}.mainText2`)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Departaments
