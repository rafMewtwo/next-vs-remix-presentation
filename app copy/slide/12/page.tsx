import BlueMarksCircle from '@/app/assets/images/blue_marks_circle.png';
import Image from 'next/image';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col py-20 px-16 overflow-hidden">
      <h3 className="text-geekie font-muli font-bold text-3xl">Next.js</h3>
      <span className="text-dark font-multi font-medium text-2xl">Parceria</span>
      <div className="w-full h-full flex flex-col gap-flex-col justify-center items-center gap-12">
        <div className='flex justify-center'>
        <div className="bg-geekie w-4 h-4 rounded-full mt-1.5" />
        <p className="text-4xl w-4/5 text-dark font-semibold font-muli text-center">
          Next.js vs React? É uma Parceria, Não uma Competição
        </p>
        </div>
        <p className="text-4xl w-4/5 text-dark font-semibold font-muli text-center">
          Exemplo : Server Components
        </p>
      </div>
      <Image
        alt="marca azul no canto"
        src={BlueMarksCircle}
        className="absolute -bottom-24 md:-bottom-32 -right-20 md:-right-20 w-60 h-60 md:w-[26rem] md:h-[26rem]"
      />
    </div>
  );
}
