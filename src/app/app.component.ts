import { Component, ViewChild} from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ComercioPage } from '../pages/comercios/comercio';
import { CategoriaPage } from '../pages/categorias/categorialob';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/home/home';

import { DataProvider } from '../providers/data';
import { AuthProvider } from '../providers/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  isAppInitialized: boolean = false;
  user: any;
  rootPage: any = AuthPage;

    pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    protected data: DataProvider,
    protected auth: AuthProvider) {
    this.user = {
      image: ''
    };

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Categoria', component: CategoriaPage },
      { title: 'Comercio', component: ComercioPage }

    ];
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.auth.getUserData().subscribe(data => {
        if (!this.isAppInitialized) {
          this.nav.setRoot(HomePage);
          this.isAppInitialized = true;
        }
        this.user = data;
        this.data.list('pets').subscribe(data => {
          console.log(data);
        });
      }, err => {
        this.nav.setRoot(AuthPage);
      });
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
