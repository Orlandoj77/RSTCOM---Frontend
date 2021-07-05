import {
  Container,
  Main,
  Form,
  Image2,
  Image3,
  Title2,
  Title3,
  Head,
  P,
  A,
  List,
  List1,
  List2,
} from "./styles";
import fundo from "../../Asses/img/fundo.png";

import logo from "../../Asses/img/logo.png";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

function login() {
  return (
    <Container>
      <Image2 src={fundo} />
      <Head>
        <Image3 src={logo} />
        <Link to="/login">
          <A>Sair</A>
        </Link>
        <Title3>Seu Nome</Title3>
        <P>seu_email@dominio.com</P>
      </Head>
      <List>
        <List1>Dados Pessoais</List1>
        <br />
        <br />
        <Link to="Todolist">
          {" "}
          <List2>TodoList</List2>
        </Link>
      </List>
      <Main>
        <Form>
          <Title2>/Todo list</Title2>
        </Form>
      </Main>{" "}
    </Container>
  );
}

export default login;
