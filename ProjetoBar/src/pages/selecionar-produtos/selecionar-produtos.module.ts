import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecionarProdutosPage } from './selecionar-produtos';
import { ProdutosService } from '../../services/produtos.service';
import { CarrinhoService } from '../../services/carrinho.service';

@NgModule({
  declarations: [
    SelecionarProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecionarProdutosPage),
  ],
  providers : [
    ProdutosService,
    CarrinhoService
  ]
})
export class SelecionarProdutosPageModule {}
