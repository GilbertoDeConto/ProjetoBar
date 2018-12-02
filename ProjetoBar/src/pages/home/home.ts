import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstabelecimentosService } from '../../services/estabelecimentos.service';
import { Estabelecimento } from '../../vo/vo';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public estabelecimentos : Estabelecimento[];

  constructor(
    public navCtrl: NavController, 
    private wsEstabelecimentos : EstabelecimentosService,
    private pedidoSrv : PedidoService) {

  }

  ionViewDidLoad(){

    this.wsEstabelecimentos.listar().subscribe( retorno => {
      this.estabelecimentos = retorno;
    });
  }

  selecionarProdutos(e : Estabelecimento){

    if(this.pedidoSrv.iniciaNovoPedido(e)){

      this.navCtrl.push("SelecionarProdutosPage", {
        estabelecimento : e
      });
    }
  }

}
