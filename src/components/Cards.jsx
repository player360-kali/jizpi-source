import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { GoPeople } from 'react-icons/go'
import { IoBookOutline } from 'react-icons/io5'
import { RiGraduationCapLine } from 'react-icons/ri'

const Cards = () => {
  const cards = [
    {
      id: 1,
      count: 2,
      title: 'Fakultet',
      icon: <RiGraduationCapLine />
    },
    {
      id: 2,
      count: 10,
      title: "Yo'nalishlar",
      icon: <IoBookOutline />
    },
    {
      id: 3,
      count: 115,
      title: "Proffesor O'quvchilar",
      icon: <GoPeople />
    },
    {
      id: 4,
      count: '6,000+',
      title: 'Talabalar',
      icon: <RiGraduationCapLine />
    }
  ]

  const { t } = useTranslation()

  return (
    <section className='w-[100%] h-auto py-[48px] px-[20px] lg:px-[48px] bg-blue-50'>
      <div className='w-[100%] sm:w-[600px] md:w-[728px] lg:w-[100%] mx-auto flex flex-col items-center md:flex-row gap-[20px]'>
        {cards.map((item, index) => (
          <Fragment key={item.id}>
            <div className='w-[100%] h-[180px] lg:h-[160px] lg:w-[100%] flex flex-col items-center text-center p-[24px] rounded-[12px] border border-solid border-[#0002] shadow bg-[#fff]'>
              <span className='w-[32px] flex items-center text-[32px] text-blue-600'>
                {item.icon}
              </span>
              <h3 className='text-[30px] my-auto font-bold'>{item.count}</h3>
              <p className='text-[14px] mt-auto text-[#0009]'>
                {t(`cards.${index}`)}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  )
}

export default Cards
