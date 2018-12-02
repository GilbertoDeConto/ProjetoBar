import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FotoVO } from '../../model/vo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private URL_LISTA = 'http://localhost:3000/listar'

    public fotos : FotoVO[]

    constructor(public navCtrl: NavController, 
                private http : HttpClient) {

    }

    ionViewWillEnter() {
        this.listar()
    }

    abrirCadastro() {
        this.navCtrl.push('NovaFotoPage')
    }

    listar() {
        this.http.get(this.URL_LISTA).subscribe(
            (retorno) => {
                this.fotos = retorno as FotoVO[]
            }
        )
    }

}
