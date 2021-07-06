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
  P2,
  P3,
  A,
  InputBox,
  List,
  List1,
  List2,
  Remover,
} from "./styles";
import fundo from "../../Asses/img/fundo.png";

import logo from "../../Asses/img/logo.png";
//import Checkbox from "./Checkbox";
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
          <div>
            <input type="checkbox" />
            &emsp; <P2> Tarefa 1</P2> &emsp;<Remover>remover</Remover>
            <br />
            <P3>
              <InputBox type="checkbox" checked /> &emsp;Tarefa 2
            </P3>{" "}
            <br />
            <P3>
              <InputBox type="checkbox" checked /> &emsp;Tarefa 3
            </P3>{" "}
            <br />
            <P3>
              {" "}
              <InputBox type="checkbox" checked />
              &emsp;Tarefa 4
            </P3>
            <br />
            <input type="checkbox" />
            &emsp;
            <P2>Tarefa 5</P2> &emsp;<Remover>remover</Remover>
            <br />
            <input type="checkbox" />
            &emsp;
            <P2>Tarefa 6</P2> &emsp;<Remover>remover</Remover>
          </div>
        </Form>
      </Main>{" "}
    </Container>
  );
}

export default login;
