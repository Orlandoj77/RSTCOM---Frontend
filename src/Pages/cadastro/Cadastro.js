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

function Cadastro() {
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

            <InputEmail placeholder="Nome"></InputEmail>
            <InputPassword type="Email" placeholder="E-mail"></InputPassword>
            <InputPassword type="Senha" placeholder="Senha"></InputPassword>
            <InputPassword
              type="Csenha"
              placeholder="Confirmar Senha"
            ></InputPassword>

            <Link to="/Perfil">
              <RegisterButton>CADASTRAR</RegisterButton>
            </Link>

            <Link to="/login">
              <RedirectLogin to="/Login">Eu já possuo Cadastro</RedirectLogin>
            </Link>
          </Form>
        </Fade>
      </Main>
    </Container>
  );
}

export default Cadastro;
