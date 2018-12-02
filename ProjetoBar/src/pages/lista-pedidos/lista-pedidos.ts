import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../vo/vo';

@Component({
  selector: 'page-lista-pedidos',
  templateUrl: 'lista-pedidos.html',
})
export class ListaPedidosPage {

  public pedidos : Pedido[];

  constructor(
    public navCtrl: NavController, 
    public pedido : PedidoService) {
  }

  ionViewWillEnter() {

    this.pedido.listar().subscribe( retorno => {
      this.pedidos = retorno;
      console.log(this.pedidos);
    });
    
  }

}
