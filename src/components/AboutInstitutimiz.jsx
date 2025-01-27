import { useTranslation } from 'react-i18next'

const AboutInstitutimiz = () => {
  const { t } = useTranslation()
  return (
    <section className='w-[100%] h-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1248px] mx-auto py-[60px] px-[20px]'>
      <div className='w-[100%] h-auto flex flex-col md:flex-row items-center gap-[48px]'>
        <div className='w-[100%] h-auto flex flex-col items-left gap-[16px]'>
          <h2 className='text-[30px] font-bold'>{t('aboutinstitut.title')}</h2>
          <p>{t('aboutinstitut.text1')}</p>
          <p>{t('aboutinstitut.text2')}</p>
        </div>
        <div className='w-[100%] h-[40vh] sm:h-[50vh] md:flex flex-col items-center justify-center'>
        <iframe className='w-[100%] h-[100%]' src="https://www.youtube.com/embed/IHdubcd2TRc?si=jX_jB-1vpTglUG7Z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </section>
  )
}

export default AboutInstitutimiz
