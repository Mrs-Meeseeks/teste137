"use client";
import useZustand from "@/store/zustand";
import { randomUUID } from "crypto";
import Search from "./components/Search";
export default function Home() {
  const info = useZustand((state) => state.infos);
  console.log("renderizou page");
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24 bg bg-[#333333]">
      <Search />
      {info?.map((info) => {
        return <p key={crypto.randomUUID()}>{info.cep}</p>;
      })}
    </main>
  );
}
