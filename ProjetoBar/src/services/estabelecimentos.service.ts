import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class EstabelecimentosService{

    private WS = "http://localhost:3000/estabelecimento";

    constructor(private http : HttpClient){

    }

    listar() : Observable<any> {
        let ws = this.http.post(this.WS + "/listar", {});
        return ws;
    }

}