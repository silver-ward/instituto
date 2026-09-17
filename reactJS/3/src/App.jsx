import LabelTitle from "./components/css/LabelTitle.jsx";
import Label from "./components/css/Label.jsx";


function App() {
  return (
    <>
      <LabelTitle texto="Autenticação" />
      <Label texto="Usuário: "/>
      <Label texto="Senha: " />
    </>
  );
}

export default App;
