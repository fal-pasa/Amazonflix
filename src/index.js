import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home';
import CadastroCategoria from './pages/cadastrocategoria';
import CadastroVideo from './pages/cadastrovideo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
