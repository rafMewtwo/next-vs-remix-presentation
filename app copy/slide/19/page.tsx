import WithoutRemixImage from '@/app/assets/images/without_remix.png';
import WithRemixImage from '@/app/assets/images/with_remix.png';
import Image from 'next/image';

export default function Slide() {
  return (
    <div className="w-full h-full relative flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Remix</h3>
      <span className="text-dark font-multi font-medium text-2xl">Carregamento em Paralelo</span>
      <div className="w-full h-full flex gap-14 justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <span className="text-dark font-bold text-5xl">React.js</span>
          <Image src={WithoutRemixImage} className="rounded-lg" alt="load de componente sem remix" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-dark font-bold text-5xl">Remix</span>
          <Image src={WithRemixImage} className="rounded-lg" alt="load do componente com remix" />
        </div>
      </div>
    </div>
  );
}
