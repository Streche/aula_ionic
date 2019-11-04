import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
      email: String
      senha: String

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  fazerLogin(){
    if (this.email == 'admin' && this.senha == 'admin'){
      alert('Logado!')
    } else {
      alert('E-mail ou senha inválidos')
    }
    let elementoBotao = <HTMLElement>document.querySelector('#btnLogin')
    elementoBotao.innerText = 'Entrando ...'
    let corAntiga = elementoBotao.style.background
    elementoBotao.style.background = '#7f8c8d'

    setTimeout(() => {
      if (this.email == 'admin' && this.senha == 'admin') {
        console.log('Logado!')
      } else{ 
        console.log('E-mail ou senha inválidos')
      }
      elementoBotao.innerText = 'ENTRAR'
      elementoBotao.style.background = corAntiga

    },3000)

  }
    

}
