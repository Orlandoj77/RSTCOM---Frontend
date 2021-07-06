import {
  Container,
  Main,
  Form,
  Image,
  Image2,
  Title,
  InputPassword,
  RegisterButton,
  RedirectLogin,
} from "./styles";
import logo from "../../Asses/img/logo.png";
import fundo from "../../Asses/img/fundo.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function login() {
  return (
    <Container>
      {" "}
      <div>
        {" "}
        <Image2 src={fundo} />
      </div>
      <Main>
        {" "}
        <Image src={logo} />
        <Form>
          <Title>Faça seu Cadastro</Title>

          <InputPassword type="Email" placeholder="E-mail"></InputPassword>
          <InputPassword type="Password" placeholder="Senha"></InputPassword>

          <Link to="/Perfil">
            <RegisterButton>ENTRAR</RegisterButton>
          </Link>

          <Link to="/">
            <RedirectLogin to="/">Não possuo Cadastro</RedirectLogin>
          </Link>
        </Form>
      </Main>
    </Container>
  );
}

export default login;
