import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Paginas
import { ForgotPasswordPage } from '../pages/auth/forgot-password/forgot-password';
import { AuthPage } from '../pages/auth/home/home';
import { LoginEmailPage } from '../pages/auth/login-email/login-email';
import { SignUpPage } from '../pages/auth/sign-up/sign-up';
import { HomePage } from '../pages/home/home';
import { ComercioPage } from '../pages/comercios/comercio';
import { CategoriaPage } from '../pages/categorias/categorialob';
import { TermsOfServicePage } from '../pages/terms-of-service/terms-of-service';

// Modulo do Firebase p/ Angular
import { AngularFireModule } from 'angularfire2';

// Provedores
import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';

// Config. do Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyDtBkolNV1S1OX25UAu-0AxiW5LktPvNW4",
    authDomain: "promogo-ddf45.firebaseapp.com",
    databaseURL: "https://promogo-ddf45.firebaseio.com",
    projectId: "promogo-ddf45",
    storageBucket: "promogo-ddf45.appspot.com",
    messagingSenderId: "759262718675"
};

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    CategoriaPage,
    ComercioPage,
    TermsOfServicePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    AuthPage,
    LoginEmailPage,
    SignUpPage,
    HomePage,
    CategoriaPage,
    ComercioPage,
    TermsOfServicePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, DataProvider, AuthProvider]
})
export class AppModule {}
