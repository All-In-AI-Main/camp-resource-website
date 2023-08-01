import Image from "next/image";
import { FcOpenedFolder } from "react-icons/fc";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center content-center align-middle items-center">
      <Link
        href="https://www.canva.com/design/DAFIJFUKD_E/dwYosyGScPzY65oFVvy5Mg/edit?utm_content=DAFIJFUKD_E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
      >
        <FcOpenedFolder className="text-9xl" />
      </Link>
      <p className="text-4xl font-bold">Secret Files</p>
    </main>
  );
}
