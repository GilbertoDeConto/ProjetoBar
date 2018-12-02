import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutosService{

    private WS = "http://localhost:3000/produto";

    constructor(private http : HttpClient){

    }

    listar(e : string) : Observable<any> {
        let ws = this.http.post(this.WS + "/listar", {
            estabelecimento : e
        });
        return ws;
    }

}