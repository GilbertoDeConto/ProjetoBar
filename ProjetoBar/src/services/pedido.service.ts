import { Injectable } from "@angular/core";
import { Estabelecimento, Pedido } from "../vo/vo";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PedidoService{

    private WS_LISTAR = "http://localhost:3000/pedido/listar";
    private WS_SALVAR = "http://localhost:3000/pedido/salvar";

    constructor(private http : HttpClient){

    }

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

    listar() : Observable<any> {
        let ws = this.http.get(this.WS_LISTAR, {});
        return ws;
    }

    getPedido() : Pedido{
        return JSON.parse(localStorage.getItem("pedido"));
    }

    setPedido(p : Pedido){
        localStorage.setItem("pedido", JSON.stringify(p));
    }

    salvar(p : Pedido) : Observable<any>{
        let ws = this.http.post(this.WS_SALVAR, p);
        return ws;
    }


}