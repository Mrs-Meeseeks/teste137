import { ReactNode } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type InfosType = {
  cep: string;
};
type State = {
  infos: InfosType[];
  addInfo: (info: InfosType) => void;
};

const useZustand = create<State>()((set) => ({
  infos: [],
  addInfo: (info: InfosType) => {
    set((state) => ({
      infos: [...state.infos, info],
    }));
  },
}));
export default useZustand;

// const useZustand = create(
//   persist<State>(
//     (set) => ({
//       infos: [],
//       addInfo: (info: InfosType) => {
//         set((state) => ({
//           infos: [...state.infos, info],
//         }));
//       },
//     }),
//     {
//       name: "info-storage", // unique name
//       storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
//     }
//   )
// );
