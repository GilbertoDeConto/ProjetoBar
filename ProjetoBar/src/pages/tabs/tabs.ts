import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListaPedidosPage } from '../lista-pedidos/lista-pedidos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaPedidosPage;

  constructor() {

  }
}
