import BlueMarksCircle from '@/app/assets/images/blue_marks_circle.png';
import RouterImageOne from '@/app/assets/images/router1.png';
import RouterImageTwo from '@/app/assets/images/router2.png';
import Image from 'next/image';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col py-20 px-16 overflow-hidden">
      <h3 className="text-geekie font-muli font-bold text-3xl">Next.js</h3>
      <span className="text-dark font-multi font-medium text-2xl">Routing</span>
      <div className="w-full h-full flex flex-col gap-[24px] gap-flex-col justify-center items-center">
      <Image
        alt="marca azul no canto"
        src={RouterImageOne}
      />
      <Image
        alt="marca azul no canto"
        src={RouterImageTwo}
      />
      </div>
      <Image
        alt="marca azul no canto"
        src={BlueMarksCircle}
        className="absolute -bottom-24 md:-bottom-32 -right-20 md:-right-20 w-60 h-60 md:w-[26rem] md:h-[26rem]"
      />
    </div>
  );
}
