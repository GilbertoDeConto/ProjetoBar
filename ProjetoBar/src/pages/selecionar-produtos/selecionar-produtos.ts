import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutosService } from '../../services/produtos.service';
import { Produto, PedidoItem, Estabelecimento } from '../../vo/vo';
import { CarrinhoService } from '../../services/carrinho.service';

@IonicPage()
@Component({
  selector: 'page-selecionar-produtos',
  templateUrl: 'selecionar-produtos.html',
})
export class SelecionarProdutosPage {

  public pedidoItens : PedidoItem[] = [];

  public estabelecimento : Estabelecimento
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public wsProduto : ProdutosService,
    public carrinho : CarrinhoService) {

      this.estabelecimento = this.navParams.get("estabelecimento");

  }

  ionViewDidLoad() {
    
    this.wsProduto.listar(this.estabelecimento._id).subscribe( retorno => {

      let produtos : Produto[] = retorno;

      produtos.forEach( (p) => {

        let pedidoItem : PedidoItem = new PedidoItem;

        pedidoItem.produto  = p;
        pedidoItem.qtde     = this.carrinho.getQtde(p);        

        this.pedidoItens.push(pedidoItem);
      });
    });
  }

  atualizaQtdeCarrinho(p : Produto, qtde : number){

    this.carrinho.atualizaQtde(p, qtde);

    // Atualiza quantidade da tela
    this.pedidoItens.forEach( (pedidoItem, index) => {

      if(pedidoItem.produto._id == p._id){
        this.pedidoItens[index].qtde = this.carrinho.getQtde(p);
        return false;
      }
    });
  }

  prosseguir(){

    this.navCtrl.push("FinalizarPedidoPage"); 
  }

}
