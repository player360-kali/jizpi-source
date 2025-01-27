import { useTranslation } from 'react-i18next'
import { IoPaperPlaneOutline } from 'react-icons/io5'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className='w-[100%] h-auto py-[80px] px-[16px] bg-[#fff]'>
      <h2 className='text-[30px] font-bold text-center mb-[48px]'>
        {t('contact.title')}
      </h2>
      <div className='w-[100%] sm:w-[600px] md:w-[740px] lg:w-[990px] xl:w-[1250px] mx-auto h-auto flex flex-col md:flex-row items-center md:items-start gap-[32px]'>
        <div className='w-[100%]'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.9028393109015!2d67.83578577508347!3d40.13014807148709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b29418e6eb4ab5%3A0x3739ec1c13aeabaf!2s4RJR%2B7M%20Jizzax%20Politexnika%20Instituti%2C%20Jizzax%2C%20Jizzax%20viloyati%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1737915582243!5m2!1sen!2s'
            frameBorder='0'
            width={'100%'}
            height={'450px'}
            allowFullScreen
            loading='lazy'
          ></iframe>
          
        </div>
        <div className='w-[100%]'>
          <form className='w-[100%] flex flex-col items-center gap-[8px] md:gap-[18px]'>
            <input
              className='w-[100%] py-[4px] px-[12px] rounded-[6px] border border-solid border-[#0003] shadow-sm placeholder:text-[#0009]'
              type='text'
              placeholder={t('contact.inp.name')}
            />
            <input
              className='w-[100%] py-[4px] px-[12px] rounded-[6px] border border-solid border-[#0003] shadow-sm placeholder:text-[#0009]'
              type='email'
              placeholder={t('contact.inp.email')}
            />
            <textarea
              className='w-[100%] h-[150px] p-[16px] resize-none rounded-[6px] border border-solid border-[#0002]'
              placeholder={t('contact.inp.message')}
            ></textarea>
            <button
              className='w-[100%] h-auto bg-blue-600 hover:bg-blue-700 text-[#fff] text-[14px] py-[6px] px-[16px] flex flex-row items-center text-center rounded-[6px]'
              type='submit'
            >
              <span className='mx-auto flex items-center gap-[8px]'>
                <IoPaperPlaneOutline size={16} />
                {t('contact.inp.button')}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
