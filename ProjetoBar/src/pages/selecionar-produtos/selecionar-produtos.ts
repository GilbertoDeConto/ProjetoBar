import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosService } from '../../services/produtos.service';
import { Produto, PedidoItem } from '../../vo/vo';
import { CarrinhoService } from '../../services/carrinho.service';

@IonicPage()
@Component({
  selector: 'page-selecionar-produtos',
  templateUrl: 'selecionar-produtos.html',
})
export class SelecionarProdutosPage {

  public pedidoItens : PedidoItem[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public wsProduto : ProdutosService,
    public carrinho : CarrinhoService) {

  }

  ionViewDidLoad() {
    
    this.wsProduto.listar().subscribe( retorno => {

      let produtos : Produto[] = retorno;

      produtos.forEach( (p) => {

        let pedidoItem : PedidoItem = new PedidoItem;

        pedidoItem.produto  = p;
        pedidoItem.qtde     = this.carrinho.getQtde(p);        

        this.pedidoItens.push(pedidoItem);
      });

      console.log(this.pedidoItens);
    });
  }

  atualizaQtdeCarrinho(p : Produto, qtde : number){
    this.carrinho.atualizaQtde(p, qtde);
  }

}
