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
  apiKey: "AIzaSyASOTEy3RVE7xvL8YCXOhB2ABKWLpJFCS8",
  authDomain: "promogo-3c5ed.firebaseapp.com",
  databaseURL: "https://promogo-3c5ed.firebaseio.com",
  projectId: "promogo-3c5ed",
  storageBucket: "promogo-3c5ed.appspot.com",
  messagingSenderId: "492488720224"
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
