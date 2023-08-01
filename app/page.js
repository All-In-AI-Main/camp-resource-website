import Image from "next/image";
import { FcOpenedFolder } from "react-icons/fc";
import { BiLogoPython } from "react-icons/bi";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-row gap-[100px] h-screen justify-center content-center align-middle items-center">
      <div className="flex flex-col text-center">
        <Link
          href="https://www.canva.com/design/DAFIJFUKD_E/dwYosyGScPzY65oFVvy5Mg/edit?utm_content=DAFIJFUKD_E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          className="mx-auto"
        >
          <FcOpenedFolder className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold">Secret Files</p>
      </div>

      <div className="flex flex-col p-4">
        <Link
          href="https://replit.com/team/allinai2023"
          target="_blank"
        >
          <BiLogoPython className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold text-center">Replit</p>
      </div>
    </main>
  );
}
