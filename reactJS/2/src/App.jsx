import InputText from "./components/states/InputText.jsx";
import Label from "./components/states/Label.jsx";
import Labelln from "./components/states/Labelln.jsx";


function App() {
  return (
    <>
      <Labelln texto="Tela de Autenticação" />
      <Label texto="Usuário: "/>
      <InputText placeholder="Digite o usuário" /> <br />
      <Label texto="Senha: "/>
    </>
  );
}

export default App;
