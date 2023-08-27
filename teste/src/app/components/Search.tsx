import Input from "@/components/Input";
import useZustand from "@/store/zustand";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type InputType = {
  cep: string;
};
type OriginType = {
  localidade: string;
};

const Search = () => {
  const addInfo = useZustand((state) => state.addInfo);
  const [origin, setOrigin] = useState<string[]>([]);
  const [destiny, setDestiny] = useState();

  type InfosData = z.infer<typeof infosSchema>;

  const infosSchema = z.object({
    origem: z.string({ invalid_type_error: "O valor precisa ser uma string" }),
    // .optional(),
    destino: z
      .string({ invalid_type_error: "O valor precisa ser uma string" })
      .optional(),
    // startDate: z
    //   .date({
    //     required_error: "A data inicial é obrigatória",
    //     invalid_type_error: "Selecione uma data valida",
    //   })
    //   .nullable()
    //   .optional(),
    // endDate: z
    //   .date({
    //     required_error: "A data final é obrigatória",
    //     invalid_type_error: "Selecione uma data valida",
    //   })
    //   .nullable()
    //   .optional(),
    // budget: z
    //   .string()
    //   // .number({
    //   //   invalid_type_error: "O valor precisa ser um número",
    //   // })
    //   .nullable()
    //   .optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<InfosData>({
    resolver: zodResolver(infosSchema),
  });

  const submit = async (data: InfosData /* , e: Event */) => {
    // console.log(data);
    // e.preventDefault();
    // const form = e.target as HTMLFormElement;
    // const cep = (form.elements.namedItem("origem") as HTMLInputElement)?.value;
    // if (cep === undefined) {
    //   console.log(undefined);
    //   return;
    // }
    const origem = data.origem;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${origem}/json/`, {
        method: "GET",
      });
      const json = await response.json();
      console.log(json);
      // addInfo({ origem });
      setOrigin([...origin, json.localidade]);
    } catch (error) {
      console.log(error);
    }

    console.log("renderizou search");
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          className=""
          placeholder="Input"
          label="Origem"
          error={!!errors.origem}
          errorMessage={errors.origem?.message}
          {...register("origem")}
        />
        <Input
          className=""
          placeholder="Input"
          label="Destino"
          {...register("destino")}
        />
        <button>Submit</button>
      </form>
      {origin}
    </>
  );
};

export default Search;
