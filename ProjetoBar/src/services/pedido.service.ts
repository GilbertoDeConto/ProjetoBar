import { Injectable } from "@angular/core";
import { Estabelecimento, Pedido } from "../vo/vo";

@Injectable()
export class PedidoService{

    iniciaNovoPedido(e : Estabelecimento) : boolean{

        var pedidoEmAberto = this.getPedido();

        if(pedidoEmAberto != null && pedidoEmAberto.estabelecimento._id != e._id){
            if(!confirm("Você possui um pedido em aberto para " + pedidoEmAberto.estabelecimento.nome + "\nDeseja iniciar um novo ?")){
                return false;
            }
        }

        let pedido : Pedido = new Pedido();
        pedido.estabelecimento = e;

        this.setPedido(pedido);
        return true;
    }

    getPedido(){
        return JSON.parse(localStorage.getItem("pedido"));
    }

    setPedido(p : Pedido){
        localStorage.setItem("pedido", JSON.stringify(p));
    }


}