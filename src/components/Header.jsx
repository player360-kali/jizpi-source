import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-auto overflow-hidden">
      <div className="w-[100%] h-[120px] absolute top-0 left-0 bg-[#fff] z-[10]"></div>
      <div className="w-[100%] h-[45vh] md:h-[70vh] relative overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&mute=1&loop=1&playlist=0x5mf8BUJZY"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute mt-[120px] top-0 left-1/2 w-[600%] h-[100%] md:w-[300%] md:h-[300vh] transform -translate-x-1/2 -translate-y-[50%] object-cover"
          style={{ pointerEvents: 'none' }}
        />
        <div className="w-[100%] h-[100%] md:h-[70vh] flex flex-col items-center md:justify-center bg-[#0001] absolute top-0 left-0 z-[20] px-[16px] md:py-[32px] md:px-[32px]">
          <h1 className="text-2xl md:text-6xl font-bold text-center text-[#fff]">JIZZAX POLITEXNIKA INSTITUTIgA Xush kelibsiz</h1>
          <div className="backdrop-blur-md inline-block mx-auto text-[#fff] p-[8px] md:px-[16px] md:py-[6px] rounded-full text-center my-[16px]">
            <h4 className="inline-block text-[16px] font-bold">{"Universitetimiz dunyoning eng yaxshi 1000 taligi ro'yxatiga kirgan!"}</h4>
          </div>
          <h3 className="text-[#fff] text-[20px] text-center">Kelajak innovatsiyalari va ta’lim mukammalligi</h3>
          <div className="flex items-center mt-[20px] md:mt-[30px] text-[14px]">
            <Link className="mx-auto bg-[#fff] px-[32px] py-[10px] flex items-center text-blue-500 rounded-[6px] hover:bg-blue-50">{"Batafsil ma'lumot"}</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
