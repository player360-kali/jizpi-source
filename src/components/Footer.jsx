import { useTranslation } from 'react-i18next'
import { BsTelephone } from 'react-icons/bs'
import { IoLocationOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
const Footer = () => {
  const about = [
    {
      id: 1,
      title: 'Manzil',
      text: "O'zbekiston Respublikasi, Jizzax Viloyat, Jizzax shaxri. Islom Karimov shox ko'chasi 4 uy",
      icon: <IoLocationOutline className='inline' size={20} />,
      link: 'https://maps.app.goo.gl/1iFu1wtfFjfyWRMd6'
    },
    {
      id: 2,
      title: 'Telefon',
      text: '+998 (90) 265 06 82',
      icon: <BsTelephone className='inline' size={20} />,
      link: 'tel:+998902650682'
    },
    {
      id: 3,
      title: 'Email',
      text: 'jaxongir99@inbox.ru',
      icon: <MdOutlineMailOutline className='inline' size={20} />,
      link: 'mailto:jaxongir99@inbox.ru'
    }
  ]

  const { t } = useTranslation()

  return (
    <footer className='w-[100%] h-auto py-[32px] px-[16px] bg-[#111827]'>
      <div className='w-[100%] h-auto flex flex-col items-center gap-[32px]'>
        <div className='w-[100%] md:w-[740px] lg:w-[990px] xl:w-[1250px] h-auto flex flex-col md:flex-row md:text-start md:justify-between items-center gap-[26px] lg:gap-[20px] text-center'>
          {about.map(item => (
            <div
              key={item.id}
              className='w-[100%] md:w-[230px] lg:w-[310px] xl:w-[370px] lg:h-[112px]  md:h-[168px] text-[#fff] text-[18px]'
            >
              {item.icon} {item.title}:{' '}
              <Link to={item.link} target='_blank'>
                {item.text}
              </Link>
            </div>
          ))}
        </div>
        <div className='w-[100%] h-auto text-center text-[17px] text-[#fff8]'>
          <p>© 2023 jizpi.uz{t('footer')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
