import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarrinhoService } from '../../services/carrinho.service';
import { PedidoService } from '../../services/pedido.service';
import { ListaPedidosPage } from '../lista-pedidos/lista-pedidos';

@IonicPage()
@Component({
  selector: 'page-finalizar-pedido',
  templateUrl: 'finalizar-pedido.html',
})
export class FinalizarPedidoPage {

  public hora_chegada

  public pessoas

  public valor : number = 0

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public carinho : CarrinhoService,
    public pedido : PedidoService) {
  }

  ionViewDidLoad() {

    // Calcula total do pedido
    let itensCarrinho = this.carinho.getLsCarrinho()

    for (let item in itensCarrinho){

      let pedidoItem = itensCarrinho[item]
      this.valor += pedidoItem.produto.valor
    }
  }

  finalizar(){

    let pedido = this.pedido.getPedido();

    pedido.data = new Date()
    pedido.hora_chegada = this.hora_chegada
    pedido.pessoas = this.pessoas
    pedido.valor = this.valor
    pedido.itens = this.carinho.getLsCarrinho();

    this.pedido.salvar(pedido).subscribe( () => {

      localStorage.removeItem("pedido")
      localStorage.removeItem("carrinho")

      this.navCtrl.push(ListaPedidosPage)
    });
  }

}
