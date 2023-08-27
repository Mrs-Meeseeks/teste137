import Input from "@/components/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-24 bg bg-[#fafafa]">
      <Input className="" placeholder="Input" label="Nome" />
      <Input className="" placeholder="Input" />
    </main>
  );
}
