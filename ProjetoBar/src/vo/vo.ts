export class Estabelecimento{
    public _id : string;
    public nome : string;
    public capacidade_pessoas : number;
}

export class ProdutoCategoria{
    public _id : string;
    public titulo : string;
}

export class Produto{
    public _id : string;
    public titulo : string;
    public descricao : string;
    public valor : number;
    public categoria : ProdutoCategoria;
    public estabelecimento : Estabelecimento;
}

export class Pedido{
    public _id : string;
    public data : Date;
    public valor : number;
    public hora_chegada : Date;
    public pessoas : number;
    public estabelecimento : Estabelecimento;
}

export class PedidoItem{
    public _id : string;
    public qtde : number;
    public observacao : string;
    public produto : Produto;
    public pedido : Pedido;
}