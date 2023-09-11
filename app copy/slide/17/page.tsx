import RemixRoutingImage from '@/app/assets/images/remix_routing.png';
import BlueMarksCircle from '@/app/assets/images/blue_marks_circle.png';
import Image from 'next/image';

export default function Slide() {
  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col p-10 md:py-20 md:px-16">
      <h3 className="text-geekie font-muli font-bold text-3xl">Remix</h3>
      <span className="text-dark font-multi font-medium text-2xl">Routing</span>
      <div className="w-full h-full flex flex-col gap-12 justify-center items-center">
        <Image src={RemixRoutingImage} className="rounded-lg" alt="remix routing image" />
        <div className="flex gap-4 w-1/2 justify-center ">
          <div className="bg-geekie w-4 h-4 flex-shrink-0 rounded-full mt-1.5" />
          <div className="flex flex-col gap-4">
            <h4 className="text-dark text-3xl font-muli font-bold">
              File-based Routing
            </h4>
            <p className="text-dark text-xl font-muli font-medium">
              Assim como no Next.js, as rotas do Remix são definidas por arquivos, com a diferença de que as rotas no Remix ficam todas na pasta <span className="text-geekie font-bold">/app/routes</span> e sua url é ditada pelos segmentos de rota, separados por "<span className="text-geekie font-bold">.</span>" (a rota <span className="text-geekie font-bold">_index.tsx</span> é uma rota especial)
            </p>
            <p className="text-dark text-xl font-muli font-medium">Dessa forma, todas as rotas com pais em comum ficam próximas umas das outras, sem gerar uma grande árvore de pastas horizontalmente</p>
          </div>
        </div>
      </div>
      <Image
        alt="marca azul no canto"
        src={BlueMarksCircle}
        className="absolute -bottom-24 md:-bottom-32 -right-20 md:-right-20 w-60 h-60 md:w-[26rem] md:h-[26rem]"
      />
    </div>
  );
}

