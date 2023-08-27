import Input from "@/components/Input";
import useZustand from "@/store/zustand";

type InputType = {
  cep: string;
};

const Search = () => {
  const addInfo = useZustand((state) => state.addInfo);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const cep = (form.elements.namedItem("cep") as HTMLInputElement).value;
    addInfo({ cep });
    console.log("renderizou search");
  };
  return (
    <>
      <form onSubmit={submit}>
        <Input className="" placeholder="Input" label="Nome" name="cep" />
        <Input className="" placeholder="Input" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Search;
