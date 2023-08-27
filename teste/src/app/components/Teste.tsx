"use client";
import useZustand from "@/store/zustand";

const Teste = () => {
  const info = useZustand((state) => state.infos);
  console.log("renderizou teste");
  console.log(info);
  return (
    <div className="bg-zinc-700">
      {"aaaaa "}
      {info?.map((info) => {
        return <p key={crypto.randomUUID()}>{info.cep}</p>;
      })}
    </div>
  );
};

export default Teste;
