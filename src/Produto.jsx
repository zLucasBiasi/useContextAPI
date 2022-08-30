import { useContext } from "react";
import { GlobalContext } from "./GlobalContext";

export const Produto = () => {
  const global = useContext(GlobalContext);
  console.log(global);
  if (global.dados === null) return null;
  return (
    <div>
      Produto:
      {global.dados.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </div>
  );
};
