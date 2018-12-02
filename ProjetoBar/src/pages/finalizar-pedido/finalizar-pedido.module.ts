import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizarPedidoPage } from './finalizar-pedido';
import { CarrinhoService } from '../../services/carrinho.service';
import { PedidoService } from '../../services/pedido.service';

@NgModule({
  declarations: [
    FinalizarPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizarPedidoPage),
  ],
  providers : [
    CarrinhoService,
    PedidoService
  ]
})
export class FinalizarPedidoPageModule {}
