import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './components/store/games/games.component';
import { CartComponent } from './components/store/cart/cart.component';
import { TotalComponent } from './components/store/cart/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    CartComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
