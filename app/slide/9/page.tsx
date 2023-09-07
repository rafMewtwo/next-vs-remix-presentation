import BlueMarksCircle from '@/app/assets/images/blue_marks_circle.png';
import TerminalNextImage from '@/app/assets/images/terminal_next.png';
import ConfigNextImage from '@/app/assets/images/confg_next.png';
import Image from 'next/image';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col py-20 px-16 overflow-hidden">
      <h3 className="text-geekie font-muli font-bold text-3xl">Next.js</h3>
      <span className="text-dark font-multi font-medium text-2xl">Inciando projeto em NEXT</span>
      <div className="w-full h-full flex flex-col gap-[24px] gap-flex-col justify-center items-center">
      <Image
        alt="marca azul no canto"
        src={TerminalNextImage}
      />
      <Image
        alt="marca azul no canto"
        src={ConfigNextImage}
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
