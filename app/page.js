import Image from "next/image";
import { FcOpenedFolder } from "react-icons/fc";
import { BiLogoPython } from "react-icons/bi";
import { FcCollaboration } from "react-icons/fc";
import { LiaKaggle } from "react-icons/lia";
import { TbBrowserCheck } from "react-icons/tb";
import { RiSurveyLine } from "react-icons/ri";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-3 mx-auto gap-[50px] w-[80%] h-screen justify-center content-center align-middle items-center">
      <div className="flex flex-col p-4 content-center justify-center items-center">
        <Link
          href="https://www.canva.com/design/DAFIJFUKD_E/dwYosyGScPzY65oFVvy5Mg/edit?utm_content=DAFIJFUKD_E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          className="mx-auto"
        >
          <FcOpenedFolder className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold">Secret Files</p>
      </div>
      <div className="flex flex-col p-4 content-center justify-center items-center">
        <Link
          href="https://replit.com/teams/join/yboidqvwryaptmpqnjvwgxcozjstyahk-SummerCamp2023"
          target="_blank"
        >
          <BiLogoPython className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold text-center">Lessons</p>
      </div>
      <div className="flex flex-col p-4 content-center justify-center items-center">
        <Link
          href="https://replit.com/teams/join/ymiglrrrulxukbpgsixucgqtimahafuc-Jeopardy-2023"
          target="_blank"
        >
          <FcCollaboration className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold text-center">Jeopardy</p>
      </div>
      <div className="flex flex-col p-4 content-center justify-center items-center">
        <Link
          href=""
          target="_blank"
        >
          <LiaKaggle className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold text-center">Kaggle</p>
      </div>
      <div className="flex flex-col p-4 content-center justify-center items-center">
        <Link
          href="https://replit.com/teams/join/wlqagcpanyltciqqyxvkdanvyojntjkt-google-teachable-template"
          target="_blank"
        >
          <TbBrowserCheck className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold text-center">Teachable</p>
      </div>
      <div className="flex flex-col p-4 content-center justify-center items-center">
        <Link
          href="https://forms.gle/JysaCe8TXXPzfBqv5"
          target="_blank"
        >
          <RiSurveyLine className="text-9xl" />
        </Link>
        <p className="text-4xl font-bold text-center">Survey</p>
      </div>
    </div>
  );
}
