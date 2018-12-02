import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { FotoVO } from '../../model/vo';

@IonicPage()
@Component({
  selector: 'page-nova-foto',
  templateUrl: 'nova-foto.html',
})
export class NovaFotoPage {

    private URL_UPLOAD = 'http://localhost:3000/salvar'
    private options : CameraOptions

    public foto

    public dados : FotoVO = new FotoVO()

    constructor(public navCtrl: NavController, 
        public camera : Camera,
        private http: HttpClient) {

        this.options = {
            quality : 100,
            destinationType : camera.DestinationType.DATA_URL,
            encodingType : camera.EncodingType.JPEG,
            mediaType : camera.MediaType.PICTURE,
        }
    }

    ionViewDidLoad() {

    }

    tirarFoto() {
        let p = this.camera.getPicture(this.options)
        p.then( 
            (retorno) => {
                console.log(retorno)
                this.foto = 'data:image/jpeg;base64,' + retorno
            }, 
            (erro) => {
                console.log(erro)
                alert("Erro ao obter foto " + erro.message)
            }
        )
    }

    enviar() {
        let formData = new FormData()
        formData.append('foto', this.foto)
        formData.append('dados', JSON.stringify(this.dados))

        this.http.post(this.URL_UPLOAD, formData).subscribe(
            () => {
                this.navCtrl.pop()
            }, 
            (erro) => {
                alert('Erro no upload ' + erro.message)
            }
        )

    }

}
