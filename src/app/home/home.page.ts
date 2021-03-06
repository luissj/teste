import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

import { Contato } from '../contato/entidade/entidade/contato';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

contato: Contato= new Contato();

constructor(private router: Router, private afAuth: AngularFireAuth) {}

redefinir(){
  alert('verifique seu email')
 this.afAuth.auth.sendPasswordResetEmail(this.contato.email).then(
   () => alert ('verifique seu email')
 ); { this.router.navigate(['contato-salvar']);
  }
}

logar(){
this.afAuth.auth.signInWithEmailAndPassword( this.contato.email, this.contato.senha).then(
() => { this.router.navigate(['salas']); }
).catch( (_erro) => alert("Senha ou Email inexistente") );
}

logout() {
this.afAuth.auth.signOut();
this.router.navigate(['home']);
}
}
