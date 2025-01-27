import { Fragment, useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { MdDone, MdKeyboardArrowDown } from 'react-icons/md'
import { IoBookOutline } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { GoPeople } from 'react-icons/go'
import { RiGraduationCapLine } from 'react-icons/ri'
import { GiBookshelf } from 'react-icons/gi'
import { LuBrain, LuCalculator, LuCoins, LuSchool } from 'react-icons/lu'
import { TbWorld } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'

const Directions = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [type, setType] = useState('Kunduzgi')

  const directs = [
    {
      id: 1,
      title: 'Dasturiy injiniring',
      type: 'Kunduzgi',
      icon: <IoBookOutline size={32} className='text-[#1f2937]' />
    },
    {
      id: 2,
      title: 'Iqtisodiyot',
      type: 'Kunduzgi',
      icon: <IoMdTime size={32} className='text-[#1f2937]' />
    },
    {
      id: 3,
      title: 'Tarix',
      type: 'Kunduzgi',
      icon: <GoPeople size={32} className='text-[#1f2937]' />
    },
    {
      id: 4,
      title: 'Psixologiya',
      type: 'Kunduzgi',
      icon: <RiGraduationCapLine size={32} className='text-[#1f2937]' />
    },
    {
      id: 5,
      title: 'Pedagogika',
      type: 'Kunduzgi',
      icon: <GiBookshelf size={32} className='text-[#1f2937]' />
    },
    {
      id: 6,
      title: 'Dasturiy injiniring',
      type: 'Sirtqi',
      icon: <LuCalculator size={32} className='text-[#1f2937]' />
    },
    {
      id: 7,
      title: 'Iqtisodiyot',
      type: 'Sirtqi',
      icon: <LuBrain size={32} className='text-[#1f2937]' />
    },
    {
      id: 8,
      title: 'Tarix',
      type: 'Sirtqi',
      icon: <LuSchool size={32} className='text-[#1f2937]' />
    },
    {
      id: 9,
      title: 'Psixologiya',
      type: 'Sirtqi',
      icon: <TbWorld size={32} className='text-[#1f2937]' />
    },
    {
      id: 10,
      title: 'Pedagogika',
      type: 'Sirtqi',
      icon: <LuCoins size={32} className='text-[#1f2937]' />
    }
  ]

  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <main className='w-[100%] h-auto bg-[#e5e5e5] py-[80px] px-[16px]'>
        <div className='w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] mx-auto'>
          <div className='mb-[32px]'>
            <h2 className='text-[36px] lg:text-[60px] font-bold text-center text-[#1f2937] mb-[16px]'>
              {t('directionsPage.title')}
            </h2>
            <p className='text-[#1f2937] text-[20px] text-center'>
              {t('directionsPage.text')}
            </p>
          </div>
          <div className='w-[256px] h-[40px] mx-auto relative mb-[48px]'>
            {!isOpen && (
              <button
                className='w-[100%] py-[8px] px-[12px] border border-solid border-[#d1d5db] text-[14px] rounded-[6px] bg-[#fff] flex justify-between items-center'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>
                  {type === 'Kunduzgi'
                    ? t('directionsPage.types.0')
                    : t('directionsPage.types.1')}
                </span>
                <MdKeyboardArrowDown size={20} fill='#6b7280' />
              </button>
            )}
            {isOpen && (
              <div className='w-[100%] h-auto top-0 left-0 bg-[#fff] p-[4px] rounded-[6px] border border-solid border-[#d1d5db] shadow z-20 flex flex-col items-start text-start text-[14px] absolute'>
                <button
                  className={`w-[100%] text-start py-[4px] px-[6px] rounded-[6px] 
                bg-[${type === 'Kunduzgi' ? '#e5e5e5' : '#fff'}]
                flex flex-row justify-between items-center
                `}
                  onClick={() => {
                    setType('Kunduzgi')
                    setIsOpen(!isOpen)
                  }}
                >
                  <p>{t('directionsPage.types.0')}</p>
                  {type === 'Kunduzgi' && <MdDone color='#3b82f6' />}
                </button>
                <button
                  className={`w-[100%] text-start py-[4px] px-[6px] rounded-[6px] 
                bg-[${type !== 'Kunduzgi' ? '#e5e5e5' : '#fff'}]
                flex flex-row justify-between items-center
                `}
                  onClick={() => {
                    setType('Sirtqi')
                    setIsOpen(!isOpen)
                  }}
                >
                  <p>{t('directionsPage.types.1')}</p>
                  {type === 'Sirtqi' && <MdDone color='#3b82f6' />}
                </button>
              </div>
            )}
          </div>
          <div className='w-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-[24px]'>
            {directs
              .filter(item => item.type === type)
              .map((item, index) => (
                <Fragment key={item.id}>
                  <div className='w-[100%] h-auto md:h-[144px] flex flex-row items-start bg-[#fff] rounded-[6px] lg:rounded-[12px] border border-solid border-[#e5e5e5] p-[24px] shadow-lg gap-[16px]'>
                    <div className='p-[12px]'>{item.icon}</div>
                    <div className='text-[#1f2937]'>
                      <h4 className='text-[20px] font-bold mb-[6px]'>
                        {t(`directionsPage.cards.${index}`)}
                      </h4>
                      <p className='flex flex-row gap-[6px] items-center text-[14px] mb-[16px]'>
                        <IoMdTime size={18} /> {t('directionsPage.time')}:{' 4'}
                        {t('directionsPage.year')}
                      </p>
                      <p className='text-[12px] font-bold px-[10px]'>
                        {item.type === 'Kunduzgi'
                          ? t('directionsPage.types.0')
                          : t('directionsPage.types.1')}
                      </p>
                    </div>
                  </div>
                </Fragment>
              ))}
          </div>
        </div>
        {isOpen && (
          <div
            onClick={() => setIsOpen(!isOpen)}
            className='w-[100%] h-[100vh] fixed top-0 left-0 z-10'
          ></div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Directions
