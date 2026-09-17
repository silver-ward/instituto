import LabelTitle from "./components/css/LabelTitle.jsx";
import Label from "./components/css/Label.jsx";
import InputText from "./components/css/InputText.jsx";
import InputPassword from "./components/css/InputPassword.jsx";


function App() {
  return (
    <>
      <LabelTitle texto="Autenticação" />
      <Label texto="Usuário: "/>
      <InputText placeholder="Digite o nome de usuário aqui."/>
      <Label texto="Senha: " />
      <InputPassword placeholder="Digite a senha aqui."/>
      
    </>
  );
}

export default App;
