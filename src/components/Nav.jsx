import { Fragment, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
// import { IoIosArrowDown } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [drop, setDrop] = useState(false)
  const [lang, setLang] = useState({
    value: 'uz',
    current: "O'zbekiston",
    modal: false
  })

  const { t, i18n } = useTranslation()

  const languages = [
    {
      id: 1,
      value: 'uz',
      current: "O'zbek"
    },
    {
      id: 2,
      value: 'ru',
      current: 'Русский'
    },
    {
      id: 3,
      value: 'en',
      current: 'English'
    },
    // {
    //   id: 4,
    //   value: 'qq',
    //   current: 'Qaraqalpaq'
    // }
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleChangeLanguage = item => {
    if (
      lang.current !== item.current &&
      lang.value !== item.value &&
      lang.modal !== false
    ) {
      setLang({ value: item.value, current: item.current, modal: false })
    }
    i18n.changeLanguage(item.value)
  }

  return (
    <nav className='w-[100%] h-[120px] flex items-center px-[16px] bg-[#fff9] backdrop-blur-sm sticky top-0 z-50 border-b border-solid border-[#0003]'>
      <div className='w-[100%] sm:w-[600px] md:w-[735px] lg:w-[990px] xl:w-[1248px] mx-auto h-auto flex flex-row items-center justify-between'>
        <Link
          to={'/'}
          className='w-[250px] h-[120px] lg:w-[26%] flex flex-row items-center select-none'
        >
          <div className='w-[120px] h-[100%]'>
            <img className='w-[100%] h-[100%] object-cover lg:object-contain' src={logo} alt='' />
          </div>
          <div className='w-[130px] ml-[16px] lg:w-[140px] lg:m-0'>
            <span className='text-[20px] font-bold'>
              JIZZAX POLITEXNIKA INSTITUTI
            </span>
          </div>
        </Link>
        <div className='ml-auto lg:hidden'>
          <button onClick={toggleMenu} className='text-black text-2xl'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`absolute ${isOpen ? 'block' : 'hidden'
            } lg:hidden absolute top-0 left-0 w-[100%] px-[16px] shadow-lg transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.9)] ${isOpen ? 'z-[50]' : 'z-[-100]'
            } ${isOpen
              ? 'translate-y-[110px] opacity-100'
              : 'translate-y-[100px] opacity-0'
            }`}
        >
          <ul className='flex flex-col items-left gap-4 py-6'>
            <li>
              <Link
                to='/about'
                className='text-gray-700 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
              >
                {t('nav.about')}
              </Link>
            </li>
            <li>
              <Link
                to='/about/#'
                className='text-gray-700 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
              >
                {t('nav.management')}
              </Link>
            </li>
            <li>
              <Link
                to='/directions'
                className='text-gray-700 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
              >
                {t('nav.fields')}
              </Link>
            </li>
            <li>
              <Link
                to='/departments'
                className='text-gray-700 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
              >
                {t('nav.departments')}
              </Link>
            </li>
            <li>
              <Link
                to='/news'
                className='text-gray-700 text-lg font-semibold hover:text-blue-500 transition-colors duration-300'
              >
                {t('nav.news')}
              </Link>
            </li>
            <li>
              <div
                className={`
          w-[260px] flex flex-row gap-[10px] items-center relative`}
              >
                <button
                  className='w-[74px] h-auto border border-[#3333] border-solid rounded-[6px] px-[12px] py-[6px] flex flex-row justify-between items-center shadow-sm z-20'
                  onClick={() => setLang({ ...lang, modal: true })}
                >
                  <TbWorld />
                  <p className='text-[12px] font-medium uppercase'>{lang.value}</p>
                </button>
                {lang.modal && (
                  <div className='w-[100px] h-[110px] absolute bg-[#fff] top-[100%] left-0 rounded-[6px] z-40 p-[4px] border border-solid border-[#0003] flex flex-col items-center'>
                    {languages.map(item => (
                      <Fragment key={item.id}>
                        <div
                          onClick={() => {
                            handleChangeLanguage(item)
                          }}
                          className='w-[100%] h-auto py-[6px] px-[8px] rounded-[4px] text-[14px] text-left hover:bg-[#0001] select-none cursor-pointer'
                        >
                          {item.current}
                        </div>
                      </Fragment>
                    ))}
                  </div>
                )}
              </div>
            </li>
            <li>
              <button className='text-[#fff] bg-blue-600 hover:bg-blue-700 px-[16px] py-[8px] rounded-[6px]'>
                Ariza topshirish
              </button>
            </li>
          </ul>
        </div>
        <div className='hidden lg:block h-[110px]'>
          <ul className='w-[100%] h-[100%] lg:p-0 px-[16px] flex flex-row items-center gap-[16px] text-center'>
            <li className='my-auto text-left hover:text-blue-500 duration-200'>
              <Link to={'/about'}>{t('nav.about')}</Link>
            </li>
            <li className='my-auto hover:text-blue-500 duration-200'>
              <Link to={'/about/#'}>{t('nav.management')}</Link>
            </li>
            <li className='my-auto hover:text-blue-500 duration-200'>
              <Link to={'/directions'}>{t('nav.fields')}</Link>
            </li>
            <li className='my-auto hover:text-blue-500 duration-200'>
              <Link to={'/departments'}>{t('nav.departments')}</Link>
            </li>
            <li className='my-auto hover:text-blue-500 duration-200'>
              <Link to={'/news'}>{t('nav.news')}</Link>
            </li>
            {/* <li className='my-auto relative cursor-pointer'>
              <span
                onClick={() => setDrop(!drop)}
                className='flex flex-row items-center hover:text-blue-500'
              >
                <button>{t('nav.students.current')}</button>
                <IoIosArrowDown className='ml-[10px]' size={10} />
              </span>
              {drop === true && (
                <div className='w-[200px] h-auto bg-[#fff] border border-solid border-[#0008] rounded-[6px] shadow-lg absolute flex flex-col items-left text-left text-sm z-10'>
                  <Link
                    className='py-[8px] px-[16px] rounded-t-[6px] hover:bg-[#0003] duration-200'
                    to={'/'}
                  >
                    {t('nav.students.online')}
                  </Link>
                  <Link
                    className='py-[8px] px-[16px] rounded-b-[6px] hover:bg-[#0003] duration-200'
                    to={'/'}
                  >
                    {t('nav.students.hemis')}
                  </Link>
                </div>
              )}
            </li> */}
          </ul>
        </div>
        <div
          className={`
          w-[260px] hidden lg:flex flex-row gap-[10px] items-center relative`}
        >
          <button
            className='w-[74px] h-auto border border-[#3333] border-solid rounded-[6px] px-[12px] py-[6px] flex flex-row justify-between items-center shadow-sm z-20'
            onClick={() => setLang({ ...lang, modal: true })}
          >
            <TbWorld />
            <p className='text-[12px] font-medium uppercase'>{lang.value}</p>
          </button>
          {lang.modal && (
            <div className='w-[100px] h-[110px] absolute bg-[#fff] top-[100%] left-0 rounded-[6px] z-40 p-[4px] border border-solid border-[#0003] flex flex-col items-center'>
              {languages.map(item => (
                <Fragment key={item.id}>
                  <div
                    onClick={() => {
                      handleChangeLanguage(item)
                    }}
                    className='w-[100%] h-auto py-[6px] px-[8px] rounded-[4px] text-[14px] text-left hover:bg-[#0001] select-none cursor-pointer'
                  >
                    {item.current}
                  </div>
                </Fragment>
              ))}
            </div>
          )}
          <button className='text-[14px] text-[#fff] bg-blue-600 hover:bg-blue-700 shadow-sm px-[16px] py-[8px] rounded-[6px]'>
            {t('nav.button')}
          </button>
        </div>
      </div>
      {lang.modal === true && (
        <div
          className='w-[100%] h-[100vh] absolute top-0 left-0 z-[100]'
          onClick={() => setLang({ ...lang, modal: false })}
        ></div>
      )}
    </nav>
  )
}

export default Nav
