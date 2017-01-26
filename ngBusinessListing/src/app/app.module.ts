import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FirebaseService } from './firebase.service';

export const firebaseConfig = {
    apiKey: "AIzaSyBcwvm7d8-7Fr-GocEUrlN2ApaA3q7IBPI",
    authDomain: "ngbizlisting.firebaseapp.com",
    databaseURL: "https://ngbizlisting.firebaseio.com",
    storageBucket: "ngbizlisting.appspot.com",
    messagingSenderId: "204143152286"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
