import { GlobalStorage } from "./GlobalContext";
import { Limpar } from "./limpar";
import { Produto } from "./Produto";

function App() {
  return (
    <>
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    </>
  );
}

export default App;
