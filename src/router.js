import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Cadastro from "./Pages/cadastro/Cadastro";
import Todolist from "./Pages/list/Todolist";
import perfil from "./Pages/perfil/Perfil";
import login from "./Pages/login/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Cadastro} exact />
        <Route path="/login" component={login} />
        <Route path="/Perfil" component={perfil} />
        <Route path="/Todolist" component={Todolist} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
