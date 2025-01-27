import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { GoPeople } from 'react-icons/go'
import { IoBookOutline } from 'react-icons/io5'
import { RiGraduationCapLine } from 'react-icons/ri'

const Directions = () => {
  const cards = [
    {
      id: 1,
      title: 'Iqtisodiyot',
      text: "Iqtisodiyot sohasida keng qamrovli bilim va ko'nikmalarni o'rgatamiz.",
      icon: <IoBookOutline />
    },
    {
      id: 2,
      title: 'Dasturiy injiring',
      text: "Dasturiy ta'minot yaratish va uning qo'llanilishi bo'yicha chuqur bilimlar beradi.",
      icon: <GoPeople />
    },
    {
      id: 3,
      title: 'Axborot xafsizligi',
      text: "Axborot xavfsizligi, ma'lumotlarni himoya qilish bo'yicha mutaxassislar tayyorlaydi.",
      icon: <RiGraduationCapLine />
    }
  ]

  const { t } = useTranslation()

  return (
    <div className='w-[100%] h-auto py-[80px] px-[16px] xl:px-[48px]'>
      <h2 className='text-[30px] font-bold text-center'>
        {t('directions.title')}
      </h2>
      <div className='w-[100%] sm:w-[600px] md:w-[736px] lg:w-[100%] mx-auto h-auto flex flex-col md:flex-row items-center gap-[32px] mt-[48px]'>
        {cards.map((item, index) => (
          <Fragment key={item.id}>
            <div className='w-[100%] md:h-[300px] lg:h-[220px] flex flex-col gap-[8px] text-center p-[24px] rounded-[12px] border border-solid border-[#0002] shadow'>
              <span className='w-[48px] flex items-start text-start mr-auto text-[48px] font-bold text-blue-600'>
                {item.icon}
              </span>
              <h3 className='text-[20px] font-bold'>
                {t(`directions.cards.${index}.title`)}
              </h3>
              <p className='text-[#0009]'>
                {t(`directions.cards.${index}.text`)}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Directions
