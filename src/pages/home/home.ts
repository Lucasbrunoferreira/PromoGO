import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";


@Component({
  templateUrl: 'home.html',
  selector: 'page-home',
})
export class HomePage {
  public produtos: FirebaseListObservable<any>;

  constructor(private nav: NavController, public afDatabase: AngularFireDatabase) {
    this.produtos = afDatabase.list('produtos');

  }
}
