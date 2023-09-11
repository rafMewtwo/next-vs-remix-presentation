import GeekieLogo from "@/app/components/GeekieLogo";

export default function Slide() {
  return (
    <div className="w-full h-full bg-geekie flex flex-col gap-8 justify-center items-center">
      <GeekieLogo />
      <h1 className="text-white text-7xl font-muli font-bold">Casos de Uso</h1>
    </div>
  );
}

