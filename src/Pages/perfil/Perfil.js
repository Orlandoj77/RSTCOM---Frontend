import {
  Container,
  Main,
  Form,
  Image,
  Image2,
  Fade,
  Title,
  InputPassword,
  RegisterButton,
} from "./styles";
import logo from "../../Asses/img/logo.png";
import avatar from "../../Asses/img/avatar.png";
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
            <img src={avatar} />
            <Title>Faça seu Cadastro</Title>
            <InputPassword type="Email" placeholder="NOME"></InputPassword>
            <InputPassword type="Email" placeholder="E-mail"></InputPassword>
            <InputPassword type="Password" placeholder="Senha"></InputPassword>
            <InputPassword
              type="Email"
              placeholder="Confirmar Senha"
            ></InputPassword>

            <Link to="/Todolist">
              <RegisterButton>Editar</RegisterButton>
            </Link>
          </Form>
        </Fade>
      </Main>
    </Container>
  );
}

export default login;
