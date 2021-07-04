import {
  Container,
  Main,
  Form,
  Image,
  Image2,
  Fade,
  Title,
  InputEmail,
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
      <Main>
        {" "}
        <Image2 src={fundo} />
        <Fade right>
          <Image src={logo} />
        </Fade>
        <Fade left>
          <Form>
            <Title>Faça seu Cadastro</Title>

            <InputPassword type="Email" placeholder="E-mail"></InputPassword>
            <InputPassword type="Password" placeholder="Senha"></InputPassword>

            <Link to="/Perfil">
              <RegisterButton>ENTRAR</RegisterButton>
            </Link>

            <Link to="/login">
              <RedirectLogin to="/Login">Não possuo Cadastro</RedirectLogin>
            </Link>
          </Form>
        </Fade>
      </Main>
    </Container>
  );
}

export default login;
