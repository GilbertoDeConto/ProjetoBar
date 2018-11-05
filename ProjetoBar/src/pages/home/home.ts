import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EstabelecimentosService } from '../../services/estabelecimentos.service';
import { Estabelecimento } from '../../vo/vo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public estabelecimentos : Estabelecimento[];

  constructor(public navCtrl: NavController, private wsEstabelecimentos : EstabelecimentosService) {

  }

  ionViewDidLoad(){

    this.wsEstabelecimentos.listar().subscribe( retorno => {
      this.estabelecimentos = retorno;
    });
    
  }

  selecionarProdutos(e : Estabelecimento){

    this.navCtrl.push("SelecionarProdutosPage", {
      estabelecimento : e
    });
  }

}
