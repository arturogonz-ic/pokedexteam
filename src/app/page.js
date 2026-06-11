import Link from "next/link";

export default function IndexPage() {
  return (
    <main className="flex items-center justify-center flex-1 -mt-4">
      <div className="grid place-items-center gap-[15px] py-[50px] px-[120px] rounded-xl shadow-[0px_2px_3px_2px_rgba(0,0,0,0.3)]">
        <Link href="/new-team" className="w-full">
          <button className="w-full text-white bg-[rgb(255,86,86)] border-none rounded-[5px] font-bold cursor-grab transition-all duration-300 py-2 px-[50px] hover:bg-[rgb(190,49,49)] hover:scale-110">
            Crear nuevo equipo
          </button>
        </Link>
        <Link href="/teams" className="w-full">
          <button className="w-full text-white bg-[rgb(255,86,86)] border-none rounded-[5px] font-bold cursor-grab transition-all duration-300 py-2 px-[50px] hover:bg-[rgb(190,49,49)] hover:scale-110">
            Ver equipos existentes
          </button>
        </Link>
      </div>
    </main>
  );
}
