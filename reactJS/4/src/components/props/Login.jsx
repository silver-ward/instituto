import Label from './Label.jsx';
import Labelln from './Labelln.jsx';
import InputText from './InputText.jsx';
import Button from './Button.jsx';

function Login() {
  return (
    <>
      <Labelln texto="IFB - Instituto Federal de Brasília" />
      <Labelln texto="Campus Taguatinga" />
      <Labelln texto="Ciência da Computação" />

      <Label texto="Usuário: " />
      <InputText placeholder="usuário" />

      <Label texto="Senha: " />
      <InputText placeholder="senha" />

      <Button valor="Logar" />
    </>
  );
}

export default Login;
