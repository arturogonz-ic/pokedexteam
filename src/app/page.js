import Link from "next/link";
import { Button } from "../shared/components/Button";

export default function IndexPage() {
  return (
    <main className="flex items-center justify-center flex-1 -mt-4">
      <div className="grid place-items-center gap-[15px] py-[50px] px-[120px] rounded-xl shadow-[0px_2px_3px_2px_rgba(0,0,0,0.3)] bg-white dark:bg-gray-800">
        <Link href="/new-team" className="w-full">
          <Button className="w-full">Crear nuevo equipo</Button>
        </Link>
        <Link href="/teams" className="w-full">
          <Button className="w-full">Ver equipos existentes</Button>
        </Link>
      </div>
    </main>
  );
}
