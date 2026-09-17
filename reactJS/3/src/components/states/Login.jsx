import Label from './Label.jsx';
import Labelln from './Labelln.jsx';
import InputText from './InputText.jsx';
import InputPassword from './InputPassword.jsx';
import Button from './Button.jsx';

function Login() {
  return (
    <>
      <Labelln texto="Tela de Autenticação" />
      <Label texto="Usuário: "/>
      <InputText placeholder="Digite o usuário" /><br />
      <Label texto="Senha: "/>
      <InputPassword placeholder="Digite a senha"/><br />
      <Button valor="Login"/>
    </>
  );
}

export default Login;
