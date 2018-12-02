import { Produto, PedidoItem } from "../vo/vo";

export class CarrinhoService{

    atualizaQtde(p : Produto, qtde : number){

        let carrinho        = this.getLsCarrinho();
        let novoCarrinho    = carrinho;

        // Se o produto ainda não foi adicinado, adiciona
        if(!(p._id in carrinho)){
            
            let pedidoItem : PedidoItem = new PedidoItem;
            pedidoItem.produto = p;
            pedidoItem.qtde = qtde;
            pedidoItem.pedido = JSON.parse(localStorage.getItem("pedido"));

            novoCarrinho[p._id] = pedidoItem;

        // Senão, atualiza quantidade
        } else {
            novoCarrinho[p._id].qtde += qtde;
        }

        if(novoCarrinho[p._id].qtde >= 0){
            localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        }
    }

    getLsCarrinho() : PedidoItem[]{
        return JSON.parse(localStorage.getItem("carrinho")) || {};
    }

    getQtde(p : Produto) : number{

        let carrinho = this.getLsCarrinho();

        if(p._id in carrinho){
            return carrinho[p._id].qtde;
        } else {
            return 0;
        }
    }

}